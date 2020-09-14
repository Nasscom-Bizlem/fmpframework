import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceDetailsModel } from '../customermodel/customer-invoice.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { DatePipe } from '@angular/common';
import { PromisePayModel } from '../customermodel/promise-pay.model';
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
    recievable: 6500,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 1,
  },
  {
    customerName: 'DND Real Estate',
    recievable: 8800,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 2,
  },
  {
    customerName: 'Apple Retail',
    recievable: 10000,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 3,
  },
];
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit, AfterViewInit {
  customerId: number;
  customerInoiceList: Array<InvoiceDetailsModel> = [];
  promiseToPayList: Array<PromisePayModel> = [];
  uniqueInvoiceId: string;

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

  dataSource: MatTableDataSource<InvoiceDetailsModel>;
  promiseToPayDataSource: MatTableDataSource<PromisePayModel>;
  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.customerId = res.CustomerId;
      this.getCustomerInvoiceLists(this.customerId);
      this.getPromiseToPayLists(this.customerId);
      this.getInvoiceNumber();
    });
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  getInvoiceNumber() {
    this.customerService.getInvoiceNumber().subscribe((res) => {
      this.uniqueInvoiceId = res.InvoiceNumber;
    });
  }

  // 'customerName',
  displayedColumns: string[] = [
    'check',
    'InvoiceNumber',
    'InvoiceDate',
    'DueDate',
    'Terms',
    'Location',
    'Memo',
    'Product',
    'Description',
    'ItemQuantity',
    'ItemRate',
    'ItemAmount',
    'ServiceDate',
    'icon',
    'view',
  ];
  // CustomerId: "cus1001"
  // CustomerName: "test"
  // Description: "test"
  // ExpectedDate: "2020-08-26 06:57:09"
  // Id: 1
  // PaymentMethod: "CoD"

  promisPayColums: string[] = [
    'CustomerName',
    'Description',
    'ExpectedDate',
    'PaymentMethod',
    'view',
  ];
  // dataSource = ELEMENT_DATA;

  getCustomerInvoiceLists(customerId: any) {
    this.customerService.getInvoiceLists(customerId).subscribe((res) => {
      this.customerInoiceList = res.invoiceDetailses;
      this.count = this.customerInoiceList.length;
      // console.log(this.customerNotesList);
      // this.dataSource = this.customerNotesList;
      this.dataSource = new MatTableDataSource(this.customerInoiceList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getPromiseToPayLists(customerId: any) {
    this.customerService.getPromiseToPayLists(customerId).subscribe((res) => {
      //customerPromiseToPays
      this.promiseToPayList = res.customerPromiseToPays;
      this.promiseToPayDataSource = new MatTableDataSource(
        res.customerPromiseToPays
      );
    });
  }

  openNewtask() {
    this.dialogService
      .openNewTask(this.customerId, 'invoice')
      .subscribe((res) => {
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
    this.dialogService
      .openlogCall(this.customerId, 'invoice')
      .subscribe((res) => {
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

  addPromise() {
    this.dialogService.openPromisePay(this.customerId).subscribe((res) => {
      this.customerService.addPromiseToPays(res).subscribe((res1) => {
        this.promiseToPayList.unshift(res1.customerPromiseToPay);
        // this.count = this.CustomerDisputeList.length;
        // console.log(this.CustomerDisputeList);
        // this.dataSource = this.CustomerDisputeList;
        this.promiseToPayDataSource = new MatTableDataSource(
          this.promiseToPayList
        );
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
    });
  }
  updatePromise(element: any) {
    this.dialogService
      .openPromisePay(this.customerId, element)
      .subscribe((res) => {
        if (res) {
          this.customerService.updatePromiseToPay(res).subscribe((res11) => {
            debugger;
            let updatedDisputeIndex;
            updatedDisputeIndex = this.promiseToPayList.findIndex(
              (r) => r.Id === res11.customerPromiseToPay.Id
            );
            if (updatedDisputeIndex > -1) {
              let disputeList = res11.customerPromiseToPay;
              this.promiseToPayList.splice(updatedDisputeIndex, 1);
              this.promiseToPayList.push(disputeList);
              this.promiseToPayList.sort((n1, n2) => n1.Id - n2.Id);
              this.promiseToPayDataSource = new MatTableDataSource(
                this.promiseToPayList
              );
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
          });

          //customerPromiseToPay
        }
      });
  }

  // openInvoiceDetails(element: any) {
  //   this.dialogService.openCustomerInvoice(element).subscribe((res) => {});
  // }

  addInvoice() {
    // openAddInvoiceDialogComponent
    const fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
    this.dialogService
      .openAddInvoiceDialogComponent(this.customerId, this.uniqueInvoiceId)
      .subscribe((res) => {
        this.customerService.addInvoice(res).subscribe((addInvoiceRes) => {
          debugger;
        });
      });
  }
}
