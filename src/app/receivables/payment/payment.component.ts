import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  invoiceValue: number;
  customerName: string;
  recievable: number;
  recieved: number;
  lastContacted: string;
  priority: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    invoiceValue: 25,
    customerName: 'Price Water Cooper',
    recievable: 6500,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 1,
  },
  {
    invoiceValue: 18,
    customerName: 'DND Real Estate',
    recievable: 8800,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 2,
  },
  {
    invoiceValue: 7,
    customerName: 'Apple Retail',
    recievable: 10000,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 3,
  },
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class PaymentComponent implements OnInit {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  isRightPanelOpen = false;
  menuState: string = 'out';
  restrictMove: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'invoiceValue',
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

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  openRightPanel() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
