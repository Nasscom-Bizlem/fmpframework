import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface PeriodicElement {
  item: string;
  quantity: number;
  rate: number;
  amount: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: 'Item 1',
    quantity: 500,
    rate: 6500,
    amount: 50000.0,
  },
  {
    item: 'Item 1',
    quantity: 500,
    rate: 8800,
    amount: 50000.0,
  },
  {
    item: 'Item 1',
    quantity: 500,
    rate: 10000,
    amount: 50000.0,
  },
];
@Component({
  selector: 'app-iqra',
  templateUrl: './iqra.component.html',
  styleUrls: ['./iqra.component.scss'],
})
export class IqraComponent implements OnInit, OnChanges {
  @Input() invoiceDetailsProducts: any;

  @ViewChild(MatPaginator)
  set paginator(tablePaginator: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = tablePaginator;
    }
  }

  @ViewChild(MatSort)
  set sort(tablesort: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = tablesort;
    }
  }

  constructor() {}

  ngOnInit(): void {
    if (!!this.invoiceDetailsProducts) {
      console.log(this.invoiceDetailsProducts);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.invoiceDetailsProducts) {
      this.dataSource = new MatTableDataSource(this.invoiceDetailsProducts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    }
  }
  displayedColumns: string[] = ['ProductName', 'Qty', 'UnitPrice', 'Amount'];
  dataSource: MatTableDataSource<any>;
}
