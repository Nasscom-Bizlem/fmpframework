import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalConstantService } from '../global-constant.service';
import {
  UserData,
  Authentication,
  Token,
  ForgotPasswordModel,
} from './authenticate.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserBaseModel } from '../control/user.model';

@Injectable({
  providedIn: 'root',
})
export class BaseAuthGuardService {
  constructor(
    public http: HttpClient,
    public globalConstants: GlobalConstantService
  ) {}

  public AuthenticateUser(
    userName: string,
    password: string
  ): Observable<UserData> {
    const authentication: Authentication = {
      userid: userName,
      password: password,
    };

    return this.http
      .post<UserData>(
        this.globalConstants.ValidateCredentailsURL,
        authentication
      )
      .pipe(catchError(this.handleError));
  }

  //LoginDetails Currently Using

  public LoggedUser(params: any): Observable<UserBaseModel> {
    // const authentication: Authentication = {
    //   userid: userName,
    //   password: password,
    // };
    debugger;

    return this.http
      .post<UserBaseModel>(this.globalConstants.LoginDetails, params)
      .pipe(catchError(this.handleError));
  }

  public ForgotPasswordData(data: any) {
    debugger;

    return this.http
      .post<any>(this.globalConstants.ForgotPassword, data)
      .pipe(catchError(this.handleError));
  }

  ///------------------------------------------------------------------

  public ForgotPassword(userName: string) {
    return this.http
      .get(this.globalConstants.ForgotPasswordURL + userName)
      .pipe(catchError(this.handleError));
  }

  //

  public gettoken(userName: string, password: string): Observable<Token> {
    var config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    };
    var requestdata =
      'grant_type=password&username=' + userName + '&password=' + password;
    return this.http.post<Token>(
      this.globalConstants.TokenURL,
      requestdata,
      config
    );
  }

  public gettokenInformation(token: string): Observable<UserData> {
    var header = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    return this.http
      .get<UserData>(this.globalConstants.TokenInformationURL, header)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
