import { Component, OnInit, Inject } from '@angular/core';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {SuspendAccountModel} from './suspend-account-model';
import {SuspendaccountService} from './suspendaccount.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-suspend-account-component',
  templateUrl: './suspend-account.component.html',
  styleUrls: ['./suspend-account.component.scss'],
})
export class SuspendAccountComponent implements OnInit {
  suspendAccountForm: FormGroup;
  submitted = false;
  CRN : number = 0;
  selectCustomerName: string = '';
  public edited = false;
  checkedIDs = [];
  public temp :string;


  
  ServiceList: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];
  
CustomerMasterList: any[] = [
  { value: 'cus002', viewValue: 'cus002' },
  { value: 'cus003', viewValue: 'cus003' },
  { value: 'cus004', viewValue: 'cus004' },
];
  constructor(
    private formBuilder: FormBuilder,
  // private suspendaccountModel:SuspendAccountOneModel,
    private suspendaccountService:SuspendaccountService) {}

  ngOnInit(): void {
    this.suspendAccountForm = this.formBuilder.group({
      // crn: ['', null],
      // customer_name: ['', null],
      // over_due_amount: ['', null],
      // payment: ['', null],
      Customer: ['', [Validators.required]],
      reason: ['', [Validators.required]],

      // extentions: ['', null],
      // recomended_by: ['', null],
      // approve_by: ['', null],
      // Customer: ['', null],
    });

    this.getCustomerMasterList()
    console.log("this.CustomerMasterList 2:: " + JSON.stringify(this.CustomerMasterList));
    
  }

  get f() {
    return this.suspendAccountForm.controls;
  }

  get Customer() {
    return this.suspendAccountForm.get('Customer');
  }

  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.suspendAccountForm.invalid) {
      return;
    }
    let newSuspendaccountObj = new SuspendAccountModel();
    newSuspendaccountObj.CRN = this.suspendAccountForm.value.Customer;
    newSuspendaccountObj.reason = this.suspendAccountForm.value.reason;
    newSuspendaccountObj.TransactionIDs =this.checkedIDs;
    newSuspendaccountObj.suspend = "1";
      console.log("newSuspendaccountObj ::" + JSON.stringify(newSuspendaccountObj));
      this.suspendaccountService.callSuspendAccount(newSuspendaccountObj)
    .subscribe((roleresponse) => {
      console.log("withoutArra:: "+JSON.stringify(roleresponse));
      alert("Status :"+roleresponse.status+" Message: "+roleresponse.message);

    });
    
    this.edited =false;
    this.suspendAccountForm = this.formBuilder.group({
    Customer: ['', null],
     reason: ['', null],
    });


  }

  
  getCustomerMasterList() {
    this.suspendaccountService.callfetchcustomer()
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.CustomerMasterList= res.CustomerMasterlist;
      console.log("this.CustomerMasterList 3:: " + JSON.stringify(this.CustomerMasterList));
      });
  }


  getServicesListbyCRN(CRN :number) {
    let suspendstatus="0";
    this.suspendaccountService.callfetchserviceListbyCRN(CRN, suspendstatus)
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.ServiceList= res.ServiceList;
      console.log("this.ServiceList 3:: " + JSON.stringify(this.ServiceList));
      });
  }

  onchangeCustomer(e: any) {
    
    let target = e.source.selected._element.nativeElement;
    console.log("target:: " + target);
    let selectedData = {
     attribute: target.getAttribute('data-CRN'),
     value: e.value,
     text: target.innerText.trim()
   };
   console.log("selectedData:: "+JSON.stringify(selectedData));
   this.CRN=selectedData.attribute;

   this.getServicesListbyCRN(this.CRN ) ;
    this.edited=true;
    this.checkedIDs=[];
 }


 onserviceselect(e, TransectionId) {
  if (e.checked) {

    /* let FirstComponentObject = new TableGridComponent(this.router,this.route,this.uiService,this.settingsService,this.dialogService);
    FirstComponentObject.getRoleList(); */

    // console.log("checked:: ");
    this.checkedIDs.push(TransectionId);
    var index = this.checkedIDs.indexOf(TransectionId);
    console.log("index:: " + index);
    // console.log("permissionData:: " + permissionData);
  } else {
    var index = this.checkedIDs.indexOf(TransectionId);
    console.log("index:: " + index);
    var d1=this.checkedIDs.splice(index, 1);
    console.log("d1 "+d1);
    // console.log("fetchCheckedIDsNewUnchecked:: " + this.checkedIDs);
  }
 

  console.log("checkedIDs "+this.checkedIDs);
  }


}
