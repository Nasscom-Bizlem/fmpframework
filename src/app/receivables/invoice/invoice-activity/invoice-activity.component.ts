import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTaskModel } from '../../customer/customermodel/customertask.model';
import { CustomerLogACallModel } from '../../customer/customermodel/customerlogcall.model';
import { CustomerEventModel } from '../../customer/customermodel/customer-events.model';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-invoice-activity',
  templateUrl: './invoice-activity.component.html',
  styleUrls: ['./invoice-activity.component.scss'],
})
export class InvoiceActivityComponent implements OnInit {
  customerTaskDetails: Array<CustomerTaskModel> = [];
  @Input() CustomerLogACallList: Array<CustomerLogACallModel> = [];
  customerEventList: Array<CustomerEventModel> = [];
  customerId: number;
  InvoiceID: string;
  constructor(
    private dialogService: DialogService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      if (res) {
        console.log(res);
        debugger;
        this.customerId = res.CustomerId;
        this.InvoiceID = res.InvoiceID;
        this.getLogACallList(this.InvoiceID);
        this.getTaskLists(this.InvoiceID);
        this.getEventLists(this.InvoiceID);
      } else {
        // this.router.navigate(['notfound']);
        this.router.navigate(['/invoicedashboard']);
      }
    });
  }

  openLogCall() {
    this.dialogService
      .openlogCall(this.customerId, 'invoice', this.InvoiceID)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          debugger;
          this.customerService
            .createCustomerLogCall(res)
            .subscribe((logresponse) => {
              this.CustomerLogACallList.unshift(logresponse.customerLogCall);
              console.log(this.CustomerLogACallList);
            });
        }
      });
  }
  openNewtask() {
    this.dialogService
      .openNewTask(this.customerId, 'invoice', this.InvoiceID)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.customerService
            .postCustomerTaskModel(res)
            .subscribe((taskresponse) => {
              debugger;
              console.log(taskresponse);
              this.customerTaskDetails.unshift(taskresponse.task);
            });
        }
      });
  }

  openEvent() {
    this.dialogService
      .openNewEvent(this.customerId, 'invoice', this.InvoiceID)
      .subscribe((res) => {
        if (res) {
          this.customerService.addCustomerEvent(res).subscribe((res1) => {
            this.customerEventList.unshift(res1.customerEvent);
            console.log(this.customerEventList);
          });
        }
      });
  }

  getEventLists(CustomerId: any) {
    //getCustomerEventLists
    this.customerService
      .getCustomerEventLists(CustomerId, 'invoice')
      .subscribe((res1) => {
        console.log(res1);
        this.customerEventList = res1.customerEventsList;
        // this.CustomerLogACallList = res.CustomerLogCallList;
        // console.log(this.customerEventList);
      });
  }

  getTaskLists(CustomerId: any) {
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerTaskList(CustomerId, 'invoice')
      .subscribe((res) => {
        console.log(res);
        this.customerTaskDetails = res.taskList;
        console.log(this.customerTaskDetails);
      });
  }

  getLogACallList(CustomerId: any) {
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerLogCallList(CustomerId, 'invoice')
      .subscribe((res) => {
        console.log(res);
        this.CustomerLogACallList = res.CustomerLogCallList;
        console.log(this.CustomerLogACallList);
      });
  }

  selectedIndex = -1;
  subModule = false;
  current: number = 0;
  setIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}
