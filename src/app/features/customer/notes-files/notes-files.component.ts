import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerNotesListModel } from '../customermodel/notes.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
export interface PeriodicElement {
  title: string;
  textpreview: string;
  createdBy: string;
  lastmodified: string;
  lastmodifiedby: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Test Note',
    textpreview: 'This is a test note',
    createdBy: 'GA',
    lastmodified: '7/1/2020 8:59 A.M',
    lastmodifiedby: 'GA',
  },
];
@Component({
  selector: 'app-notes-files',
  templateUrl: './notes-files.component.html',
  styleUrls: ['./notes-files.component.scss'],
})
export class NotesFilesComponent implements OnInit, AfterViewInit {
  customerId: number;
  customerNotesList: Array<CustomerNotesListModel> = [];

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

  dataSource: MatTableDataSource<CustomerNotesListModel>;
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
      debugger;
      console.log(res);
      this.customerId = res.CustomerId;
      this.getCustomerNoteLists(this.customerId);
    });
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  displayedColumns: string[] = [
    'check',
    'Title',
    'Description',
    'CreatedBy',
    'LastModified',
    'LastModifiedBy',
    'view',
  ];

  refreshData() {
    debugger;
    this.getCustomerNoteLists(this.customerId);
  }

  getCustomerNoteLists(customerId: any) {
    this.customerService.getCustomerNoteList(customerId,'customer').subscribe((res) => {
      this.customerNotesList = res.customerNotesList;
      this.count = this.customerNotesList.length;
      // console.log(this.customerNotesList);
      // this.dataSource = this.customerNotesList;
      this.dataSource = new MatTableDataSource(this.customerNotesList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openNotesList() {
    this.dialogService.openNotes(this.customerId,'customer').subscribe((res) => {
      if (res) {
        this.customerService.addNotesList(res).subscribe((notesAddRes) => {
          this.customerNotesList.unshift(notesAddRes.customerNote);
          this.count = this.customerNotesList.length;
          // console.log(this.CustomerDisputeList);
          // this.dataSource = this.CustomerDisputeList;
          this.dataSource = new MatTableDataSource(this.customerNotesList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    });
  }

  editNotes(element) {
    debugger;
    this.dialogService.openNotes(this.customerId,'customer', element).subscribe((res) => {
      if (res) {
        this.customerService.editdNotes(res).subscribe((disputeresponse) => {
          debugger;
          let updatedDisputeIndex;
          updatedDisputeIndex = this.customerNotesList.findIndex(
            (r) => r.Id === disputeresponse.customerNote.Id
          );
          if (updatedDisputeIndex > -1) {
            let disputeList = disputeresponse.customerNote;
            this.customerNotesList.splice(updatedDisputeIndex, 1);
            this.customerNotesList.push(disputeList);
            this.customerNotesList.sort((n1, n2) => n1.Id - n2.Id);
            this.dataSource = new MatTableDataSource(this.customerNotesList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
      }
    });
  }
  deleteNotes(element: CustomerNotesListModel) {
    let obj = new CustomerNotesListModel();
    obj.CreatedBy = element.CreatedBy;
    obj.CustomerId = element.CustomerId;
    obj.Description = element.Description;
    obj.Id = element.Id;
    let dateFieldValue = this.datePipe.transform(
      element.LastModified,
      'yyyy-MM-dd HH:mm:ss'
    );
    obj.LastModified = dateFieldValue;
    obj.LastModifiedBy = element.LastModifiedBy;
    obj.Title = element.Title;
    this.customerService.deleteNotes(obj).subscribe((res) => {
      let updatedDisputeIndex;
      updatedDisputeIndex = this.customerNotesList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedDisputeIndex > -1) {
        // let disputeList = res.customerNote;
        this.customerNotesList.splice(updatedDisputeIndex, 1);
        // this.customerNotesList.push(disputeList);
        this.customerNotesList.sort((n1, n2) => n1.Id - n2.Id);
        this.dataSource = new MatTableDataSource(this.customerNotesList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.customerNotesList.length)
        data.push(this.customerNotesList[i]);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.count = this.customerNotesList.length;
  }
}
