import { Component, OnInit, Inject, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/shared/ui.service';
import { SettingAllocationModel } from '../settings-model/setting-allocation-model.model';
import { SettingUserModel } from '../settings-model/setting-user-model.model';
import { AuthorisationService } from '../authorisation.service';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
 

  userEditForm: FormGroup;
  allocationForm: FormGroup;
  submitted = false;
  submitted1 = false;
  title: any = '';
  usersUniqueId: any = '';
  editJson: any = {};
  saveJson: any = {};
  teamSpaceList: any[];
  roleList: any[];
  selectedSpaceData: string = '';
  selectedRoleData: string = '';
  minPw = 6;
  userAddObj = new SettingUserModel();
  showMsgAllocation: boolean = false;
  showMsgGeneral: boolean = false;

  selectedalloationTeamSpace: any[];
  selectedalloationRole: any[];
  hide = true;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(
    /*  @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<UserDetailComponent>, */
    private formBuilder: FormBuilder,
    public router: Router,
    private uiService: UiService,
    private settingsService: AuthorisationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      // Defaults to 0 if no query param provided.
      if (params['id']) {
        this.usersUniqueId = params['id'];
        this.getUsersInfo();
      }
    });

    this.userEditForm = this.formBuilder.group({
      UserId: ['', Validators.required],   //Login
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      /*  Password: ['', Validators.required],
       confirmation: ['', Validators.required], */
      Password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      confirmation: ['', [Validators.required]],
      /*  Password: [''],
       confirmation: [''], */
      generate_password: [false, null],
      change_password_next: [false, null],
      send: [true, null],
    },
      { validator: passwordMatchValidator }
    );


   

    /*  this.uiService.elementdata.subscribe((res: any) => {
       //debugger;
       if (!!res) {
         //console.log("res:: " + JSON.stringify(res));
 
         this.userAddObj.UserId = res.UserId;
         this.userAddObj.Password = res.Password;
         this.userAddObj.Name = res.Name;
         this.userAddObj.LastName = res.LastName;
         this.userAddObj.MobileNumber = '';
         this.userAddObj.EmailId = res.EmailId;
         this.userAddObj.UserStatus = 'Enable';
         this.userAddObj.ConfrimPassword = res.confirmation;
 
        // console.log("this.userAddObjinside:: " + JSON.stringify(this.userAddObj));
         this.editJson = res;
       }
     }); */

    /*   //Set value
      this.userEditForm.controls['UserId'].setValue(
        this.userAddObj.UserId
      );
      
      this.userEditForm.controls['Name'].setValue(
       this.userAddObj.Name
      );
      this.userEditForm.controls['LastName'].setValue(
        this.userAddObj.LastName
       );
       this.userEditForm.controls['EmailId'].setValue(
        this.userAddObj.EmailId
       ); */

    this.allocationForm = this.formBuilder.group({
      team_space: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });

    this.getTeamSpaceList();
    this.getRoleList();
    //  this.getAllocationList();


  }

  get f() {
    return this.userEditForm.controls;
  }

  get j() {
    return this.allocationForm.controls;
  }

  /* Shorthands for form controls (used from within template) */
  get Password() { return this.userEditForm.get('Password'); }
  get confirmation() { return this.userEditForm.get('confirmation'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.userEditForm.hasError('passwordMismatch'))
      this.confirmation.setErrors([{ 'passwordMismatch': true }]);
    else
      this.confirmation.setErrors(null);
  }

  getSavedRoleAllocationStr(element) {
    let arrayMemberData = [];
    if (element.hasOwnProperty("allocatedAppRoles")) {
      if (element.allocatedAppRoles instanceof Array) {
        if (element.allocatedAppRoles.length > 0) {
          for (var i = 0; i < element.allocatedAppRoles.length; i++) {
            let insideArrayJson = element.allocatedAppRoles[i];
            if (insideArrayJson.hasOwnProperty("Id")) {
              let singleData = insideArrayJson.Id
              arrayMemberData.push(singleData);
            }
          }
        }
      }
    }
    return arrayMemberData;

  }

  getSavedRoleAllocationStrAlocation(element) {
    let arrayMemberData = [];
    if (element.hasOwnProperty("allocatedAppRoles")) {
      if (element.allocatedAppRoles instanceof Array) {
        if (element.allocatedAppRoles.length > 0) {
          for (var i = 0; i < element.allocatedAppRoles.length; i++) {
            let insideArrayJson = element.allocatedAppRoles[i];
            if (insideArrayJson.hasOwnProperty("Id")) {
              let singleData = insideArrayJson.Id
              arrayMemberData.push(singleData);
            }
          }
        }
      }
    }
    return arrayMemberData.toString();

  }

  getTeamSpaceSavedAllocationStr(element) {
    let arrayMemberData = [];

    if (element.hasOwnProperty("allocatedTeamSpaces")) {
      if (element.allocatedTeamSpaces instanceof Array) {
        if (element.allocatedTeamSpaces.length > 0) {
          for (var i = 0; i < element.allocatedTeamSpaces.length; i++) {
            let insideArrayJson = element.allocatedTeamSpaces[i];
            if (insideArrayJson.hasOwnProperty("Id")) {
              let singleData = insideArrayJson.Id
              arrayMemberData.push(singleData);
            }
          }
        }
      }
    }

    return arrayMemberData;
  }

  getTeamSpaceSavedAllocationStrAllocation(element) {
    let arrayMemberData = [];

    if (element.hasOwnProperty("allocatedTeamSpaces")) {
      if (element.allocatedTeamSpaces instanceof Array) {
        if (element.allocatedTeamSpaces.length > 0) {
          for (var i = 0; i < element.allocatedTeamSpaces.length; i++) {
            let insideArrayJson = element.allocatedTeamSpaces[i];
            if (insideArrayJson.hasOwnProperty("Id")) {
              let singleData = insideArrayJson.Id
              arrayMemberData.push(singleData);
            }
          }
        }
      }
    }

    return arrayMemberData;
  }

  getTeamSpaceList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getTeamSpaceList(customer.CustomerId)
      .subscribe((res) => {
        //console.log("getTeamSpacelist:: " + JSON.stringify(res));
        this.teamSpaceList = res.teamSpaces;
      });
  }

  getRoleList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getRoleList(customer.CustomerId)
      .subscribe((res) => {
       // console.log("getRolelist:: "+JSON.stringify(res));
        this.roleList = res.appRoles;
        //console.log("this.roleList:: "+JSON.stringify(this.roleList));
      });
  }

  uniq(a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  getUsersInfo() {
    this.settingsService
      .getUsersInfoList(this.usersUniqueId)
      .subscribe((res) => {
        console.log("getUsersInfolist:: " + JSON.stringify(res));
        this.editJson = res.users;
        this.saveJson = res;
        this.selectedalloationTeamSpace = this.getTeamSpaceSavedAllocationStr(res);
        this.selectedalloationTeamSpace = this.uniq(this.selectedalloationTeamSpace);
        this.selectedalloationRole = this.getSavedRoleAllocationStr(res);
        this.selectedalloationRole = this.uniq(this.selectedalloationRole);

        // this.title = ' / ' + ' ' + res.users.UserId;
        this.title =  res.users.UserId;
        this.userEditForm.controls['UserId'].setValue(
          res.users.UserId
        );
        this.userEditForm.controls['Name'].setValue(
          res.users.Name
        );
        this.userEditForm.controls['LastName'].setValue(
          res.users.LastName
        );
        this.userEditForm.controls['EmailId'].setValue(
          res.users.EmailId
        );

        this.allocationForm.controls['team_space'].setValue(
          this.selectedalloationTeamSpace
        );

        this.allocationForm.controls['role'].setValue(
          this.selectedalloationRole
        );

      });
  }

  getAllocationList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getAllocationList(customer.CustomerId)
      .subscribe((res) => {
        // console.log("getAllocationList:: " + JSON.stringify(res));
        //console.log("res.teamSpaceRoleAllocations[0].TeamSpaceId:: "+res.teamSpaceRoleAllocations[0].TeamSpaceId);
        //console.log("res.teamSpaceRoleAllocations[0].ApproleId:: "+res.teamSpaceRoleAllocations[0].ApproleId);
        this.selectedRoleData = res.teamSpaceRoleAllocations[0].ApproleId;
        this.selectedSpaceData = res.teamSpaceRoleAllocations[0].TeamSpaceId;
      });
  }

  generatePassword = 'false';
  ChangePasswordNextLogin = 'false';

  onCheckboxChangeGeneratePassword(e) {
    if (e.checked) {
      this.generatePassword = 'true';
      console.log("checkedgeneratePassword:: ");
    } else {
      console.log("uncheckedgeneratePassword:: ");
      this.generatePassword = 'false';
    }
  }

  onCheckboxChangePasswordNextLogin(e) {
    if (e.checked) {
      this.ChangePasswordNextLogin = 'true';
      console.log("checked:: ");
    } else {
      this.ChangePasswordNextLogin = 'false';
      console.log("unchecked:: ");
    }
  }


  saveUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userEditForm.invalid) {
      return;
    }

    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let userAddObj = new SettingUserModel();

    userAddObj.UserId = this.userEditForm.value.UserId;
    userAddObj.Password = this.userEditForm.value.Password;
    userAddObj.Name = this.userEditForm.value.Name;
    userAddObj.LastName = this.userEditForm.value.LastName;
    userAddObj.MobileNumber = '';
    userAddObj.EmailId = this.userEditForm.value.EmailId;
    userAddObj.UserStatus = 'Enable';
    userAddObj.ConfrimPassword = this.userEditForm.value.confirmation;
    userAddObj.ManagerId = customer.CustomerId;

    userAddObj.generatePassword = this.generatePassword;
    userAddObj.ChangePasswordNextLogin = this.ChangePasswordNextLogin;
    // console.log("userAddObj:  " + JSON.stringify(userAddObj));
    this.settingsService.editUsers(userAddObj).subscribe((userresponse) => {
      //console.log("userresponse:  " + JSON.stringify(userresponse));
      if (userresponse.ResponseCode == '1') {
        this.showMsgGeneral = true;
      } else {
        this.showMsgGeneral = false;
      }

    });


  }

  saveAllocation() {

    //console.log("userId1:: " + this.allocationForm.value.role);
    //console.log("userId2:: " + this.allocationForm.value.team_space);

    this.submitted1 = true;
    // stop here if form is invalid

    if (this.allocationForm.invalid) {
      return;
    }

    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newAllocationAddObj = new SettingAllocationModel();

    newAllocationAddObj.ApproleId = this.allocationForm.value.role;
    newAllocationAddObj.TeamSpaceId = this.allocationForm.value.team_space.toString();
    newAllocationAddObj.CustomerId = this.editJson.CustomerId;
    newAllocationAddObj.ManagerId = this.editJson.ManagerId;

    let arrayData = this.getSavedRoleAllocationStr(this.saveJson);
    let arrayDataTeam = this.getTeamSpaceSavedAllocationStrAllocation(this.saveJson);

    //console.log("newAllocationAddObj:: " + JSON.stringify(newAllocationAddObj));

    let datanew = [];
    let datanewTeam = [];
    let mergeData = [];
    let mergeDataTeam = [];

    for (let i = 0; i < newAllocationAddObj.ApproleId.length; i++) {
      datanew.push(newAllocationAddObj.ApproleId[i]);
    }
    for (let i = 0; i < newAllocationAddObj.TeamSpaceId.length; i++) {
      datanewTeam.push(newAllocationAddObj.TeamSpaceId[i]);
    }

    for (let i = 0; i < arrayData.length; i++) {
      for (let j = 0; j < datanew.length; j++) {
        if (arrayData[i] == datanew[j]) {
          
        } else {
          mergeData.push(datanew[j]);
        }
      }
    }

    mergeData= this.uniq(mergeData);

    for (let i = 0; i < arrayDataTeam.length; i++) {
      for (let j = 0; j < datanewTeam.length; j++) {
        if (arrayDataTeam[i] == datanewTeam[j]) {
         
        } else {
          mergeDataTeam.push(datanewTeam[j]);
        }
      }
    }

    mergeDataTeam = this.uniq(mergeDataTeam);

    newAllocationAddObj.ApproleId = mergeData.toString();
    newAllocationAddObj.TeamSpaceId = mergeDataTeam.toString();
    newAllocationAddObj.CustomerId = this.editJson.CustomerId;
    newAllocationAddObj.ManagerId = this.editJson.ManagerId;

    //console.log("newAllocationAddObj:: " + JSON.stringify(newAllocationAddObj));

      this.settingsService.addAllocationData(newAllocationAddObj).subscribe((addAllocationDataresponse) => {
       console.log("savedaddAllocationData:: " + JSON.stringify(addAllocationDataresponse));
      // this.showMsgAllocation = true;
 
       if(addAllocationDataresponse.ResponseCode=='1'){
         this.showMsgAllocation = true;
        }else{
         this.showMsgAllocation = false;
        }
 
     }); 


  }

  close() {
    this.router.navigate(['/settings/users']);
  }

}

export const passwordMatchValidator: ValidatorFn = (userEditForm: FormGroup): ValidationErrors | null => {
  if (userEditForm.get('Password').value === userEditForm.get('confirmation').value)
    return null;
  else
    return { passwordMismatch: true };
};
