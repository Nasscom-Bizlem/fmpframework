import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import {SuspendAccountModel} from './suspend-account-model';
@Injectable({
  providedIn: 'root'
})
export class SuspendaccountService {

  constructor(
    private http: HttpClient,
    
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService,
    //private suspendaccountModel : SuspendAccountModel,

  ) { }

  public callSuspendAccount(data: SuspendAccountModel) {
    return this.http
      .post<any>(this.globalConstants.updateSuspendStatus, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }
  
  public callfetchcustomer() {
    return this.http
      .get<any>(
        this.globalConstants.FetchCustomerMaster)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }


  public callfetchserviceListbyCRN(CRN,suspendstatus) {
    let params = new HttpParams().set('CRN', CRN).set('suspendstatus', suspendstatus);
return this.http
.get<any>(
  this.globalConstants.fetchserviceListbyCRN, { params })
  .pipe(catchError(this.baseAuthSercvice.handleError));
}

}
