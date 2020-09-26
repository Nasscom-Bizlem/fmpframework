import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder,FormGroup,Validators, ValidationErrors,} from '@angular/forms';
import {UpgradeTrialModel} from './upgradetrial.model';
import {UpgradetrialService} from './upgradetrial.service'
@Component({
  selector: 'aapp-upgrade-trail',
  templateUrl: './upgrade-trail.component.html',
  styleUrls: ['./upgrade-trail.component.scss'],
})
export class UpgradeTrailComponent implements OnInit {
  upgradeForm: FormGroup;
  submitted = false;
  selectCustomerName: string = '';
  public edited = false;
  CRN : number = 0;   
  checkedIDs=[];
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
    private upgradetrialService:UpgradetrialService) {}

  ngOnInit(): void {
    this.upgradeForm = this.formBuilder.group({
      Customer: ['', [Validators.required]],
      Service: ['', [Validators.required]],

      //transaction_id: ['', null],
      // contact_id: ['', null],
      // description: ['', null],
      // service_name: ['', null],
      // base_id: ['', null],
      // max_qty: ['', null],
      // currency: ['', null],
      // list_price: ['', null],
      // billing_period: ['', null],
      // type: ['', null],
      // qty: ['', null],
      // rate: ['', null],
      // valid_upto: ['', null],
      // promotion_name: ['', null],
      // price: ['', null],
      // amount: ['', null],
      // tax: ['', null],
      // gross_value: ['', null],
    });
    this.getCustomerMasterList();
    console.log("this.CustomerMasterList 2:: " + JSON.stringify(this.CustomerMasterList));
    this.geServiceMasterList();
    console.log("this.ServiceMaster 2:: " + JSON.stringify(this.ServiceMaster));
  }    


  get f() {
    return this.upgradeForm.controls;
  }

  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.upgradeForm.invalid) {
      return;
    }
    let upgradetrialObj = new UpgradeTrialModel();
    upgradetrialObj.Email = this.upgradeForm.value.Customer;
    upgradetrialObj.CRN = this.CRN;
    upgradetrialObj.ServiceID = this.upgradeForm.value.Service;
    console.log("upgradetrialObj ::" + JSON.stringify(upgradetrialObj));

    this.upgradetrialService.callupgradetrial(upgradetrialObj)
    .subscribe((roleresponse) => {
      console.log("withoutArra:: "+JSON.stringify(roleresponse));
      alert("Status :"+roleresponse.status+" Message: "+roleresponse.message);
    });

  }
  getCustomerMasterList() {
    this.upgradetrialService.callfetchcustomer()
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.CustomerMasterList= res.CustomerMasterlist;
      console.log("this.CustomerMasterList 3:: " + JSON.stringify(this.CustomerMasterList));
      });
  }
  geServiceMasterList() {
    this.upgradetrialService.callfetchServicemaster()
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.ServiceMaster= res.ServiceMaster;
      console.log("this.ServiceMaster 3:: " + JSON.stringify(this.ServiceMaster));
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



}
