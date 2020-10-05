import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { Observable, forkJoin } from 'rxjs';
import { WhatsupSms, WhatsappsmsRootModel,
  WhatsappsmsSaveModel,WhatsappsmsEditModel } from 'src/app/shared/dialog/edit-whatsapp-dialog/whatsup-sms.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsappSmsService {

  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService

  ) { }



  

  //addNoteList
  public addWhatsappSmsList(data: WhatsupSms) {
    return this.http
      .post<WhatsappsmsSaveModel>(this.globalConstants.AddwhatsappsmsList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getWhatsappSmsList(customerId: any) {
    let params = new HttpParams().set('userId', customerId);
    return this.http
      .post<WhatsappsmsRootModel>(
        this.globalConstants.getwhatsappsmsList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editWhatsappSms(data: any) {
    return this.http
      .post<WhatsappsmsEditModel>(this.globalConstants.editwhatsappsmsList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteWhatsappSms(data: any) {
    return this.http
      .post<any>(this.globalConstants.deletewhatsappsmsList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
}
