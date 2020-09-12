import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NotesModel } from 'src/app/features/customer/customermodel/notes.model';
// import { NotesModel } from 'src/app/features/customer/customermodel/notes.model';

@Component({
  selector: 'app-customernotes',
  templateUrl: './customernotes.component.html',
  styleUrls: ['./customernotes.component.scss'],
})
export class CustomernotesComponent implements OnInit {
  notesForm: FormGroup;
  submitted = false;
  customerId: any;
  planModel: any = { start_time: new Date() };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomernotesComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    debugger;
    // Title: string;
    //     Description: string;
    //     CreatedBy: string;
    //     LastModified: string;
    //     LastModifiedBy: string;
    //     CustomerId: string;
    this.customerId = this.data.customerId;
    this.notesForm = this.formBuilder.group({
      Title: ['', Validators.required],
      CreatedBy: ['', Validators.required],
      Description: ['', Validators.required],
      LastModified: ['', [Validators.required]], //CutrrentDate
      LastModifiedBy: ['', [Validators.required]],
    });

    if (!!this.data.customerNotesList) {
      this.notesForm.controls['Title'].setValue(
        this.data.customerNotesList.Title
      );
      this.notesForm.controls['CreatedBy'].setValue(
        this.data.customerNotesList.CreatedBy
      );
      this.notesForm.controls['Description'].setValue(
        this.data.customerNotesList.Description
      );
      this.notesForm.controls['LastModified'].setValue(
        this.data.customerNotesList.LastModified
      );
      this.notesForm.controls['LastModifiedBy'].setValue(
        this.data.customerNotesList.LastModifiedBy
      );
    }
  }

  get f() {
    return this.notesForm.controls;
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
    if (this.notesForm.invalid) {
      return;
    }
    debugger;

    // Title: string;
    //     Description: string;
    //     CreatedBy: string;
    //     LastModified: string;
    //     LastModifiedBy: string;
    //     CustomerId: string;
    let dateFieldValue = this.datePipe.transform(
      this.notesForm.value.LastModified,
      'yyyy-MM-dd HH:mm:ss'
    );
    // NotesModel//
    // this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    // const customer = JSON.parse(localStorage.getItem('currentUser'));

    let newNotesObj = new NotesModel();
    newNotesObj.Title = this.notesForm.value.Title;
    newNotesObj.LastModified = dateFieldValue; //Current Date
    newNotesObj.CreatedBy = this.notesForm.value.CreatedBy;
    newNotesObj.Description = this.notesForm.value.Description;
    newNotesObj.LastModifiedBy = this.notesForm.value.LastModifiedBy;
    newNotesObj.CustomerId = this.customerId;
    newNotesObj.Type = this.data.type;
    if (!!this.data.customerNotesList) {
      newNotesObj['Id'] = this.data.customerNotesList.Id;
    }
    this.dialogRef.close(newNotesObj);
  }
}
