import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-whatsapp-dialog',
  templateUrl: './edit-whatsapp-dialog.component.html',
  styleUrls: ['./edit-whatsapp-dialog.component.scss']
})
export class EditWhatsappDialogComponent implements OnInit {
  manageSettingForm: FormGroup;
  submitted = false;
  customerId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditWhatsappDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.manageSettingForm.controls;
  }
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.manageSettingForm.invalid) {
      return;
    }
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close({
      status: true,
      teamSpaceData: this.manageSettingForm.value,
    });
  }

}
