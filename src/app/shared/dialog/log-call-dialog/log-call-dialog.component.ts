import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerLogACallModel } from 'src/app/features/customer/customermodel/customerlogcall.model';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-log-call-dialog',
  templateUrl: './log-call-dialog.component.html',
  styleUrls: ['./log-call-dialog.component.scss'],
})
export class LogCallDialogComponent implements OnInit {
  logACallForm: FormGroup;
  submitted = false;
  customerId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LogCallDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  selectedItem: string = '';
  imageItemPath = 'assets/images1/account_120.png';

  selectedvalue: string;
  foods: Food[] = [
    { value: 'InProgress', viewValue: 'In Progress' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-3', viewValue: 'Tacos1' },
    { value: 'tacos-3', viewValue: 'Tacos2' },
  ];
  ngOnInit(): void {
    this.customerId = this.data.customerId;
    this.logACallForm = this.formBuilder.group({
      subject: ['', Validators.required],
      comment: ['', Validators.required],
      name: ['', [Validators.required]],
      relatedTo: ['', [Validators.required]],
    });
  }
  get f() {
    return this.logACallForm.controls;
  }
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'glbl-custom-date-class' : '';
  };
  // selcetedItem(item: any, imageitem: any) {
  //   this.selectedItem = 'searching for ' + item;
  //   this.imageItemPath = imageitem;
  // }
  get relatedTo() {
    return this.logACallForm.get('relatedTo');
  }
  selcetedItem(item: any) {
    this.selectedItem = 'searching for ' + item;
    this.logACallForm.get('relatedTo').setValue(item, {
      onlySelf: true,
    });
  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.logACallForm.invalid) {
      return;
    }
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newlogACallObj = new CustomerLogACallModel();
    newlogACallObj.Subject = this.logACallForm.value.subject;
    newlogACallObj.Name = this.logACallForm.value.name;
    newlogACallObj.Comments = this.logACallForm.value.comment;
    newlogACallObj.RelatedTo = this.logACallForm.value.relatedTo;
    newlogACallObj.CustomerId = this.customerId;
    newlogACallObj.Type = this.data.type;
    if (this.data.type != 'customer') {
      newlogACallObj.InvoiceNumber =this.data.invoiceNumber;
    }

    this.dialogRef.close(newlogACallObj);
  }
}
