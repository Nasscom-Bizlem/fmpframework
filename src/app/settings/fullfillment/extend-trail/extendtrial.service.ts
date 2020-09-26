import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import {ExtendtrialModel} from 'src/app/settings/fullfillment/extend-trail/extendtrial.model';
@Injectable({
  providedIn: 'root'
})
export class ExtendtrialService {

  constructor(

    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService

  ) { }


  // public callfetchcustomer(data: any) {
  //   return this.http
  //     .post<any>(this.globalConstants.addServicemaster, data)
  //     .pipe(catchError(this.baseAuthSercvice.handleError));    
  // }

  public callfetchcustomer() {
    return this.http
      .get<any>(
        this.globalConstants.FetchCustomerMaster)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public callTransType() {
    return this.http
      .get<any>(
        this.globalConstants.FetchTransType)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  
public saveExtendFreetrial(data: ExtendtrialModel){
  return this.http
  .post<any>(this.globalConstants.Extendtrail, data)
  .pipe(catchError(this.baseAuthSercvice.handleError));    
}



}
