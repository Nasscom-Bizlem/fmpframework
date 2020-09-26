import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ServiceMasterModel} from './servicemaster.model';
import {ServiceMasterService} from './ServiceMaster.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss']
})
export class ServiceMasterComponent implements OnInit {
  serviceMasterForm: FormGroup;
  submitted = false;
responsemessage:string;
  foods: any[] = [
    { value: '1', viewValue: 'Doctiger' },
    { value: '2', viewValue: 'carrotrule' },
    { value: '3', viewValue: 'fatchmypayments' },
  ];
  constructor(private formBuilder: FormBuilder,
    private servicemasterservice:ServiceMasterService) {}

  ngOnInit(): void {
       this.serviceMasterForm = this.formBuilder.group({
        ServiceName: ['', Validators.required],
        Price: ['', Validators.required],
        Currency: ['', Validators.required],
        SchemeId: ['', Validators.required],
        Billing_Unit1: ['', Validators.required],
        Billing_period: ['', Validators.required],
       
      });
    
  }
  get SchemeId() {
    return this.serviceMasterForm.get('SchemeId');
  }
  get f() {
    return this.serviceMasterForm.controls;
  }

  save() {
    console.log("in save");

    this.submitted = true;
    // stop here if form is invalid
    if (this.serviceMasterForm.invalid) {
      console.log("in invalid");
      return;
    }

    let newServiceMasterObj = new ServiceMasterModel();
    newServiceMasterObj.ServiceName = this.serviceMasterForm.value.ServiceName;
    newServiceMasterObj.Price = this.serviceMasterForm.value.Price;
    newServiceMasterObj.Currency = this.serviceMasterForm.value.Currency;
    newServiceMasterObj.SchemeId = this.serviceMasterForm.value.SchemeId;
    newServiceMasterObj.Billing_Unit1 = this.serviceMasterForm.value.Billing_Unit1;
     newServiceMasterObj.Billing_period = this.serviceMasterForm.value.Billing_period;

console.log(newServiceMasterObj.ServiceName);
    //this.servicemasterservice.addServiceMaster( newServiceMasterObj) ;

    this.servicemasterservice
    .addServiceMaster(newServiceMasterObj)
    .subscribe((roleresponse) => {
      console.log("withoutArra:: "+JSON.stringify(roleresponse));
      this.serviceMasterForm = this.formBuilder.group({
        ServiceName: ['', null],
        Price: ['', null],
        Currency: ['', null],
        SchemeId: ['', null],
        Billing_Unit1: ['', null],
        Billing_period: ['', null],
       
      });
  });
  }
}
