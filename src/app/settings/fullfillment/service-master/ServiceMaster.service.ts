import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import {ServiceMasterModel} from './servicemaster.model';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceMasterService {

  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) { }

  public addServiceMaster(data: ServiceMasterModel) {
    return this.http
      .post<any>(this.globalConstants.addServicemaster, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }


}
