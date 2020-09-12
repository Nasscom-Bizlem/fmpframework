import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { BaseAuthGuardService } from '../../auth/base-auth-guard.service';
import { ForgotPasswordModel } from '../../auth/authenticate.model';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authGuard: BaseAuthGuardService,
    private router: Router
  ) {}
  submitted = false;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cpassword: ['', Validators.required],
        company: ['', Validators.required],
        phone: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'cpassword'),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert(
    //   'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    // );
    this.registerForm.value;
    // let registerObj = new ForgotPasswordModel();
    // registerObj.name = this.registerForm.value.firstName;
    // registerObj.email = this.registerForm.value.email;
    // registerObj.password = this.registerForm.value.password;
    // registerObj.cpassword = this.registerForm.value.cpassword;
    // registerObj.company = this.registerForm.value.company;
    // registerObj.phone = this.registerForm.value.phone;

    let params = new HttpParams()
      .set('name', this.registerForm.value.firstName)
      .set('email', this.registerForm.value.email)
      .set('password', this.registerForm.value.password)
      .set('cpassword', this.registerForm.value.cpassword)
      .set('company', this.registerForm.value.company)
      .set('phone', this.registerForm.value.phone);
    this.authGuard.ForgotPasswordData(params).subscribe((res) => {
      debugger;
      console.log(res);
      this.onReset();
      this.router.navigate(['login']);
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value);
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } };
}
