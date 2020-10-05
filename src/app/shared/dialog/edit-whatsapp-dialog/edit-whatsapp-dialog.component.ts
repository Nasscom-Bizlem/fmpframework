import { Component, OnInit,Inject, ViewChild, AfterViewInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WhatsupSms } from './whatsup-sms.model';

@Component({
  selector: 'app-edit-whatsapp-dialog',
  templateUrl: './edit-whatsapp-dialog.component.html',
  styleUrls: ['./edit-whatsapp-dialog.component.scss']
})
export class EditWhatsappDialogComponent implements OnInit {
    selectedRowIndex:any;

  manageSettingForm: FormGroup;
  submitted = false;
  customerId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditWhatsappDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.manageSettingForm = this.formBuilder.group({
      MessageType: ['', Validators.required],
      AccountName: ['', Validators.required],
      Url: ['', Validators.required],
      Key: ['', [Validators.required]],
      Number: ['', [Validators.required]],
      Campaign: ['', [Validators.required]],
      AccountType: ['', [Validators.required]],
      RouteId: ['', [Validators.required]],
      AuthToken: ['', [Validators.required]],
    });
  }

  get f() {
    return this.manageSettingForm.controls;
  }

  get MessageType() {
    return this.manageSettingForm.get('MessageType');
  }
  onSave() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.manageSettingForm.invalid) {
      console.log("form invalid");
      return;
    }
      const customer = JSON.parse(localStorage.getItem('currentUser'));
    let AddWhatsupSmsObj = new WhatsupSms();
    AddWhatsupSmsObj.MessageType = this.manageSettingForm.value.MessageType;
    AddWhatsupSmsObj.AccountName = this.manageSettingForm.value.AccountName;
    AddWhatsupSmsObj.Url = this.manageSettingForm.value.Url;
    AddWhatsupSmsObj.Key = this.manageSettingForm.value.Key;
    AddWhatsupSmsObj.Number = this.manageSettingForm.value.Number;
    AddWhatsupSmsObj.Campaign = this.manageSettingForm.value.Campaign;
    AddWhatsupSmsObj.AccountType = this.manageSettingForm.value.AccountType;
    AddWhatsupSmsObj.RouteId = this.manageSettingForm.value.RouteId;
    AddWhatsupSmsObj.AuthToken = this.manageSettingForm.value.AuthToken;
    AddWhatsupSmsObj.UserId=customer.CustomerId;
    console.log("AddWhatsupSmsObj "+AddWhatsupSmsObj);
    this.dialogRef.close(AddWhatsupSmsObj);
  }

}
