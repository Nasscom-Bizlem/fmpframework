import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerTaskModel } from 'src/app/receivables/customer/customermodel/customertask.model';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss'],
})
export class NewTaskDialogComponent implements OnInit {
  taskForm: FormGroup;
  submitted = false;
  customerId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  selectedItem: string = '';

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
    this.taskForm = this.formBuilder.group({
      subject: ['', Validators.required],
      name: ['', Validators.required],
      relatedTo: ['', [Validators.required]],
      assignedTo: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'glbl-custom-date-class' : '';
  };

  get cityName() {
    return this.taskForm.get('relatedTo');
  }
  get status() {
    return this.taskForm.get('status');
  }
  selcetedItem(item: any) {
    this.selectedItem = 'searching for ' + item;
    this.cityName.setValue(item, {
      onlySelf: true,
    });
  }
  changeCity(e) {
    this.status.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get f() {
    return this.taskForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newTaskObj = new CustomerTaskModel();
    // subject: ['', Validators.required],
    // name: ['', Validators.required],
    // relatedTo: ['', [Validators.required]],
    // assignedTo: ['', [Validators.required]],
    // status: ['', [Val
    newTaskObj.Subject = this.taskForm.value.subject;
    newTaskObj.Name = this.taskForm.value.name;
    // newTaskObj.Subject = this.taskForm.value.relatedTo;
    newTaskObj.AssignedTo = this.taskForm.value.assignedTo;
    newTaskObj.Status = this.taskForm.value.status;
    newTaskObj.CustomerId = this.customerId; //customer.CustomerId;
    newTaskObj.Type = this.data.type;
    if (this.data.type != 'customer') {
      newTaskObj.InvoiceNumber = this.data.invoiceNumber;
    }
    // newTaskObj.Subject = this.taskForm.value.subject;

    this.dialogRef.close(newTaskObj);
  }
}
