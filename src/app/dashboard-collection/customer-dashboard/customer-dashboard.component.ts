import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppContext } from 'src/app/core-services/app-context.service';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { GlobalvariablesService } from 'src/app/core-services/globalvariables.service';
import { CustomerService } from 'src/app/receivables/customer/customer.service';
import { CustomerListNewModel } from 'src/app/receivables/customer/customermodel/customerlist.model';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  displayedColumns: string[];

  @Input() customerListModel: Array<CustomerListNewModel>;
  // @Output() showCustomers = new EventEmitter();
  // @Output() profileEmitter = new EventEmitter();

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
  dataSource: MatTableDataSource<CustomerListNewModel>;
  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private uiService: UiService,
    private globalConstants: GlobalConstantService,
    public appContext: AppContext
  ) {}

  ngOnInit(): void { 
    this.uiService.isLogginPage.next(false);
    // if (!!this.globalConstants.BASE_URL) {
    this.showCustomersList();
    // }
    console.log(this.customerListModel);

    if (!this.appContext.geStorageCustomerViewPermission) {
      this.displayedColumns = ['Name', 'Email', 'TeamSpaceName', 'PhoneNumber'];
    } else {
      this.displayedColumns = [
        'Name',
        'Email',
        'TeamSpaceName',
        'PhoneNumber',
        'view',
      ];
    }
  }
  ngOnChanges() {
    if (!!this.globalConstants.BASE_URL) {
      this.showCustomersList();
    }
  }

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

  showCustomersList() {
    debugger;
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.customerService
      .getUserCustomerList(customer.user.customerId)
      .subscribe(
        (res) => {
          debugger;
          this.customerListModel = res.customers;
          this.dataSource = new MatTableDataSource(this.customerListModel);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.count = this.customerListModel.length;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  showCustomerDetails(element: any) {
    console.log(element);
    this.uiService.customerIdEmiiter.emit(element.CustomerId);
    this.router.navigate(['/receivables/customer/overview'], {
      queryParams: { CustomerId: element.CustomerId },
    });
  }

  goToProfile() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let cusId = customer.user.customerId;
    this.uiService.customerIdEmiiter.emit(cusId);
    this.router.navigate(['/receivables/customer/overview'], {
      queryParams: { CustomerId: cusId },
    });
  }
}
