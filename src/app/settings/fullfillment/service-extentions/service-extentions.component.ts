import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ServiceextensionService} from './serviceextension.service';
import {ServiceextensionModel} from './serviceextension-model.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-service-extentions',
  templateUrl: './service-extentions.component.html',
  styleUrls: ['./service-extentions.component.scss'],
})
export class ServiceExtentionsComponent implements OnInit {
  serviceexensionForm: FormGroup;
  submitted = false;
  CRN : number = 0;   
  selectCustomerName: string = '';
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  ServiceMaster: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];
  CustomerMasterList: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];
  constructor(private formBuilder: FormBuilder,
    private serviceextensionService :ServiceextensionService) {}

  ngOnInit(): void {
    this.serviceexensionForm = this.formBuilder.group({
      Customer: ['', [Validators.required]],
      Service: ['', [Validators.required]],
      // transaction_id: ['', null],
      // type: ['', null],
      // order_number: ['', null],
      // date: ['', null],
      // qty: ['', null],
      // rate: ['', null],
      // new_rate: ['', null],
      // promotion: ['', null],
      // discount: ['', null],
      // amount: ['', null],
      // tax: ['', null],
      // net_rate: ['', null],
      // net_qty: ['', null],
      // tax_rate: ['', null],
    });
    this.getCustomerMasterList();
    console.log("this.CustomerMasterList 2:: " + JSON.stringify(this.CustomerMasterList));
    this.geServiceMasterList();
    console.log("this.ServiceMaster 2:: " + JSON.stringify(this.ServiceMaster));
  
  }

  get f() {
    return this.serviceexensionForm.controls;
  }

  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.serviceexensionForm.invalid) {
      return;
    }

    let serviceextensionObj = new ServiceextensionModel();
    serviceextensionObj.Email = this.serviceexensionForm.value.Customer;
    serviceextensionObj.CRN = this.CRN;
    serviceextensionObj.ServiceID = this.serviceexensionForm.value.Service;
    console.log("upgradetrialObj ::" + JSON.stringify(serviceextensionObj));

    this.serviceextensionService.callserviceextend(serviceextensionObj)
    .subscribe((roleresponse) => {
      console.log("withoutArra:: "+JSON.stringify(roleresponse));
      alert("Status :"+roleresponse.status+" Message: "+roleresponse.message);
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

 }

 getCustomerMasterList() {
  this.serviceextensionService.callfetchcustomer()
    .subscribe((res) => {
    // console.log("SettingUsersList:: " + JSON.stringify(res));
     // this.SettingUsersList = res.users;
    // console.log("res.users:: " + JSON.stringify(res.users));
     this.CustomerMasterList= res.CustomerMasterlist;
    console.log("this.CustomerMasterList 3:: " + JSON.stringify(this.CustomerMasterList));
    });
}
geServiceMasterList() {
  this.serviceextensionService.callfetchServicemaster()
    .subscribe((res) => {
    // console.log("SettingUsersList:: " + JSON.stringify(res));
     // this.SettingUsersList = res.users;
    // console.log("res.users:: " + JSON.stringify(res.users));
     this.ServiceMaster= res.ServiceMaster;
    console.log("this.ServiceMaster 3:: " + JSON.stringify(this.ServiceMaster));
    });
}

}
