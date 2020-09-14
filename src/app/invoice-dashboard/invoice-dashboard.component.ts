import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomerService } from '../features/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../shared/ui.service';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceDetailsModel } from '../features/customer/customermodel/customer-invoice.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.scss'],
})
export class InvoiceDashboardComponent implements OnInit, AfterViewInit {
  customerId: number;
  customerInoiceList: Array<InvoiceDetailsModel> = [];
  // promiseToPayList: Array<PromisePayModel> = [];

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

  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.customerInvoiceList();
    this.getCustomerInvoiceLists();
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
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
  goToProfile() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let cusId = customer.CustomerId;
    // this.uiService.customerIdEmiiter.emit(cusId);
    this.router.navigate(['/admin/invoice-details'], {
      queryParams: { CustomerId: cusId },
    });
  }
  getCustomerInvoiceLists() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.customerService
      .getInvoiceLists(customer.CustomerId)
      .subscribe((res) => {
        this.customerInoiceList = res.invoiceDetailses;
        this.count = this.customerInoiceList.length;
        // console.log(this.customerNotesList);
        // this.dataSource = this.customerNotesList;
        this.dataSource = new MatTableDataSource(this.customerInoiceList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  //getCustomerInvoiceList
  customerInvoiceList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerInvoiceList(customer.CustomerId)
      .subscribe((disputeresponse) => {
        debugger;
      });
  }

  showCustomerInvoiceDetails(element: any) {
    console.log(element);
    // this.uiService.customerIdEmiiter.emit(element.CustomerId);
    this.router.navigate(['/admin/invoice-details'], {
      queryParams: {
        CustomerId: element.CustomerId,
        InvoiceID: element.InvoiceNumber,
      },
    });
  }
}
