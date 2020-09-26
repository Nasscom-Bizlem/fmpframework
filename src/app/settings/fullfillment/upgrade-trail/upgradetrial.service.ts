import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { UpgradeTrialModel } from './upgradetrial.model';
@Injectable({
  providedIn: 'root'
})
export class UpgradetrialService {

  constructor(

    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService

  ) { }


  public callfetchcustomer() {
    return this.http
      .get<any>(
        this.globalConstants.FetchCustomerMaster)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }


  public callfetchServicemaster() {
return this.http
.get<any>(
  this.globalConstants.fetchserviceMaster)
  .pipe(catchError(this.baseAuthSercvice.handleError));
}
  
public callupgradetrial(data: UpgradeTrialModel) {
  return this.http
    .post<any>(this.globalConstants.upgradetrial, data)
    .pipe(catchError(this.baseAuthSercvice.handleError));    
}

}
