import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  CustomerListModel,
  CustomerListNewModel,
} from '../features/customer/customermodel/customerlist.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../features/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../shared/ui.service';

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.scss'],
})
export class CustomersDashboardComponent implements OnInit {
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
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.showCustomersList();
    console.log(this.customerListModel);
  }
  ngOnChanges() {}

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

  showCustomersList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.customerService
      .getUserCustomerList(customer.CustomerId)
      .subscribe((res) => {
        debugger;
        this.customerListModel = res.customers;
        this.dataSource = new MatTableDataSource(this.customerListModel);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.count = this.customerListModel.length;
      });
  }

  showCustomerDetails(element: any) {
    console.log(element);
    this.uiService.customerIdEmiiter.emit(element.CustomerId);
    this.router.navigate(['/customer/overview'], {
      queryParams: { CustomerId: element.CustomerId },
    });
  }

  goToProfile() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let cusId = customer.CustomerId;
    this.uiService.customerIdEmiiter.emit(cusId);
    this.router.navigate(['/customer/overview'], {
      queryParams: { CustomerId: cusId },
    });
  }
}
