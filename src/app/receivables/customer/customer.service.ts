import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import {
  CustomerTaskModel,
  CustomerTaskRootModel,
  CustomerTaskAddModel,
} from './customermodel/customertask.model';
import { Observable, forkJoin } from 'rxjs';
import { TaskModel, TaskRootModel } from './customermodel/updatetaskmodel';
import {
  CustomerLogACallModel,
  LogACallRootModel,
  LogACallAddRootModel,
} from './customermodel/customerlogcall.model';
import {
  CustomerDisputeModel,
  CustomerDisuteRootModel,
  UpdateCustomerDisuteRootModel,
} from './customermodel/customer-dispute.model';
// import { CustomerListRootModel } from './customermodel/customerlist.model';
import {
  CustomerNotesRootModel,
  UpdateCustomerNotesRootModel,
} from './customermodel/notes.model';
import {
  CustomersListRootModel,
  CustomerListNewRootModel,
} from './customermodel/customerlist.model';
import {
  CustomerEventRootModel,
  CustomerEventListRootModel,
} from './customermodel/customer-events.model';
import { CustomerInvoiceRootModel } from './customermodel/customer-invoice.model';
import {
  SaveUpdateCusProPayRootModel,
  GetPromisePayRootModel,
  PromisePayModel,
} from './customermodel/promise-pay.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) {}
  public getCustomerInformation(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<CustomerListNewRootModel>(
        this.globalConstants.getCustomerInfo,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //CustomerTaskModel
  public postCustomerTaskModel(data: CustomerTaskModel) {
    return this.http
      .post<CustomerTaskAddModel>(
        this.globalConstants.postAddCustomerTask,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public updateCustomerTask(data: TaskModel) {
    return this.http
      .post<TaskRootModel>(this.globalConstants.updateCustomerTask, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //TESTAPI

  public getTESTAPI() {
    return this.http
      .get<any>(
        this.globalConstants.TESTAPI,
        this.globalConstants.getHeaders()        
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public requestDataFromMultipleSources(
    customerId: string
  ): Observable<CustomerListNewRootModel[]> {
    let response1 = this.getCustomerInformation(customerId);
    // let response2 = this.getCustomerTaskList(customerId);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1]);
  }

  //Customer Log A CAll
  public createCustomerLogCall(data: CustomerLogACallModel) {
    return this.http
      .post<LogACallAddRootModel>(
        this.globalConstants.createCustomerLogCall,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerTaskList(customerId: any, type: string) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('type', type);
    return this.http
      .post<CustomerTaskRootModel>(
        this.globalConstants.getCustomerTaskList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerLogCallList(customerId: any, type: string) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('type', type);
    return this.http
      .post<LogACallRootModel>(
        this.globalConstants.getCustomerLogCallList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //addDisputeList
  public addDisputeList(data: CustomerDisputeModel) {
    return this.http
      .post<any>(this.globalConstants.addDisputeList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  //dispute/getDisputeList
  public getDisputeList(customerId: any, type: string) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('type', type);
    //newDisputeAddObj.Type ='customer';
    return this.http
      .post<CustomerDisuteRootModel>(
        this.globalConstants.getDisputeList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  //editDisputeList

  public editDisputesList(data: any) {
    return this.http
      .post<UpdateCustomerDisuteRootModel>(
        this.globalConstants.editDisputeList,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteDispute(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteDispute, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //getUserCustomerList
  public getUserCustomerList(customerId: any) {
    let params = new HttpParams().set('managerId', customerId);
    return this.http
      .post<any>(this.globalConstants.getUserCustomerList, params)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  // /addCustomer
  public addCustomer(data: any) {
    return this.http
      .post<any>(this.globalConstants.addCustomer, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public addNotesList(data: any) {
    return this.http
      .post<any>(this.globalConstants.addNote, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editdNotes(data: any) {
    return this.http
      .post<any>(this.globalConstants.editNote, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerNoteList(customerId: any, type: string) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('type', type);
    return this.http
      .post<CustomerNotesRootModel>(
        this.globalConstants.getCustomerNoteList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  // getCustomerEventList

  public deleteNotes(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteNote, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerEventLists(customerId: any, type: string) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('type', type);
    return this.http
      .post<CustomerEventListRootModel>(
        this.globalConstants.getCustomerEventList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  // customer/addCustomerEvent

  public addCustomerEvent(data: any) {
    return this.http
      .post<CustomerEventRootModel>(
        this.globalConstants.createAddCustomerEvent,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //getInvoiceList
  public getInvoiceLists(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<CustomerInvoiceRootModel>(
        this.globalConstants.getInvoiceList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //addPromiseToPay
  public addPromiseToPays(data: any) {
    return this.http
      .post<SaveUpdateCusProPayRootModel>(
        this.globalConstants.addPromiseToPay,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //getPromiseToPayList
  public getPromiseToPayLists(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<GetPromisePayRootModel>(
        this.globalConstants.getPromiseToPayList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public updatePromiseToPay(data: PromisePayModel) {
    return this.http
      .post<SaveUpdateCusProPayRootModel>(
        this.globalConstants.updatePromiseToPay,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  //getCustomerInvoiceList
  public getCustomerInvoiceList(customerId: any) {
    let params = new HttpParams().set('managerId', customerId);
    return this.http
      .post<any>(this.globalConstants.getCustomerInvoiceList, params)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //getInvoiceDetail
  public getInvoiceDetails(customerId: any, invoiceNumber: any) {
    let params = new HttpParams()
      .set('customerId', customerId)
      .set('invoiceNumber', invoiceNumber);
    return this.http
      .post<any>(this.globalConstants.getInvoiceDetail, params)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  //getInvoiceNumber

  public getInvoiceNumber(customerId?: any, invoiceNumber?: any) {
    // let params = new HttpParams().set('customerId', customerId).set('invoiceNumber', invoiceNumber);
    return this.http
      .post<any>(this.globalConstants.getInvoiceNumber, '')
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //addInvoice
  public addInvoice(data: any) {
    return this.http
      .post<SaveUpdateCusProPayRootModel>(this.globalConstants.addInvoice, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
}
