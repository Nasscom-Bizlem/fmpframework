import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  item: string;
  quantity: number;
  rate: number;
  amount: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: "Item 1",
    quantity: 500,
    rate: 6500,
    amount: 50000.0,
  },
  {
    item: "Item 1",
    quantity: 500,
    rate: 8800,
    amount: 50000.0,
  },
  {
    item: "Item 1",
    quantity: 500,
    rate: 10000,
    amount: 50000.0,
  },
];
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [
    'item',
    'quantity',
    'rate',
    'amount',
  ];
  dataSource = ELEMENT_DATA;
}
