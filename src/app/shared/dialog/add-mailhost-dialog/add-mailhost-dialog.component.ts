import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MailHostModel } from 'src/app/settings/setup/setup-model/mail-host-model.model';

@Component({
  selector: 'app-add-mailhost-dialog',
  templateUrl: './add-mailhost-dialog.component.html',
  styleUrls: ['./add-mailhost-dialog.component.scss']
})
export class AddMailhostDialogComponent implements OnInit {

  mailhostForm: FormGroup;
  submitted = false;
  customerId: any;
  titlesMailHost: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddMailhostDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

    console.log("modelData:: " + JSON.stringify(this.data.modeldata));

    this.mailhostForm = this.formBuilder.group({
      user: ['', Validators.required],
      outboundMail: ['', Validators.required],
      mailLimit: ['', Validators.required],
      sms: ['', Validators.required],
      smsLimit: ['', Validators.required],
      Whatsapp: ['', Validators.required],
      whatsappLimit: ['', Validators.required],
    });

    if (!!this.data.modeldata) {
      this.titlesMailHost = "Edit";

      this.mailhostForm.controls['user'].setValue(
        this.data.modeldata.User
      );
      this.mailhostForm.controls['outboundMail'].setValue(
        this.data.modeldata.OutboundMail
      );
      this.mailhostForm.controls['mailLimit'].setValue(
        this.data.modeldata.MailLimit
      );
      this.mailhostForm.controls['sms'].setValue(
        this.data.modeldata.Sms
        //convertedDate
      );
      this.mailhostForm.controls['smsLimit'].setValue(
        this.data.modeldata.SmsLimit
      );
      this.mailhostForm.controls['Whatsapp'].setValue(
        this.data.modeldata.Whatsup
      );
      this.mailhostForm.controls['whatsappLimit'].setValue(
        this.data.modeldata.WhatsupLimit
      );

    } else {
      this.titlesMailHost = "Add";
    }

  }

  get f() {
    return this.mailhostForm.controls;
  }

  closeProjectDialog() {
    this.dialogRef.close();
  }

  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mailhostForm.invalid) {
      return;
    }

    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let mailHostModelObj = new MailHostModel();

    mailHostModelObj.User = this.mailhostForm.value.user;
    mailHostModelObj.OutboundMail = this.mailhostForm.value.outboundMail;
    mailHostModelObj.MailLimit = this.mailhostForm.value.mailLimit;
    mailHostModelObj.Sms = this.mailhostForm.value.sms;
    mailHostModelObj.SmsLimit = this.mailhostForm.value.smsLimit;
    mailHostModelObj.Whatsup = this.mailhostForm.value.Whatsapp;
    mailHostModelObj.WhatsupLimit = this.mailhostForm.value.whatsappLimit;
    mailHostModelObj.UserId = customer.CustomerId;

    if (!!this.data.modeldata) {
      mailHostModelObj.Id = this.data.modeldata.Id
    }

    this.dialogRef.close(mailHostModelObj);

    /*  this.dialogRef.close({
       status: true,
       teamSpaceData: this.mailhostForm.value,
     }); */

  }

}
