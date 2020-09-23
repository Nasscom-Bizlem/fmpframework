import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  CustomerListNewModel,
  CustomerListModel,
} from 'src/app/features/customer/customermodel/customerlist.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddCustomerTeamSpaceService } from '../addteamspace/addteamspace.service';
import { DatePipe } from '@angular/common';
import { CustomerDetailsModel } from 'src/app/features/customer/customermodel/getcustomerdetails';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.scss'],
})
export class AddCustomerDialogComponent implements OnInit {
  addCustomerForm: FormGroup;
  submitted = false;
  isTeamSpaceAdded = false;

  @Input() customerList: CustomerListNewModel;
  @Output() addedCustomerDetails = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>,
    private formBuilder: FormBuilder,
    private addCustomerTeamSpaceService: AddCustomerTeamSpaceService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    //TeamSpaceId
    this.addCustomerForm = this.formBuilder.group({
      TeamSpaceId: [''],
      Name: ['', Validators.required],
      CompanyName: ['', Validators.required],
      TeamSpace: [''],
      // Owner: ['', [Validators.required]],
      Address1: [''],
      Address2: [''],
      City: [''],
      Country: [''],
      PinCode: [''],
      Email: [''],
      Website: [''],
      City1: [''],
      Phone: [''],
      Mobile: [''],
      // ContactName: [''],
      ContactAddress: [''],
      PhoneNumber: [''],
      BankAccount: [''],
      BankName: [''],
    });
    this.teamSpaceIdGenerator();
  }
  get f() {
    return this.addCustomerForm.controls;
  }

  teamSpaceIdGenerator() {
    let TeamSpaceId = 'MKDR' + Math.random().toString(36).substr(2, 9);
    this.addCustomerForm.controls['TeamSpaceId'].setValue(TeamSpaceId);
  }

  newTeamSpace() {
    this.isTeamSpaceAdded = false;
  }

  addTeamSpace() {
    this.addCustomerTeamSpaceService.openTeamSpace().subscribe((res) => {
      if (res.status) {
        debugger;
        this.isTeamSpaceAdded = true;
        this.addCustomerForm.controls['TeamSpace'].setValue(
          res.teamSpaceData.TeamSpaceName
        );
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addCustomerForm.invalid) {
      return;
    }
    let dateFieldValue = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    );
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newCustomerListNewModelObj = new CustomerListNewModel();

    newCustomerListNewModelObj.AtDate = dateFieldValue;
    // newCustomerListNewModelObj.CustomerId = this.customerList.CustomerId;
    newCustomerListNewModelObj.Email = this.addCustomerForm.value.Email;
    newCustomerListNewModelObj.ManagerId = this.customerList.CustomerId;
    newCustomerListNewModelObj.Name = this.addCustomerForm.value.Name;
    newCustomerListNewModelObj.TeamSpaceId = this.addCustomerForm.value.TeamSpaceId;
    newCustomerListNewModelObj.TeamSpaceName = this.addCustomerForm.value.TeamSpace;
    let address = {
      Address1: this.addCustomerForm.value.Address1,
      AtDate: dateFieldValue,
      City: this.addCustomerForm.value.City,
      Country: this.addCustomerForm.value.Country,
      PinCode: this.addCustomerForm.value.PinCode,
    };
    newCustomerListNewModelObj.customerAddresses = [];

    newCustomerListNewModelObj.customerAddresses.push(address);

    let PersonalContacts = {
      ContactType: 'Personal',
      PhoneNumber: this.addCustomerForm.value.Mobile,
    };
    let BusinessContacts = {
      ContactType: 'Business',
      PhoneNumber: this.addCustomerForm.value.PhoneNumber,
    };
    newCustomerListNewModelObj.customerContacts = [];
    newCustomerListNewModelObj.customerContacts.push(
      PersonalContacts,
      BusinessContacts
    );
    let FinanceSettings = {
      BankAccount: this.addCustomerForm.value.BankAccount,
      BankName: this.addCustomerForm.value.BankName,
    };
    newCustomerListNewModelObj.customerFinnanceSettings = JSON.parse(
      JSON.stringify(FinanceSettings)
    );

    // subject: ['', Validators.required],
    // date: ['', Validators.required],
    // name: ['', [Validators.required]],
    // contactName: ['', [Validators.required]],
    // Owner:

    // newDisputeAddObj.Subject = this.disputeForm.value.subject;

    // this.dialogRef.close(newCustomerListNewModelObj);
    this.addedCustomerDetails.emit({
      back: false,
      addCustomerDetails: newCustomerListNewModelObj,
    });
  }
  cancelHandler() {
    this.addedCustomerDetails.emit({
      back: true,
    });
  }
}
