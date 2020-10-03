import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from '../customer.service';
import {
  CustomerDisputeModel,
  CustomerDisuteRootModel,
} from '../customermodel/customer-dispute.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  DisputeId: number;
  contactName: string;
  subject: string;
  priority: string;
  lastActivity: string;
  status: string;
  owner: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    DisputeId: 1100123,
    contactName: 'Geeta A',
    subject: 'This Customer is going to pay',
    priority: 'Medium',
    lastActivity: '7/1/2020 8:59 A.M',
    status: 'Opened',
    owner: 'GA',
  },
];
@Component({
  selector: 'app-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss'],
})
export class DisputesComponent implements OnInit, AfterViewInit {
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

  CustomerDisputeList: Array<CustomerDisputeModel> = [];

  dataSource: MatTableDataSource<CustomerDisputeModel>;
  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];
  customerId: number;
  constructor(
    private dialogService: DialogService,
    private customerService: CustomerService,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.customerId = res.CustomerId;
      this.getDisputeLists(this.customerId);
    });

  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  // 'check',
  displayedColumns: string[] = [
    'Id',
    'ContactName',
    'Subject',
    'Priority',
    'LastActivity',
    'Owner',
    'view',
  ];

  // Subject: string;
  // CustomerId: string;
  // Priority: string;
  // ContactName: string;
  // LastActivity: string;
  // Owner: string;
  // Id:number;
  // dataSource = ELEMENT_DATA;

  deleteDispute(element: CustomerDisputeModel) {
    console.log(element);
    this.customerService.deleteDispute(element).subscribe((disputeresponse) => {
      let updatedDisputeIndex;
      updatedDisputeIndex = this.CustomerDisputeList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedDisputeIndex > -1) {
        this.CustomerDisputeList.splice(updatedDisputeIndex, 1);
        this.CustomerDisputeList.sort((n1, n2) => n1.Id - n2.Id);
        this.dataSource = new MatTableDataSource(this.CustomerDisputeList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.CustomerDisputeList.length)
        data.push(this.CustomerDisputeList[i]);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.count = this.CustomerDisputeList.length;
  }

  getDisputeLists(customerId: any) {
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getDisputeList(customerId,'customer')
      .subscribe((disputeresponse) => {
        debugger;
        console.log(disputeresponse);
        this.CustomerDisputeList = disputeresponse.disputesList;
        this.count = this.CustomerDisputeList.length;
        // console.log(this.CustomerDisputeList);
        // this.dataSource = this.CustomerDisputeList;
        this.dataSource = new MatTableDataSource(this.CustomerDisputeList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  openDispute() {
    this.dialogService.openDispute( this.customerId).subscribe((res) => {
      if (res) {
        this.customerService
          .addDisputeList(res)
          .subscribe((disputeresponse) => {
            this.CustomerDisputeList.unshift(disputeresponse.dispute);
            this.count = this.CustomerDisputeList.length;
            // console.log(this.CustomerDisputeList);
            // this.dataSource = this.CustomerDisputeList;
            this.dataSource = new MatTableDataSource(this.CustomerDisputeList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      }
    });
  }
  openNewtask() {
    this.dialogService.openNewTask(this.customerId,'customer').subscribe((res) => {
      console.log(res);
      if (res) {
        this.customerService
          .postCustomerTaskModel(res)
          .subscribe((taskresponse) => {
            console.log(taskresponse);
          });
      }
    });
  }
  openLogCall() {
    this.dialogService.openlogCall(this.customerId,'customer').subscribe((res) => {
      console.log(res);
      if (res) {
        this.customerService
          .createCustomerLogCall(res)
          .subscribe((logresponse) => {
            console.log(logresponse);
          });
      }
    });
  }

  editDispute(element) {
    this.dialogService.openDispute(this.customerId,element).subscribe((res) => {
      if (res) {
        this.customerService
          .editDisputesList(res)
          .subscribe((disputeresponse) => {
            let updatedDisputeIndex;
            updatedDisputeIndex = this.CustomerDisputeList.findIndex(
              (r) => r.Id === disputeresponse.dispute.Id
            );
            if (updatedDisputeIndex > -1) {
              let disputeList = disputeresponse.dispute;
              this.CustomerDisputeList.splice(updatedDisputeIndex, 1);
              this.CustomerDisputeList.push(disputeList);
              this.CustomerDisputeList.sort((n1, n2) => n1.Id - n2.Id);
              this.dataSource = new MatTableDataSource(
                this.CustomerDisputeList
              );
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
          });
      }
    });
  }

  getDateFormate(date: any) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }
}
