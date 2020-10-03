import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OAuth, OAuthRootModel } from 'src/app/settings/setup/setup-model/oauth.model';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-oauth-dialog',
  templateUrl: './add-oauth-dialog.component.html',
  styleUrls: ['./add-oauth-dialog.component.scss']
})
export class AddOauthDialogComponent implements OnInit {
  addOauthForm: FormGroup;
  submitted = false;
  customerId: any;
  titlesOAuth: any;
  percentDone: number;
  uploadSuccess: boolean;
  showeditimage: boolean = false;
  filepathImage: string = '';
  //public oAuth: OAuth;
  //public uploadfileremovefocus ;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOauthDialogComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private datePipe: DatePipe
  ) {
    dialogRef.disableClose = true;
    /* this.uploadfileremovefocus =  document.getElementById("uploadfileremovefocus") 
   this.uploadfileremovefocus.classList.remove('mat-focused' ) */
  }



  ngOnInit(): void {
    //console.log("modelData:: " + JSON.stringify(this.data.modeldata));

    this.addOauthForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      // file: ['', Validators.required],
      // file: [''],
      // fileSource: ['', Validators.required],
      fileSource: [''],
    });

    if (!!this.data.modeldata) {
      this.titlesOAuth = "Edit";

      this.addOauthForm.controls['name'].setValue(
        this.data.modeldata.Name
      );
      this.addOauthForm.controls['url'].setValue(
        this.data.modeldata.Url
      );

      if (!!this.data.modeldata.FilePath) {
        this.showeditimage = true;
        this.filepathImage = this.data.modeldata.FilePath;
      } else {
        this.showeditimage = false;
      }

    } else {
      this.titlesOAuth = "Add";
      this.showeditimage = false;
    }

  }

  get f() {
    return this.addOauthForm.controls;
  }

  uploadedData: any = {};
  //csvContent: File[] = []
  //fileToUpload: File = null;

  onChange(e: any) {
    //console.log(e.target.files[0]);
    let files = e.target.files;
    if (files[0]) {
      this.uploadedData["fileName"] = files[0].name;
      /*  let reader = new FileReader();
       reader.readAsDataURL(files[0]); */
      //this.fileToUpload = files.item(0);

      /*  reader.onloadend = function () {
         let filedata = reader.result;
         let fd = filedata.toString().substring(0, filedata.toString().indexOf(",") + 1);
         let fdata = filedata.toString().replace(fd, "");
         //console.log("fdata:: " + fdata);
           // this.uploadedData["oauthFile"]=encodeURI(fdata);
       } */
    }
  }

  isPresentFormdata: boolean = false;
  onFileChange(e) {

    if (e.target.files.length > 0) {
      this.isPresentFormdata = true;
      this.showeditimage = false;
      //when it will upload goes in all edit data in formdata after append then send to api
      const file = e.target.files[0];
      this.addOauthForm.patchValue({
        fileSource: file
      });
    } else {
      //when it will not upload any file then it will send all data to normal obj for editing then sort on based on id. 
      this.isPresentFormdata = false;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.submitted = true;
    console.log("clickd");
    // stop here if form is invalid
    if (this.addOauthForm.invalid) {
      return;
    }
    console.log("clickd2");
    const customer = JSON.parse(localStorage.getItem('currentUser'));

    if (this.titlesOAuth == 'Add') {
      if (this.isPresentFormdata == true) {

        let formData = new FormData();
        formData.append('oauthFile', this.addOauthForm.get('fileSource').value);

        let oAuth = new OAuth();
        oAuth.Name = this.addOauthForm.value.name;
        formData.append('Name', this.addOauthForm.value.name);
        oAuth.Url = this.addOauthForm.value.url;
        formData.append('Url', this.addOauthForm.value.url);
        oAuth.UserId = customer.CustomerId;
        formData.append('UserId', customer.CustomerId);
        oAuth.fileName = this.uploadedData.fileName;
        formData.append('fileName', this.uploadedData.fileName);
        //console.log("formData:: " + formData);

        if (formData != null) {
          this.http.post(this.globalConstants.addOAuth, formData, { reportProgress: true, observe: 'events' })
            .subscribe(res => {
              if (res.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * res.loaded / res.total);
              } else if (res instanceof HttpResponse) {
                this.uploadSuccess = true;
                // console.log("resResponse:: " + JSON.stringify(res));

                let oauthRootModel = new OAuthRootModel();
                if (res.hasOwnProperty('body')) {
                  let body = res.body;
                  let arrayBody = [];
                  arrayBody.push(body);
                  for (let i = 0; i < arrayBody.length; i++) {
                    let insideObj = arrayBody[i];
                    if (insideObj.hasOwnProperty('ResponseCode')) {
                      oauthRootModel.ResponseCode = insideObj.ResponseCode;
                      oauthRootModel.ResponseMessage = insideObj.ResponseMessage;
                    }
                  }
                }
                setTimeout(() => {
                  this.closeDialog();
                  this.dialogRef.close(oauthRootModel);
                }, 3000);
              }//else close here
            });
        }
      }//
    }//Add closed here
    else {
      if (this.titlesOAuth == 'Edit') {
        let formData = new FormData();
        if (this.isPresentFormdata == true) {
          console.log("presentfromdata:: ");
          formData.append('oauthFile', this.addOauthForm.get('fileSource').value);
          formData.append('Name', this.addOauthForm.value.name);
          formData.append('Url', this.addOauthForm.value.url);
          formData.append('UserId', customer.CustomerId);

          if (!!this.data.modeldata) {
            formData.append('Id', this.data.modeldata.Id);
            //formData.append('FilePath', this.data.modeldata.FilePath);

            let dateFieldValue = this.datePipe.transform(
              this.data.modeldata.AtDate,
              'yyyy-MM-dd HH:mm:ss'
            );
            formData.append('AtDate', dateFieldValue);
          }
          //call edit api here

          if (formData != null) {
            this.http.post(this.globalConstants.editOAuth, formData, { reportProgress: true, observe: 'events' })
              .subscribe(res => {
                if (res.type === HttpEventType.UploadProgress) {
                  this.percentDone = Math.round(100 * res.loaded / res.total);
                } else if (res instanceof HttpResponse) {
                  this.uploadSuccess = true;
                 // console.log("resResponse:: " + JSON.stringify(res));

                  let oauthRootModel = new OAuthRootModel();
                  if (res.hasOwnProperty('body')) {
                    let body = res.body;
                    let arrayBody = [];
                    arrayBody.push(body);
                    for (let i = 0; i < arrayBody.length; i++) {
                      let insideObj = arrayBody[i];
                      if (insideObj.hasOwnProperty('ResponseCode')) {
                        oauthRootModel.ResponseCode = insideObj.ResponseCode;
                        oauthRootModel.ResponseMessage = insideObj.ResponseMessage;
                      }
                    }
                  }
                  setTimeout(() => {
                    this.closeDialog();
                    this.dialogRef.close(oauthRootModel);
                  }, 2000);
                }//else close here
              });
          }

        } else {
          console.log("presentnormal:: ");
          formData.append('Name', this.addOauthForm.value.name);
          formData.append('Url', this.addOauthForm.value.url);
          formData.append('UserId', customer.CustomerId);

          if (!!this.data.modeldata) {
            formData.append('Id', this.data.modeldata.Id);
            // formData.append('FilePath', this.data.modeldata.FilePath);

            let dateFieldValue = this.datePipe.transform(
              this.data.modeldata.AtDate,
              'yyyy-MM-dd HH:mm:ss'
            );
            formData.append('AtDate', dateFieldValue);
          }
          //call edit api here

          if (formData != null) {
            this.http.post(this.globalConstants.editOAuth, formData)
              .subscribe(res => {
               // console.log("resNormalResponse:: " + JSON.stringify(res));
                let oauthRootModel = new OAuthRootModel();
                let strObj = JSON.stringify(res);
                let obj = JSON.parse(strObj);
                if (obj.hasOwnProperty('ResponseCode')) {
                  oauthRootModel.ResponseCode = obj.ResponseCode;
                  oauthRootModel.ResponseMessage = obj.ResponseMessage;

                  setTimeout(() => {
                    this.closeDialog();
                    this.dialogRef.close(oauthRootModel);
                  }, 2000);

                }
              });
          }

        }

      }//edit closed here

    }
    /*  this.dialogRef.close({
       status: true,
       teamSpaceData: this.addOauthForm.value,
     }); */
  }

}
