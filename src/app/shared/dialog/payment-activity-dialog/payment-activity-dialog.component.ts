import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-payment-activity-dialog',
  templateUrl: './payment-activity-dialog.component.html',
  styleUrls: ['./payment-activity-dialog.component.scss'],
})
export class PaymentActivityDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PaymentActivityDialogComponent>
  ) {}
  foods: Food[] = [
    { value: 'Unassigned', viewValue: 'Unassigned' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-3', viewValue: 'Tacos1' },
    { value: 'tacos-3', viewValue: 'Tacos2' },
  ];
  ngOnInit(): void {}
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'glbl-custom-date-class' : '';
  };
}
