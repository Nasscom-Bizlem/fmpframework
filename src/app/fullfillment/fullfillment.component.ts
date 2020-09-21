import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Fullfillment } from './fullfillment.model';
@Component({
  selector: 'app-fullfillment',
  templateUrl: './fullfillment.component.html',
  styleUrls: ['./fullfillment.component.scss']
})
export class FullfillmentComponent implements OnInit {

  displayedColumns: string[] = [
    'Id',
    'ServiceName',
    'Description',
    'Type',
    'Limit',
    'Currency',
    'Payment',
    'GracePeriod',
    'Price'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
   }
  constructor() { }

  ngOnInit(): void {
  }


}
const ELEMENT_DATA: Fullfillment[] = [
  { Id: 'T1', ServiceName: 'NDA Management', Description: "Per user per month", Type: 'enterprice', Limit: "50", Currency: "$", Payment: "3 Months Advance", GracePeriod: "02-08-2020", Price: "$1.00" },
  { Id: 'T2', ServiceName: 'FMP', Description: "Record month", Type: '2nterprice', Limit: "10", Currency: "$", Payment: "3 Months Advance", GracePeriod: "02-08-2020", Price: "$1.00" }

];