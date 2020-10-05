import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { catchError } from 'rxjs/operators';
import { MailHostModel, MailHostRootModel, UpdateMailHostRootModel } from './setup-model/mail-host-model.model';
import { OAuth, OAuthRootModel, UpdateOAuthRootModel } from './setup-model/oauth.model';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) { }

  public addMailHost(data: MailHostModel) {
    return this.http
      .post<MailHostRootModel>(this.globalConstants.addMailHost, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getMailHostList(customerId: any) {
    let params = new HttpParams().set('userId', customerId);
    return this.http
      .post<MailHostRootModel>(
        this.globalConstants.getMailHostList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteMailHost(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteMailHost, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editMailHost(data: any) {
    return this.http
      .post<UpdateMailHostRootModel>(this.globalConstants.editMailHost, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public addOAuth(data: OAuth) {
    return this.http
      .post<OAuthRootModel>(this.globalConstants.addOAuth, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getOAuthList(customerId: any) {
    let params = new HttpParams().set('userId', customerId);
    return this.http
      .post<OAuthRootModel>(
        this.globalConstants.getOAuthList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteOAuth(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteOAuth, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editOAuth(data: any) {
    return this.http
      .post<UpdateOAuthRootModel>(this.globalConstants.editOAuth, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }



  
}
