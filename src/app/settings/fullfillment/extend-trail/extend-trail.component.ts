import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder,FormGroup,Validators, ValidationErrors,} from '@angular/forms';
import {ExtendtrialService} from './extendtrial.service';
import {ExtendtrialModel} from './extendtrial.model';
@Component({
  selector: 'app-extend-trail',
  templateUrl: './extend-trail.component.html',
  styleUrls: ['./extend-trail.component.scss'],
})
export class ExtendTrailComponent implements OnInit {
  extendTrailForm: FormGroup;
  submitted = false;
  Days:string ="";

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

CustomerMasterList: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];

  TransTypeList: any[] = [
    { value: 'cus002', viewValue: 'cus002' },
    { value: 'cus003', viewValue: 'cus003' },
    { value: 'cus004', viewValue: 'cus004' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private extendtrialService: ExtendtrialService,
    //private dialogService: DialogService,
) {}

  ngOnInit(): void {
    this.extendTrailForm = this.formBuilder.group({
      Customer:['',null],
      TransType:['',null],
    });
   
   





//console.log("currentDate "+currentDate);
       this.getCustomerMasterList()
    console.log("this.CustomerMasterList 2:: " + JSON.stringify(this.CustomerMasterList));
    this.getTransTypeList()
    console.log("this.TransTypeList 2:: " + JSON.stringify(this.TransTypeList));
 
  }

  get f() {
    return this.extendTrailForm.controls;
  }

  getData(event){
    console.log(event.target.dataset.Days);
  }
  get Customer() {
    return this.extendTrailForm.get('Customer');
  }

  get TransType() {
    return this.extendTrailForm.get('TransType');
  }
  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.extendTrailForm.invalid) {
      return;
    }

    
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let FromDt=year + "-" + month + "-" + date +" "+"00:00:00" ;
    console.log(FromDt);

   
    console.log(FromDt);
    let newdate = this.addDays(date_ob, this.Days);
    console.log("newdate "+newdate);

    let date2 = ("0" + date_ob.getDate()).slice(-2);
    let month2 = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year2 = date_ob.getFullYear();
    let ToDt=year2 + "-" + month2 + "-" + date2 +" "+"00:00:00";


    let newExtendTrialObj = new ExtendtrialModel();
    newExtendTrialObj.Email = this.extendTrailForm.value.Customer;
    newExtendTrialObj.TransTypeId = this.extendTrailForm.value.TransType;
    newExtendTrialObj.ServiceID = 0;
    newExtendTrialObj.FromDt=FromDt ;
    newExtendTrialObj.ToDt=ToDt;
    newExtendTrialObj.TransType="freetrial";
console.log("newExtendTrialObj ::" + JSON.stringify(newExtendTrialObj));

    this.extendtrialService.saveExtendFreetrial(newExtendTrialObj).subscribe((roleresponse) => {
    console.log("withoutArra:: "+JSON.stringify(roleresponse));
    alert("Status :"+roleresponse.status+" Message: "+roleresponse.message);

     this.extendTrailForm = this.formBuilder.group({
    Customer:['',[Validators.required]],
    TransType:['',[Validators.required]],
   
  });
});
  }

  getCustomerMasterList() {
    this.extendtrialService.callfetchcustomer()
      .subscribe((res) => {
      // console.log("SettingUsersList:: " + JSON.stringify(res));
       // this.SettingUsersList = res.users;
      // console.log("res.users:: " + JSON.stringify(res.users));
       this.CustomerMasterList= res.CustomerMasterlist;
      console.log("this.CustomerMasterList 3:: " + JSON.stringify(this.CustomerMasterList));
      });
  }

  getTransTypeList() {
    this.extendtrialService.callTransType()
      .subscribe((res) => {
       this.TransTypeList= res.TransTypelist;
      console.log("this.TransTypeList 3:: " + JSON.stringify(this.TransTypeList));
      });
  }
  addDays(date: Date, days: string): Date {
    console.log('adding ' + days + ' days');
    console.log(date);
    date.setDate(date.getDate() + parseInt(days));
    console.log(date);
    return date;
  }

  changeExtensiondays(e: any) {
    
    let target = e.source.selected._element.nativeElement;
    console.log("target:: " + target);
    let selectedData = {
     attribute: target.getAttribute('data-Days'),
     value: e.value,
     text: target.innerText.trim()
   };
   console.log("selectedData:: "+JSON.stringify(selectedData));
   this.Days=selectedData.attribute;
 }

}
