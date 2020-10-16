import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalConstantService {
  public BASE_URL: string;
  public WebConfig_URL = 'assets/web.config.json';
  public AppSettings: any;
  public Errors: any;
  public appTimer: any;
  public sessionTimeOut: any;
  public isSessionTimedOut: any;
  public routeErrorMessage: any;
  constructor() {}

  GET_URL(api_URL: string) {
    // this.session.resetTimer();
    // return 'http://199.217.112.145:8089/fmp/api/' + api_URL;
    return 'http://199.217.112.145:8089/fma/api/' + api_URL;
    // return this.BASE_URL + api_URL;
  }

  get ValidateCredentailsURL() {
    return this.GET_URL('Security/ValidateUserCredentials');
  }
  get TokenURL() {
    return this.GET_URL('token');
  }

  get TokenInformationURL() {
    return this.GET_URL('Admin/TokenInformation');
  }
  get getRecentlyViewedAssets_URL() {
    return this.GET_URL(
      'ManageProjects/GetRecentlyViewedAssets?username=#username'
    );
  }

  get ForgotPasswordURL() {
    return this.GET_URL('Admin/ResetPassword?email=');
  }

  getHeaders() {
    var accessToken = '';
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage && localStorage.getItem('currentUser')) {
      let Bearer = user.tokenType;
      accessToken = Bearer + ' ' + user.accessToken;
    }
    
    // let userSession = localStorage.getItem('userSession');
    // if (userSession == null) {
    //   userSession = localStorage.getItem('userdata')
    //     ? JSON.parse(localStorage.getItem('userdata')).authToken.substring(
    //         1,
    //         4
    //       ) + Math.floor(Math.random() * 1000 + 1)
    //     : Math.floor(Math.random() * 1000 + 1).toString();

    //   localStorage.setItem('userSession', userSession);
    // }
    const headers = new HttpHeaders({
      // 'X-permissions': user !== undefined ? user.viewPermission : '',
      'X-Username': user !== undefined ? user.email : '',
      Authorization: accessToken,
    });

    const options = {
      headers: headers,
    };
    return options;
  }

  get LoginDetails() {
    return this.GET_URL('auth/sign_in');
  }
  get ForgotPassword() {
    return this.GET_URL('auth/sign_up');
  }
  

  get TESTAPI() {
    return this.GET_URL('test/admin');
  }

  //auth/sign_up

  //Customers Api
  // customer/getCustomerInfo
  get getCustomerInfo() {
    return this.GET_URL('customer/getCustomerInfo');
  }
  // -------------------------------------------------------------------
  //api/customer/addCustomerTask
  get postAddCustomerTask() {
    return this.GET_URL('customer/addCustomerTask');
  }
  // api/customer/updateCustomerTask
  get updateCustomerTask() {
    return this.GET_URL('customer/updateCustomerTask');
  }
  //customer/getCustomerTaskList
  get getPostCustomerTaskList() {
    return this.GET_URL('customer/getCustomerTaskList');
  }
  //customer/getCustomerTaskList
  get getCustomerTaskList() {
    return this.GET_URL('customer/getCustomerTaskList');
  }

  //Log A call

  get createCustomerLogCall() {
    return this.GET_URL('customer/addCustomerLogCall');
  }
  get getCustomerLogCallList() {
    return this.GET_URL('customer/getCustomerLogCallList');
  }

  //Create Event
  get createAddCustomerEvent() {
    return this.GET_URL('customer/addCustomerEvent');
  }
  get getCustomerEventList() {
    return this.GET_URL('customer/getCustomerEventList');
  }
  //Cutomer Notes

  //note/addNote
  //note/editNote
  //note/getCustomerNoteList

  // Add Customers List
  get addCustomerList() {
    return this.GET_URL(' customer/addCustomer');
  }

  //Dispute

  //
  get addDisputeList() {
    return this.GET_URL('dispute/addDispute');
  }
  //
  get editDisputeList() {
    return this.GET_URL('dispute/editDispute');
  }
  get getDisputeList() {
    return this.GET_URL('dispute/getDisputeList');
  }
  get deleteDispute() {
    return this.GET_URL('dispute/deleteDispute');
  }

  //get Customers List
  // /user/getUserList
  get getUserCustomerList() {
    return this.GET_URL('customer/getManagerCustomerList');
  }

  //api/customer/addCustomer
  get addCustomer() {
    return this.GET_URL('customer/addCustomer');
  }
  //note/addNote
  get addNote() {
    return this.GET_URL('note/addNote');
  }
  //note/editNote
  get editNote() {
    return this.GET_URL('note/editNote');
  }
  get getCustomerNoteList() {
    return this.GET_URL('note/getCustomerNoteList');
  }

  //note/deleteNote
  get deleteNote() {
    return this.GET_URL('note/deleteNote');
  }
  ///invoice/getInvoiceList
  get getInvoiceList() {
    return this.GET_URL('invoice/getInvoiceList');
  }

  //customer/addPromiseToPay
  get addPromiseToPay() {
    return this.GET_URL('customer/addPromiseToPay');
  }
  //customer/updatePromiseToPay
  get updatePromiseToPay() {
    return this.GET_URL('customer/updatePromiseToPay');
  }
  //customer/getPromiseToPayList
  get getPromiseToPayList() {
    return this.GET_URL('customer/getPromiseToPayList');
  }

  //invoice/getCustomerInvoiceList
  get getCustomerInvoiceList() {
    return this.GET_URL('invoice/getCustomerInvoiceList');
  }
  ///api/invoice/addInvoice
  get addInvoice() {
    return this.GET_URL('invoice/addInvoice');
  }
  get getInvoiceDetail() {
    return this.GET_URL('invoice/getInvoiceDetail');
  }

  //invoice/getInvoiceNumber
  get getInvoiceNumber() {
    return this.GET_URL('invoice/getInvoiceNumber');
  }

  //invoice/getInvoiceDetail

  ///invoice/getCustomerInvoiceList

  //api/recon/getReconHeaderList?ColumnType=Transaction

  get getReconFields() {
    return this.GET_URL('recon/getReconHeaderList?ColumnType=#ColumnType');
  }

  get getReconList() {
    return this.GET_URL('recon/getReconRecordList');
  }
}
