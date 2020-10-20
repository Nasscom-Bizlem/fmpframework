import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from '../customer.service';
import { CustomerTaskModel } from '../customermodel/customertask.model';
import { CustomerLogACallModel } from '../customermodel/customerlogcall.model';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CustomerEventModel } from '../customermodel/customer-events.model';
import { AppContext } from 'src/app/core-services/app-context.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  customerTaskDetails: Array<CustomerTaskModel>;
  CustomerLogACallList: Array<CustomerLogACallModel> = [];
  customerEventList: Array<CustomerEventModel> = [];
  customerId: number;

  constructor(
    private dialogService: DialogService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    public appContext: AppContext
  ) {
    this.view = [150, 150];
  }
  NewTaskDummyArray = [
    {
      taskName: 'newTask',
      relatedTo: 'Test123',
      Date: 'Today',
      description: 'Related to Test123',
    },
    {
      taskName: 'Added Task',
      relatedTo: 'Test123',
      Date: 'Today',
      description: 'Related to Test123',
    },
  ];

  ngOnInit(): void {
  
    console.log(
      'this.appContext.getCreateNewEventPermission',
      this.appContext.getCreateNewEventPermission
    );
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      debugger;
      this.customerId = res.CustomerId;
      this.getTaskLists(this.customerId);
      this.getLogACallList(this.customerId);
      this.getEventLists(this.customerId);
    });
    // this.getTaskLists(customer.CustomerId);
    // this.getLogACallList(customer.CustomerId);
  }

  view: any[] = [150, 150];

  seriesOpt = [
    {
      name: 'Retired',
      value: 20,
      label: '20%',
    },
    {
      name: 'Employed',
      value: 70,
      label: '70%',
    },
    {
      name: 'Unemployed',
      value: 10,
      label: '10%',
    },
  ];

  pieChartLabelOpt(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  seriesPes = [
    {
      name: 'RetiredPes',
      value: 40,
      label: '40%',
    },
    {
      name: 'EmployedPes',
      value: 30,
      label: '20%',
    },
    {
      name: 'UnemployedPes',
      value: 60,
      label: '60%',
    },
  ];

  pieChartLabelPes(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  onResize(event) {
    console.log(event.target.innerWidth / 1.35);
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  //Dialog Related
  openNewtask() {
    this.dialogService
      .openNewTask(this.customerId, 'customer')
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
  openLogCall() {
    this.dialogService
      .openlogCall(this.customerId, 'customer')
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
  openEvent() {
    this.dialogService
      .openNewEvent(this.customerId, 'customer')
      .subscribe((res) => {
        if (res) {
          this.customerService.addCustomerEvent(res).subscribe((res1) => {
            this.customerEventList.unshift(res1.customerEvent);
            console.log(this.customerEventList);
          });
        }
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

  openTaskDialog(taskName: CustomerTaskModel) {
    if (this.appContext.getCreateTaskPermission) {
      return;
    }
    this.dialogService.openTask(taskName).subscribe((res) => {
      if (res) {
        this.customerService
          .updateCustomerTask(res)
          .subscribe((updateTaskResponse) => {
            // console.log(updateTaskResponse);
            let updatedTaskIndex;
            updatedTaskIndex = this.customerTaskDetails.findIndex(
              (r) => r.Id === updateTaskResponse.task.Id
            );
            if (updatedTaskIndex > -1) {
              let taskList = updateTaskResponse.task;
              this.customerTaskDetails.splice(updatedTaskIndex, 1);
              this.customerTaskDetails.push(taskList);
              this.customerTaskDetails.sort((n1, n2) => n1.Id - n2.Id);
            }

            // return {
            //   r.CustomerId: updateTaskResponse.task.CustomerId,
            //   items: group.nodes.map((node) => node.item),
            //   size: group.size,
            // };
          });
      }
    });
  }

  getTaskLists(CustomerId: any) {
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerTaskList(CustomerId, 'customer')
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
      .getCustomerLogCallList(CustomerId, 'customer')
      .subscribe((res) => {
        console.log(res);
        this.CustomerLogACallList = res.CustomerLogCallList;
        console.log(this.CustomerLogACallList);
      });
  }

  getEventLists(CustomerId: any) {
    //getCustomerEventLists
    this.customerService
      .getCustomerEventLists(CustomerId, 'customer')
      .subscribe((res1) => {
        console.log(res1);
        this.customerEventList = res1.customerEventsList;
        // this.CustomerLogACallList = res.CustomerLogCallList;
        // console.log(this.customerEventList);
      });
  }
}
