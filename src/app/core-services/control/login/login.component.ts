import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { Router } from '@angular/router';
import { GlobalConstantService } from '../../global-constant.service';
import { FormControl, Validators } from '@angular/forms';
import { BaseAuthGuardService } from '../../auth/base-auth-guard.service';
import { catchError, finalize } from 'rxjs/operators';
import { UserData } from '../../auth/authenticate.model';
import { HttpParams } from '@angular/common/http';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnChanges {
  constructor(
    private UiService: UiService,
    private router: Router,
    private authGuard: BaseAuthGuardService,
    private globalConstants: GlobalConstantService
  ) {}
  isForgot = false;

  userdata: UserModel;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.UiService.isLogginPage.next(true);
  }
  ngOnChanges() {}

  forgotPassword() {
    this.isForgot = true;
  }
  goToLogin() {
    this.isForgot = false;
  }

  public goToRegistration(): void {
    this.router.navigateByUrl('registration');
  }

  // this.email.value, this.password.value

  logggedIn() {
    let params = new HttpParams()
      .set('userid', this.email.value)
      .set('password', this.password.value);
    // let params = {
    //   username: this.email.value,
    //   password: this.password.value,
    // };
    this.authGuard.LoggedUser(params).subscribe((res) => {
      console.log(res);
      if (res.User) {
        // if (res) {
        debugger;
        this.userdata = res.User;
        localStorage.setItem('currentUser', JSON.stringify(this.userdata));
        // localStorage.setItem('currentUser', JSON.stringify(res));
        const customer = JSON.parse(localStorage.getItem('currentUser'));
        this.UiService.isLogginPage.next(false);
        this.router.navigate(['/customerdashboard']);
        // this.router.navigate(['/customers']);

        // this.router.navigate(['/customer/overview'], { queryParams: {CustomerId:customer.CustomerId} });
      }
    });
  }

  //-------------------------------------------JWT Approach---------------------------------------------------------------

  authenticateUser() {
    //Here two ways for authentication
    if (this.globalConstants.AppSettings.switchMiddleTierV2) {
      this.getToken();
    } else {
      this.ValidateCredentials();
    }
  }

  getToken() {
    this.authGuard
      .gettoken(this.email.value, this.password.value)
      .pipe(
        catchError((error) => {
          let message = JSON.parse(error).data.message;
          return null;
        })
      )
      .subscribe(
        (res) => {
          localStorage.setItem('UserAccessToken', res['access_token']);
          this.getTokenInformation(res['access_token']);
        },
        (error) => {}
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return errorMessage;
  }

  getTokenInformation(token: string) {
    if (token == undefined) {
      return;
    }
    this.authGuard.gettokenInformation(token).subscribe((response) => {
      if (response.responseCode !== '200') {
      } else {
        // this.userdata = response;
        localStorage.setItem('userdata', JSON.stringify(this.userdata));
        this.router.navigate(['/home/dashboard']);
      }
    });
  }

  ValidateCredentials() {
    this.authGuard
      .AuthenticateUser(this.email.value, this.password.value)
      .pipe(
        finalize(() => {
          // this.loader.display(false);
        })
      )
      .subscribe((response) => {
        if (response.responseCode !== '200') {
          // this.notification.onError(response.message);
        } else {
          // this.userdata = response;
          localStorage.setItem('userdata', JSON.stringify(this.userdata));
          //  this.notification.onSuccess('Login successful');
          this.router.navigate(['/home/dashboard']);
        }
      });
  }
}
