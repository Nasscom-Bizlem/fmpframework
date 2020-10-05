import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddEmail, oAuthsData, saveAuthToken, AppOAuthSettings } from './add-email.model';
import { EmailServiceService } from 'src/app/settings/setup/email/email-service.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';

export interface Icons {
  image: string;
  imageName: string;
}


export class Dumdata {
  Id: number;
  FilePath: string;
  Url: string;
  Name: string;
  UserId: string;
  AtDate: string;
}



@Component({
  selector: 'app-add-email-dialog',
  templateUrl: './add-email-dialog.component.html',
  styleUrls: ['./add-email-dialog.component.scss']
})
export class AddEmailDialogComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;
  customerId: any;
  oAuthsList: Array<oAuthsData> = [];


  icon: Icons[] = [
    { image: 'assets/images1/user.png', imageName: 'user' },
    { image: 'assets/images1/user.png', imageName: 'user' },
    { image: 'assets/images1/user.png', imageName: 'user' },
    { image: 'assets/images1/user.png', imageName: 'user' },
    { image: 'assets/images1/user.png', imageName: 'user' },
  ];

  dumdata: Dumdata[] = [{ Id: 1, FilePath: "http://199.217.112.145:8089/fma/OAuthDocuments/7694278b-bb0e-4af3-b346-48050b4276b9/chrysanthemum.jpg", Url: "developer", Name: "developer team", UserId: "cus1001", AtDate: "Sep 29, 2020 5:18:44 PM" },
  { Id: 2, FilePath: "http://199.217.112.145:8089/fma/OAuthDocuments/05beeaaa-3e8c-47e3-ad68-671a7610dd55/chrysanthemum.jpg", Url: "developer", Name: "developer team", UserId: "cus1001", AtDate: "Sep 29, 2020 5:21:22 PM" }
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEmailDialogComponent>,
    private formBuilder: FormBuilder,
    private emailServiceService: EmailServiceService,
    private http: HttpClient,
    private globalConstants: GlobalConstantService,

  ) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      Hostname: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', [Validators.required]],
    });

    this.displayoAuthsList();
  }



  get f() {
    return this.emailForm.controls;
  }
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let AddEmailObj = new AddEmail();

    AddEmailObj.Hostname = this.emailForm.value.Hostname;
    AddEmailObj.Username = this.emailForm.value.Username;
    AddEmailObj.Password = this.emailForm.value.Password;
    AddEmailObj.UserId = customer.CustomerId;
    console.log("AddEmailObj " + JSON.stringify(AddEmailObj));
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close(AddEmailObj);
  }

  displayoAuthsList() {
    console.log("getemailSettingsList called");
    const customer1 = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    console.log("customer1.CustomerId " + customer1.CustomerId);

    this.emailServiceService
      .getoAuthsList(customer1.CustomerId)
      .subscribe((res) => {
        console.log("resGetNoteList:: " + JSON.stringify(res));
        //console.log(res);
        console.log(this.oAuthsList);
        this.oAuthsList = res.oAuthsList;
      });
  }


  onclicksaveurl(_url: any, type: any) {

    let typeSource = String(type);
    console.log("typeSource " + typeSource);

    var top = window.screen.height - 600;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 800;
    left = left > 0 ? left / 2 : 0;

    var win = window.open(_url, "windowname1", "width=800,height=600" + ",top=" + top + ",left=" + left);
    win.moveTo(left, top);
    win.focus();
    const customer = JSON.parse(localStorage.getItem('currentUser'));

    var pollTimer = window.setInterval(() => {
      try {
        console.log(win.document.URL);
        if (win.document.URL.indexOf(AppOAuthSettings.currentWindowUrl) != -1) {
          window.clearInterval(pollTimer);
          var url = win.document.URL;
          var newcode = this.getcode(url, AppOAuthSettings.code);

          let AuthApi = "";
          const formData = new FormData();
          if (typeSource.toUpperCase() == AppOAuthSettings.GMAIL) {
            // append data
            formData.append(AppOAuthSettings.code, newcode);
            formData.append(AppOAuthSettings.client_id_key, AppOAuthSettings.client_id);
            formData.append(AppOAuthSettings.client_secret_key, AppOAuthSettings.client_secret);
            formData.append(AppOAuthSettings.grant_type_key, AppOAuthSettings.authorization_code);
            formData.append(AppOAuthSettings.redirect_uri_key, AppOAuthSettings.redirect_uri);
            AuthApi = AppOAuthSettings.gmailOAuthApi;
          } else if (type == AppOAuthSettings.OUTLOOK) { }

          this.http.post(AuthApi, formData)
            .subscribe(res => {
              //console.log("OauthCheckHardcoded:: " + JSON.stringify(res));
              let strJsonObj = JSON.stringify(res);
              let parsedObj = JSON.parse(strJsonObj);
              let oauthTokenObj = new saveAuthToken();

              oauthTokenObj.AccessToken = parsedObj.access_token;
              oauthTokenObj.RefreshToken = parsedObj.refresh_token;
              oauthTokenObj.TokenType = typeSource;
              oauthTokenObj.UserId = customer.CustomerId;
              oauthTokenObj.ClientSecret = AppOAuthSettings.client_secret;
              oauthTokenObj.AuthCode = newcode;
              oauthTokenObj.RedirectUrl = AppOAuthSettings.redirect_uri;

              this.http.post(this.globalConstants.addAuthToken, oauthTokenObj)
                .subscribe(res => {
                 // console.log("oauthTokenObj:: " + JSON.stringify(res));
                });
            });


          win.close();
        }
      } catch (e) {
      }
    }, 500);
  }

  getcode(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&?]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
      return "";
    else
      return results[1];
  }


}
