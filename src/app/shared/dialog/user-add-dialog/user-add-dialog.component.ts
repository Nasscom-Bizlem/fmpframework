import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { SettingUserModel } from 'src/app/settings/authorisation/settings-model/setting-user-model.model';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss']
})
export class UserAddDialogComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  titlesUser: string = '';
  minPw = 6;
  hide = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserAddDialogComponent>,
    private formBuilder: FormBuilder
  ) { 
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

    //console.log("modelData:: " + JSON.stringify(this.data.modeldata));

    this.userForm = this.formBuilder.group(
      {
        UserId: ['', Validators.required],   //Login
        Name: ['', Validators.required],
        LastName: ['', Validators.required],
        EmailId: ['', [Validators.required, Validators.email]],
        /*  Password: ['', Validators.required],
         confirmation: ['', Validators.required], */
        Password: ['', [Validators.required, Validators.minLength(this.minPw)]],
        confirmation: ['', [Validators.required]],
        generate_password: [false, null],
        change_password_next: [false, null],
      }, { validator: passwordMatchValidator }
      /*  ,
       {
         validator: MustMatch('Password', 'confirmation'),
       } */

    );

    if (!!this.data.modeldata) {
      this.titlesUser = "Edit";
    } else {
      this.titlesUser = "Add";
    }

  }

  get f() {
    return this.userForm.controls;
  }

  get Password() { return this.userForm.get('Password'); }
  get confirmation() { return this.userForm.get('confirmation'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.userForm.hasError('passwordMismatch'))
      this.confirmation.setErrors([{ 'passwordMismatch': true }]);
    else
      this.confirmation.setErrors(null);
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

  saveUserAdd() {
   // this.dialogRef.close('sending data to User component');
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let userAddObj = new SettingUserModel();

    userAddObj.UserId = this.userForm.value.UserId;
    userAddObj.Password = this.userForm.value.Password;
    userAddObj.Name = this.userForm.value.Name;
    userAddObj.LastName = this.userForm.value.LastName;
    userAddObj.MobileNumber = '';
    userAddObj.EmailId = this.userForm.value.EmailId;
    userAddObj.UserStatus = 'Enable';
    userAddObj.ConfrimPassword = this.userForm.value.confirmation;
    userAddObj.ManagerId = customer.CustomerId;

    userAddObj.generatePassword = this.generatePassword;
    userAddObj.ChangePasswordNextLogin = this.ChangePasswordNextLogin;

   // console.log("userAddObj:: "+JSON.stringify(userAddObj));

    this.dialogRef.close(userAddObj);
  }

  close() {
    this.dialogRef.close();
  }

}

export const passwordMatchValidator: ValidatorFn = (userForm: FormGroup): ValidationErrors | null => {
  if (userForm.get('Password').value === userForm.get('confirmation').value)
    return null;
  else
    return { passwordMismatch: true };
};

