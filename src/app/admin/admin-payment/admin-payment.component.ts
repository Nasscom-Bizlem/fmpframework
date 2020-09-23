import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SplitComponent } from 'src/app/shared/splitter/component/split.component';
import { SplitAreaDirective } from 'src/app/shared/splitter/directive/splitArea.directive';
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
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.scss'],
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
export class AdminPaymentComponent implements OnInit {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  isRightPanelOpen = false;
  menuState: string = 'out';
  restrictMove: boolean = false;
  constructor() {
    // super();

    setTimeout(() => {
      console.log('>>> split > ', this.split);
      console.log('>>> area1 > ', this.area1);
      console.log('>>> area2 > ', this.area2);
    }, 1000);
  }
  @ViewChild('split', { static: false }) split: SplitComponent;
  @ViewChild('area1', { static: false }) area1: SplitAreaDirective;
  @ViewChild('area2', { static: false }) area2: SplitAreaDirective;

  direction: string = 'horizontal';
  sizes = {
    percent: {
      area1: 30,
      area2: 70,
    },
    pixel: {
      area1: 120,
      area2: '*',
      area3: 160,
    },
  };
  dragEnd(unit, {sizes}) {
    if(unit === 'percent') {
        this.sizes.percent.area1 = sizes[0];
        this.sizes.percent.area2 = sizes[1];
    }
    else if(unit === 'pixel') {
        this.sizes.pixel.area1 = sizes[0];
        this.sizes.pixel.area2 = sizes[1];
        this.sizes.pixel.area3 = sizes[2];
    }
}
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
