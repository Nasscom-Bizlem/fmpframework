import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
export interface PeriodicElement {
  title: string;
  textpreview: string;
  createdBy: string;
  lastmodified: string;
  lastmodifiedby: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Invoice 3-Jul-2020',
    textpreview: '3-Jul-2020',
    createdBy: 'Manoj',
    lastmodified: '7/1/2020 8:59 A.M',
    lastmodifiedby: 'Geeta'
  },
];
@Component({
  selector: 'app-reminders-action',
  templateUrl: './reminders-action.component.html',
  styleUrls: ['./reminders-action.component.scss'],
})
export class RemindersActionComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'check',
    'title',
    'textpreview',
    'createdBy',
    'lastmodified',
    'lastmodifiedby',
    'view',
  ];
  dataSource = ELEMENT_DATA;

  openInvoiceDetails(element: any) {
    this.dialogService.openCustomerInvoice(element).subscribe((res) => {});
  }
}
