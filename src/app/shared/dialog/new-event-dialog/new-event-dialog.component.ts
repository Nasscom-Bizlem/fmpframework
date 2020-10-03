import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomerEventModel } from 'src/app/receivables/customer/customermodel/customer-events.model';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.scss'],
})
export class NewEventDialogComponent implements OnInit {
  eventForm: FormGroup;
  submitted = false;
  customerId: any;
  allDayEvent: string = 'N';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewEventDialogComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}
  selectedItem: string = '';
  imageItemPath = 'assets/images1/account_120.png';

  selectedvalue: string;
  foods: Food[] = [
    { value: 'InProgress', viewValue: 'In Progress' },
    { value: 'Completed', viewValue: 'Completed' },
  ];

  ngOnInit(): void {
    this.customerId = this.data.customerId;
    this.eventForm = this.formBuilder.group({
      Subject: ['', Validators.required],
      StartDate: ['', Validators.required],
      StartTime: ['', [Validators.required]],
      EndDate: ['', [Validators.required]],
      EndTime: ['', [Validators.required]],
      AllDayEvent: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      RelatedTo: ['', [Validators.required]],
      AssignedTo: ['', [Validators.required]],
      Location: ['', [Validators.required]],
    });
  }
  get f() {
    return this.eventForm.controls;
  }
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'glbl-custom-date-class' : '';
  };

  selcetedItem(item: any, imageitem?: any) {
    this.selectedItem = 'searching for ' + item;
    this.eventForm.get('RelatedTo').setValue(item, {
      onlySelf: true,
    });
  }

  allDay(event) {
    if (event.checked) {
      this.allDayEvent = 'Y';
      this.eventForm.get('AllDayEvent').setValue(this.allDayEvent, {
        onlySelf: true,
      });
    } else {
      this.allDayEvent = 'N';
      this.eventForm.get('AllDayEvent').setValue(this.allDayEvent, {
        onlySelf: true,
      });
    }
  }

  convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }

    // "Subject": "Demo Event",
    // "StartDate": "2020-8-10",
    // "StartTime": "10:00",
    // "EndDate": "2020-08-25",
    // "EndTime": "19:35",
    // "AllDayEvent": "N",
    // "Name": "Rachit",
    // "RelatedTo": "Abhishek",
    // "AssignedTo": "Manoj",
    // "Location": "Mumbai",
    // "CustomerId": "cus1001"
    // const customer = JSON.parse(localStorage.getItem('currentUser'));
    let StartDate = this.datePipe.transform(
      this.eventForm.value.StartDate,
      'yyyy-MM-dd HH:mm:ss'
    );
    let EndDate = this.datePipe.transform(
      this.eventForm.value.EndDate,
      'yyyy-MM-dd HH:mm:ss'
    );
    let dateTime = new Date();
    let StartTime = this.convertTime12to24(this.eventForm.value.StartTime);

    let EndTime = this.convertTime12to24(this.eventForm.value.EndTime);

    let newEventObj = new CustomerEventModel();
    newEventObj.Subject = this.eventForm.value.Subject;
    newEventObj.StartDate = StartDate;
    newEventObj.StartTime = StartTime; //this.eventForm.value.StartTime;
    newEventObj.EndDate = EndDate;
    newEventObj.EndTime = EndTime; //this.eventForm.value.EndTime;
    newEventObj.AssignedTo = this.eventForm.value.AssignedTo;
    newEventObj.RelatedTo = this.eventForm.value.RelatedTo;
    newEventObj.Location = this.eventForm.value.Location;
    newEventObj.AllDayEvent = this.eventForm.value.AllDayEvent;
    newEventObj.Name = this.eventForm.value.Name;
    newEventObj.CustomerId = this.customerId;
    newEventObj.Type = this.data.type;
    if (this.data.type != 'customer') {
      newEventObj.InvoiceNumber = this.data.invoiceNumber;
    }
    this.dialogRef.close(newEventObj);
  }
}
