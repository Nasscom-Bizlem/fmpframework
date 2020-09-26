import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mailhost-dialog',
  templateUrl: './add-mailhost-dialog.component.html',
  styleUrls: ['./add-mailhost-dialog.component.scss']
})
export class AddMailhostDialogComponent implements OnInit {

  mailhostForm: FormGroup;
  submitted = false;
  customerId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddMailhostDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.mailhostForm.controls;
  }
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mailhostForm.invalid) {
      return;
    }
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close({
      status: true,
      teamSpaceData: this.mailhostForm.value,
    });
  }

}
