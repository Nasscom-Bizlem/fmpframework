import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDetailsModel } from 'src/app/features/customer/customermodel/getcustomerdetails';
import { CustomerDisputeModel } from 'src/app/features/customer/customermodel/customer-dispute.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dispute',
  templateUrl: './add-dispute.component.html',
  styleUrls: ['./add-dispute.component.scss'],
})
export class AddDisputeComponent implements OnInit {
  planModel: any = { start_time: new Date() };
  disputeForm: FormGroup;
  submitted = false;
  customerId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDisputeComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    debugger;
    this.customerId = this.data.customerId;
    console.log(this.data.modeldata);

    this.disputeForm = this.formBuilder.group({
      subject: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', [Validators.required]],
      contactName: ['', [Validators.required]],
      Owner: ['', [Validators.required]],
    });
    if (!!this.data.modeldata) {
      this.disputeForm.controls['subject'].setValue(
        this.data.modeldata.Subject
      );
      this.disputeForm.controls['date'].setValue(this.data.modeldata.AtDate);
      this.disputeForm.controls['name'].setValue(
        this.data.modeldata.ContactName
      );
      this.disputeForm.controls['contactName'].setValue(
        this.data.modeldata.ContactName
      );
      this.disputeForm.controls['Owner'].setValue(this.data.modeldata.Owner);
    }
  }

  get f() {
    return this.disputeForm.controls;
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
    if (this.disputeForm.invalid) {
      return;
    }
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newDisputeAddObj = new CustomerDisputeModel();
    // subject: ['', Validators.required],
    // date: ['', Validators.required],
    // name: ['', [Validators.required]],
    // contactName: ['', [Validators.required]],
    // Owner:
    let dateFieldValue = this.datePipe.transform(
      this.disputeForm.value.date,
      'yyyy-MM-dd HH:mm:ss'
    );
    console.log(dateFieldValue);
    newDisputeAddObj.Subject = this.disputeForm.value.subject;
    newDisputeAddObj.ContactName = this.disputeForm.value.contactName;
    newDisputeAddObj.LastActivity = dateFieldValue;
    newDisputeAddObj.Priority = 'normal';
    newDisputeAddObj.Owner = this.disputeForm.value.Owner;
    newDisputeAddObj.Type ='customer';
    newDisputeAddObj.CustomerId = this.customerId; //customer.CustomerId;
    if (!!this.data.modeldata) {
      newDisputeAddObj.Id = this.data.modeldata.Id;
    }
    // newDisputeAddObj.Subject = this.disputeForm.value.subject;

    this.dialogRef.close(newDisputeAddObj);
  }
}
