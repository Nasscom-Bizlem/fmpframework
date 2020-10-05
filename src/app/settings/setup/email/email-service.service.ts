import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { Observable, forkJoin } from 'rxjs';
import { AddEmail, EditEmailRootModel, SaveEmailRootModel ,ListEmailRootModel
,getoAuthsListRootModel, saveAuthToken} from 'src/app/shared/dialog/add-email-dialog/add-email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) { }


  //addNoteList
  public addemailSettingList(data: AddEmail) {
    return this.http
      .post<SaveEmailRootModel>(this.globalConstants.AddemailSettingList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getemailSettingList(customerId: any) {
    let params = new HttpParams().set('userId', customerId);
    return this.http
      .post<ListEmailRootModel>(
        this.globalConstants.getemailSettingList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editemailSetting(data: any) {
    return this.http
      .post<EditEmailRootModel>(this.globalConstants.editemailSettingList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteemailSetting(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteemailSettingList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getoAuthsList(customerId: any) {
    let params = new HttpParams().set('userId', customerId);
    return this.http
      .post<getoAuthsListRootModel>(
        this.globalConstants.getoAuthsList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }


  public addAuthToken(data :saveAuthToken){
    return this.http
      .post<any>(this.globalConstants.addAuthToken, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));

  }
}

