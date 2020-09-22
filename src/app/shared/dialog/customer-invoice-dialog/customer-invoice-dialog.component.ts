import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface PeriodicElement {
  customerName: string;
  recievable: number;
  recieved: number;
  lastContacted: string;
  priority: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    customerName: 'Price Water Cooper',
    recievable: 6500000.0,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 1,
  },
  {
    customerName: 'Price Water Cooper',
    recievable: 6500000.0,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 2,
  },
  {
    customerName: 'Price Water Cooper',
    recievable: 6500000.0,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 3,
  },
];
@Component({
  selector: 'app-customer-invoice-dialog',
  templateUrl: './customer-invoice-dialog.component.html',
  styleUrls: ['./customer-invoice-dialog.component.scss'],
})
export class CustomerInvoiceDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomerInvoiceDialogComponent>
  ) {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'check',
    'customerName',
    'recievable',
    'recieved',
    'outstanding',
    'lastContacted',
    'priority',
    'icon',
    'view',
  ];
  dataSource = ELEMENT_DATA;
}
