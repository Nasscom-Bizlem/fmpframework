import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/receivables/customer/customer.service';
import { InvoiceDetailsModel } from 'src/app/receivables/customer/customermodel/customer-invoice.model';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
})
export class CustomerInvoiceComponent implements OnInit {
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
    this.router.navigate(['/receivables/admin/invoice-details'], {
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
    this.router.navigate(['/receivables/invoice'], {
      queryParams: {
        CustomerId: element.CustomerId,
        InvoiceID: element.InvoiceNumber,
      },
    });
  }
}
