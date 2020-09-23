import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { AuthorisationService } from 'src/app/settings/authorisation/authorisation.service';
import { SettingTeamSpaceModel } from 'src/app/settings/authorisation/settings-model/setting-team-space-model.model';


@Component({
  selector: 'app-team-add-dialog',
  templateUrl: './team-add-dialog.component.html',
  styleUrls: ['./team-add-dialog.component.scss']
})
export class TeamAddDialogComponent implements OnInit {

  teamForm: FormGroup;
  submitted = false;
  titlesTeamSpace: string = '';
 // selectedUser: string = '';

  membersList: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];
  selectedUser: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TeamAddDialogComponent>,
    private settingsService: AuthorisationService,
    private formBuilder: FormBuilder
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
   // console.log("modelData:: " + JSON.stringify(this.data.modeldata));

       this.getUsersList();

    this.teamForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      TeamSpaceMember: ['', Validators.required],
    });

    if (!!this.data.modeldata) {

      this.selectedUser=this.getMembersStr(this.data.modeldata);
      
      //console.log("oninitUser:: "+this.selectedUser);

      this.titlesTeamSpace = "Edit";

      this.teamForm.controls['Name'].setValue(
        this.data.modeldata.Name
      );
      //this.teamForm.controls['Name'].disable();
      this.teamForm.controls['Name'].disable();
      this.teamForm.controls['Description'].setValue(
        this.data.modeldata.Description
      );
      this.teamForm.controls['Description'].disable();
      this.teamForm.controls['TeamSpaceMember'].setValue(
       // this.data.modeldata.TeamSpaceMember
       this.selectedUser
      );
    } else {
      this.titlesTeamSpace = "Add";
    }


  }

  get f() {
    return this.teamForm.controls;
  }

  getUsersList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getUsersList(customer.CustomerId)
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.membersList= res.users;
      // console.log("this.membersList:: " + JSON.stringify(this.membersList));
      });
  }

  getMembersStr(element) {
    let arrayMemberData = [];
    let arrayMembersList = element.teamSpaceMembers

    if (arrayMembersList instanceof Array) {
      if (arrayMembersList.length > 0) {
        for (var i = 0; i < arrayMembersList.length; i++) {
          let insideArrayJson = arrayMembersList[i];
          if (insideArrayJson.hasOwnProperty("CustomerId")) {
            let singleData = insideArrayJson.CustomerId
            arrayMemberData.push(singleData);
          }
        }
      }
    } else {
      arrayMembersList = element.TeamSpaceMember

      //console.log("arrayMembersList:: "+arrayMembersList);
      let spliteData = arrayMembersList;
      //console.log("spliteData:: "+spliteData);
      var splits = spliteData.split(",");
      for (var i = 0; i < splits.length; i++) {
        arrayMemberData.push(splits[i]);
      }
    
    }
    // return arrayMemberData;
    return Array.from(new Set(arrayMemberData));
  }


  saveUserAdd() {
    //this.dialogRef.close('sending data to TeamSpace component');
    this.submitted = true;
    // stop here if form is invalid

   // console.log("this.teamForm.value.TeamSpaceMember:: "+this.teamForm.value.TeamSpaceMember);

//console.log("selectedUser:: "+this.selectedUser);

    if (this.teamForm.invalid) {
      return;
    }

    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newTeamSpaceAddObj = new SettingTeamSpaceModel();
    //let memberstr=this.teamForm.value.TeamSpaceMember;
    //console.log("name::"+this.teamForm.controls['Name'].value);
    // newTeamSpaceAddObj.Name = this.teamForm.value.Name;

    newTeamSpaceAddObj.Name = this.teamForm.controls['Name'].value;
    newTeamSpaceAddObj.Status = 'Enable';
    newTeamSpaceAddObj.UserId = customer.CustomerId;
    newTeamSpaceAddObj.TeamSpaceMember = this.teamForm.value.TeamSpaceMember.toString();
    // newTeamSpaceAddObj.Description = this.teamForm.value.Description;
    newTeamSpaceAddObj.Description = this.teamForm.controls['Description'].value;

    //console.log("newTeamSpaceAddObj:: "+JSON.stringify(newTeamSpaceAddObj));

    if (!!this.data.modeldata) {
      newTeamSpaceAddObj.Id = this.data.modeldata.Id
    }

    this.dialogRef.close(newTeamSpaceAddObj);
   
  }

  close() {
    this.dialogRef.close();
  }


}
