import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {RestoreSuspentionsServices} from './restore-suspentions.service';
import {RestoreSuspentionModel} from './restore-suspention-model';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-restore-suspention',
  templateUrl: './restore-suspention.component.html',
  styleUrls: ['./restore-suspention.component.scss'],
})
export class RestoreSuspentionComponent implements OnInit {
  restoreSuspentionForm: FormGroup;
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
    private restoreSuspentionsServices: RestoreSuspentionsServices,
    ) {}

  ngOnInit(): void {
    this.restoreSuspentionForm = this.formBuilder.group({
      Customer: ['', [Validators.required]],
      reason: ['', [Validators.required]],    });
    this.getCustomerMasterList();
    console.log("this.CustomerMasterList 2:: " + JSON.stringify(this.CustomerMasterList));
    
  }

  get f() {
    return this.restoreSuspentionForm.controls;
  }

  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.restoreSuspentionForm.invalid) {
      return;
    }
    let newSuspendaccountObj = new RestoreSuspentionModel();
    newSuspendaccountObj.CRN = this.restoreSuspentionForm.value.Customer;
    newSuspendaccountObj.reason = this.restoreSuspentionForm.value.reason;
    newSuspendaccountObj.TransactionIDs =this.checkedIDs;
    newSuspendaccountObj.suspend = "0";
    //console.log("newSuspendaccountObj.suspend ::" + JSON.stringify(newSuspendaccountObj.suspend));

      console.log("newSuspendaccountObj ::" + JSON.stringify(newSuspendaccountObj));
      this.restoreSuspentionsServices.callRestoreSuspendAccount(newSuspendaccountObj)
    .subscribe((roleresponse) => {
      console.log("withoutArra:: "+JSON.stringify(roleresponse));
      alert("Status :"+roleresponse.status+" Message: "+roleresponse.message);

    });
    
    this.edited =false;
    this.restoreSuspentionForm = this.formBuilder.group({
    Customer: ['', null],
     reason: ['', null],
    });


  }

  getServicesListbyCRN(CRN :number) {

    this.restoreSuspentionsServices.callfetchserviceListbyCRN(CRN,"1")
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
 }

 getCustomerMasterList() {
  this.restoreSuspentionsServices.callfetchcustomer()
    .subscribe((res) => {
    // console.log("SettingUsersList:: " + JSON.stringify(res));
     // this.SettingUsersList = res.users;
    // console.log("res.users:: " + JSON.stringify(res.users));
     this.CustomerMasterList= res.CustomerMasterlist;
    console.log("this.CustomerMasterList 3:: " + JSON.stringify(this.CustomerMasterList));
    });
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
