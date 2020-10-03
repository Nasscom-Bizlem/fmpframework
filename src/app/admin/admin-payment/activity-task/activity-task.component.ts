import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-activity-task',
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.scss'],
})
export class ActivityTaskComponent implements OnInit {
  constructor(private dialogService: DialogService) {}
  NewTaskDummyArray = [];
  TaskDummyArray =[];

  ngOnInit(): void {
    this.TaskDummyArray = [
      {
        taskHeader: 'Task 1',
        taskHeaderId: 1,
        taskContent: [
          {
            taskID: 1,
            taskName: 'Invoice Sent on Due Date',
            description: 'Monthly Scheduled invoice sent to customer',
            date: 'Aug 20',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'Friendly Reminder for Invoice Payment',
            description: 'Friendly reminder sent on email for past due payment',
            date: 'Aug 21',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'Friendly SMS Sent for Invoice Payment',
            description: 'Friendly SMS sent for past due payment',
            date: 'Aug 20',
            priority: 3,
          },
        ],
      },
      {
        taskHeader: 'Task 2',
        taskHeaderId: 2,
        oldData: true,
        taskContent: [
          {
            taskID: 1,
            taskName: 'Customer asked for online payment link',
            description: 'Customer emailed for online payment link',
            date: 'Aug 17',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'Payment Received',
            description: 'Customer paid through debit card',
            date: 'Aug 17',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'Auto Reconciled & Updated in System',
            description: 'Reconciled based on automated rules and Updated in the system',
            date: 'Aug 17',
            priority: 3,
          },
        ],
      },
    ];
    this.NewTaskDummyArray = [
      {
        taskHeader: 'Upcoming and Overdue',
        taskHeaderId: 1,
        taskContent: [
          {
            taskID: 1,
            taskName: 'Check Payment Status in AI Analysis',
            description: 'Send detailed report of FMP AI Analysis to the manager',
            date: 'Aug 20',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'Weekly update to include payment overdue',
            description: 'Weekly update - include payment overdue',
            date: 'Aug 20',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 20',
            priority: 3,
          },
        ],
      },
      {
        taskHeader: 'Oct - 2017',
        taskHeaderId: 2,
        oldData: true,
        taskContent: [
          {
            taskID: 1,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 3,
          },
        ],
      },
    ];

  }
  selectedIndex = -1;
  setIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = index;
    }
  }
  getClass(i: number) {
    if (i === 1) {
      return 'p-1';
    } else if (i === 2) {
      return 'p-2';
    } else {
      return 'p-3';
    }
  }
  openPaymentTaskDialog() {
    this.dialogService.openPayementTask('').subscribe((res) => {});
  }
}
