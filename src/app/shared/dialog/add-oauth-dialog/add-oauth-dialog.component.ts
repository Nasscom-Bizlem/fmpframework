import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-oauth-dialog',
  templateUrl: './add-oauth-dialog.component.html',
  styleUrls: ['./add-oauth-dialog.component.scss']
})
export class AddOauthDialogComponent implements OnInit {
  addOauthForm: FormGroup;
  submitted = false;
  customerId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOauthDialogComponent>,
    private formBuilder: FormBuilder
  ) { }



  ngOnInit(): void {
  }

  get f() {
    return this.addOauthForm.controls;
  }
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addOauthForm.invalid) {
      return;
    }
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close({
      status: true,
      teamSpaceData: this.addOauthForm.value,
    });
  }

}
