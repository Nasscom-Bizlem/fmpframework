import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addteamspace',
  templateUrl: './addteamspace.component.html',
  styleUrls: ['./addteamspace.component.scss'],
})
export class AddteamspaceComponent implements OnInit {
  teamSpaceForm: FormGroup;
  submitted = false;
  customerId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddteamspaceComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerId = this.data.customerId;
    this.teamSpaceForm = this.formBuilder.group({
      TeamSpaceName: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }
  get f() {
    return this.teamSpaceForm.controls;
  }
  onAddteamSpace() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.teamSpaceForm.invalid) {
      return;
    }
    // newNotesObj.Title = this.notesForm.value.Title;
    // newNotesObj.LastModified = dateFieldValue; //Current Date
    this.dialogRef.close({
      status: true,
      teamSpaceData: this.teamSpaceForm.value,
    });
  }
}
