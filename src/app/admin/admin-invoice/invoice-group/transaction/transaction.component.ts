import { Component, OnInit, ViewEncapsulation } from '@angular/core';
export interface PeriodicElement {
  invoicenumber: number;
  customer: string;
  subject: string;
  priority: string;
  date: string;
  status: string;
  owner: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    invoicenumber: 17001,
    customer: 'Geeta',
    subject: 'This Customer is about to pay',
    date: 'Jul 25th, 2020 , 13:14',
    priority: 'Low',
    status: 'open',
    owner: 'Geeta',
  },
  {
    invoicenumber: 17002,
    customer: 'Geeta',
    subject: 'This Customer is about to pay',
    date: 'Jul 25th, 2020 , 13:14',
    priority: 'Low',
    status: 'open',
    owner: 'Geeta',
  },
  {
    invoicenumber: 17003,
    customer: 'Geeta',
    subject: 'This Customer is about to pay',
    date: 'Jul 25th, 2020 , 13:14',
    priority: 'Low',
    status: 'open',
    owner: 'Geeta',
  },
];
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TransactionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'invoicenumber',
    'customer',
    'subject',
    'priority',
    'status',
    'owner',
  ];
  dataSource = ELEMENT_DATA;
}
