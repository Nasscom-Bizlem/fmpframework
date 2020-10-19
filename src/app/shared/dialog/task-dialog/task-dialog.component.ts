import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppContext } from 'src/app/core-services/app-context.service';
import { CustomerTaskModel } from 'src/app/receivables/customer/customermodel/customertask.model';
interface Status {
  value: number;
  viewValue: string;
}
interface Priority {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    public appcontext: AppContext
  ) {}
  selectedvalue: string;
  statusSelected: number = 0;

  isFieldDisabled = true;
  taskList: CustomerTaskModel;

  status: Status[] = [
    { value: 0, viewValue: 'In Progress' },
    { value: 1, viewValue: 'Completed' },
    // { value: '2', viewValue: 'Tacos' },
    // { value: '3', viewValue: 'Tacos1' },
    // { value: '4', viewValue: 'Tacos2' },
  ];
  priority: Priority[] = [
    { value: 'InProgress', viewValue: 'In Progress' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-3', viewValue: 'Tacos1' },
    { value: 'tacos-3', viewValue: 'Tacos2' },
  ];
  ngOnInit(): void {
    this.taskList = JSON.parse(JSON.stringify(this.data.modeldata));
    console.log(this.data.modeldata);
    this.initialSelection();
  }

  enableFields() {
    this.isFieldDisabled = !this.isFieldDisabled;
  }
  initialSelection() {
    this.statusSelected = this.status.findIndex(
      (r) =>
        r.viewValue.replace(' ', '').toLowerCase().trim() ===
        this.taskList.Status.toLowerCase().trim()
    );
  }
  findSelection(event) {
    // this.statusSelected = this.status.findIndex(
    //   (r) =>
    //     r.viewValue.toLowerCase().trim() ==
    //     this.taskList.Status.toLowerCase().trim()
    // );
    this.taskList.Status = this.status.find(
      (r) => r.value === event.value
    ).viewValue;
  }

  updateTask() {
    this.dialogRef.close(this.taskList);
  }
}
