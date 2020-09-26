import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-email-dialog',
  templateUrl: './add-email-dialog.component.html',
  styleUrls: ['./add-email-dialog.component.scss']
})
export class AddEmailDialogComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;
  customerId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEmailDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.emailForm.controls;
  }
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close({
      status: true,
      teamSpaceData: this.emailForm.value,
    });
  }

}
