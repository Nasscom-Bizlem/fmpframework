import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { FieldsRootModel } from './recon.model';

@Injectable({
  providedIn: 'root',
})
export class ReconService {
  allFields: any;

  constructor(
    private httpClient: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) {}

  getReconFieldResponse(ColumnType: string) {
    return this.httpClient.get<any>(
      this.globalConstants.getReconFields.replace('#ColumnType', ColumnType),
      this.globalConstants.getHeaders()
    );
  }

  getAllFields() {
    if (!this.allFields) {
      this.allFields = forkJoin([
        this.getReconFieldResponse('Transaction'),
        this.getReconFieldResponse('Payment'),
        this.getReconFieldResponse('Invoice'),
        this.getReconFieldResponse('Settlement'),
        this.getReconFieldResponse('Dispute'),
      ]).pipe(
        map((res) => {
          return <FieldsRootModel>{
            Transaction: res[0],
            Payment: res[1],
            Invoice: res[2],
            Settlement: res[3],
            Dispute: res[4],
          };
        }),
        shareReplay()
      );
    }
    return this.allFields;
  }

  public getReconList(
    ColumnType: any,
    UserId: any,
    StartIndex: any,
    LastIndex: any,
    filterRequest: any
  ) {
    debugger;
    console.log(JSON.stringify(filterRequest));
    let params = new HttpParams()
      .set('ColumnType', ColumnType)
      .set('UserId', UserId)
      .set('StartIndex', StartIndex)
      .set('LastIndex', LastIndex)
      .set('filterRequest', JSON.stringify(filterRequest));

    return this.httpClient
      .post<any>(
        this.globalConstants.getReconList,
        params,
        this.globalConstants.getHeaders()
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
}
