import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PromisePayModel } from 'src/app/receivables/customer/customermodel/promise-pay.model';

@Component({
  selector: 'app-promise-pay-dialog',
  templateUrl: './promise-pay-dialog.component.html',
  styleUrls: ['./promise-pay-dialog.component.scss'],
})
export class PromisePayDialogComponent implements OnInit {
  promisePayForm: FormGroup;
  submitted = false;
  customerId: any;
  planModel: any = { start_time: new Date() };
  selectedItem: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PromisePayDialogComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    debugger;
    this.customerId = this.data.customerId;
    console.log(this.data.modeldata);
    // Id: number;
    // CustomerName: string;
    // ExpectedDate: string;
    // Description: string;
    // RelatedTo: string;
    // PaymentMethod: string;
    // CustomerId: string;
    this.promisePayForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      ExpectedDate: ['', Validators.required],
      Description: ['', [Validators.required]],
      RelatedTo: ['', [Validators.required]],
      PaymentMethod: ['', [Validators.required]],
    });
    if (!!this.data.modeldata) {
      this.promisePayForm.controls['CustomerName'].setValue(
        this.data.modeldata.CustomerName
      );
      this.promisePayForm.controls['ExpectedDate'].setValue(
        this.data.modeldata.ExpectedDate
      );
      this.promisePayForm.controls['Description'].setValue(
        this.data.modeldata.Description
      );
      this.promisePayForm.controls['RelatedTo'].setValue(
        this.data.modeldata.RelatedTo
      );
      this.selectedItem = this.data.modeldata.RelatedTo
      this.promisePayForm.controls['PaymentMethod'].setValue(
        this.data.modeldata.PaymentMethod
      );
    }
  }

  get f() {
    return this.promisePayForm.controls;
  }

  get relatedTo() {
    return this.promisePayForm.get('RelatedTo');
  }

  selcetedItem(item: any) {
    this.selectedItem = 'searching for ' + item;
    this.relatedTo.setValue(item, {
      onlySelf: true,
    });
  }

  dateChanged(evt) {
    let selectedDate = new Date(evt);
    console.log('by default:', selectedDate);
    console.log('by UTCString:', selectedDate.toUTCString());
    console.log('by LocaleString:', selectedDate.toLocaleString());
    console.log('by LocaleTimeString:', selectedDate.toLocaleTimeString());
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.promisePayForm.invalid) {
      return;
    }
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newPromiseToPayObj = new PromisePayModel();
    // subject: ['', Validators.required],
    // date: ['', Validators.required],
    // name: ['', [Validators.required]],
    // contactName: ['', [Validators.required]],
    // Owner:
    let dateFieldValue = this.datePipe.transform(
      this.promisePayForm.value.ExpectedDate,
      'yyyy-MM-dd HH:mm:ss'
    );
    console.log(dateFieldValue);
    newPromiseToPayObj.CustomerName = this.promisePayForm.value.CustomerName;
    newPromiseToPayObj.Description = this.promisePayForm.value.Description;
    newPromiseToPayObj.ExpectedDate = dateFieldValue;
    newPromiseToPayObj.RelatedTo = this.promisePayForm.value.RelatedTo;
    newPromiseToPayObj.PaymentMethod = this.promisePayForm.value.PaymentMethod;
    newPromiseToPayObj.CustomerId = this.customerId; //customer.CustomerId;
    if (!!this.data.modeldata) {
      newPromiseToPayObj.Id = this.data.modeldata.Id;
    }
    // newPromiseToPayObj.Subject = this.promisePayForm.value.subject;

    this.dialogRef.close(newPromiseToPayObj);
  }
}
