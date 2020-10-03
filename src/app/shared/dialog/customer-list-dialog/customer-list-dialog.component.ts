import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { DialogService } from '../dialog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { CustomerListNewModel } from 'src/app/receivables/customer/customermodel/customerlist.model';

@Component({
  selector: 'app-customer-list-dialog',
  templateUrl: './customer-list-dialog.component.html',
  styleUrls: ['./customer-list-dialog.component.scss'],
})
export class CustomerListDialogComponent implements OnInit, AfterViewInit {
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomerListDialogComponent>,
    private router: Router,
    public dialog: MatDialog
  ) {}

  // dataSource: MatTableDataSource<FavouriteModel>;
  //

  isCustomerAdd = false;
  customerListModel: Array<CustomerListNewModel> = [];
  dataSource: MatTableDataSource<CustomerListNewModel>;
  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    debugger;
    // this.dataSource = new MatTableDataSource(this.Griddata);
    console.log(this.data.modeldata);
    if (this.data.modeldata && this.data.modeldata.length > 0) {
      this.customerListModel = this.data.modeldata;
      this.dataSource = new MatTableDataSource(this.data.modeldata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.count = this.data.modeldata.length;
      this.isCustomerAdd = false;
    }
  }

  displayedColumns: string[] = [
    'Name',
    'Email',
    'TeamSpaceName',
    'PhoneNumber',
    'view',
  ];

  //Later Will move in Seperate Service Class
  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.customerListModel.length)
        data.push(this.customerListModel[i]);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.count = this.customerListModel.length;
  }

  // dataSource = ELEMENT_DATA;
  showCustomerDetails(element: any) {
    console.log(element);
    // this.router.navigateByUrl(`/customer/overview?id=${element.Id}`);
    // this.router.navigate( ['/customer/overview', {id1: element.Id, id2:
    //   element.CustomerId}]);
    this.router.navigate(['/customer/overview'], {
      queryParams: { CustomerId: element.CustomerId },
    });
    this.dialogRef.close();
  }
  addCustomer() {
    this.isCustomerAdd = true;
  }
  showCustomerList() {
    this.isCustomerAdd = false;
  }

  addedCustomerDetails(event) {
    if (event.back) {
      this.isCustomerAdd = !event.back;
      return;
    }
    this.isCustomerAdd = !event.back;
    this.dialogRef.close(event.addCustomerDetails);
  }
  // navigate(uri:number) {
  //   this.router.navigateByUrl(`/customer/${uri}`);
  // }
}
