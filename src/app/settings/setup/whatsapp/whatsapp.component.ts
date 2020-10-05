import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { WhatsappSmsService} from './whatsapp-sms.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
//import {formatDate } from '@angular/common';
import {formatDate } from '@angular/common';
import { WhatsupSms } from 'src/app/shared/dialog/edit-whatsapp-dialog/whatsup-sms.model';
export interface PeriodicMessageElement {
  check: boolean;
  accountType: string;
  accountName: string;
  typeV: string;
  number: number;
  campaign: string;
  routeId: string;
  action: boolean;
}

const MESSAGE_ELEMENT_DATA: PeriodicMessageElement[] = [
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'Whatsapp', number: 918799879977, campaign:'-', routeId: '-', action: false },
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'SMS', number: 918799459977, campaign:'-', routeId: '-', action: false },
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'SMS', number: 918799877977, campaign:'-', routeId: '-', action: false },
];

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit , AfterViewInit{
  selectedRowIndex:any;

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

  WhatsupSmsList: Array<WhatsupSms> = [];
  dataSource: MatTableDataSource<WhatsupSms>;
  date: Date = null;
  selection = new SelectionModel<WhatsupSms>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
   // console.log("value:: "+this.selection.selected.values);

   //this.selection.selected.forEach(row => this.selection.select(row));
    // console.log("two:: "+this.selection.selected.values.name.toString);
 

    const numRows = this.dataSource.data.length;
    //console.log("numSelected:: "+numSelected);
    //console.log("numRows:: "+numRows);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
        console.log("select row:: "+this.dataSource.data.length);
  }

  selectRow(row) {
    console.log(row);
}



pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];


  constructor(
    private dialogService: DialogService,
    private whatsappSmsService: WhatsappSmsService) { }
    ngAfterViewInit() {
      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }

  ngOnInit(): void {
    this.getWhatsappSmsList();
  }

  title = 'WhatsApp';
  messageDisplayedColumns: string[] = [ 'check', 'accountType', 'accountName', 'typeV', 'number', 'campaign', 'routeId', 'action'];
  //messageDataSource = MESSAGE_ELEMENT_DATA;
  deleteWhatsappSms = [];
  showMsg: boolean = false;
  message: any;
  
  highlight(row){
    this.selectedRowIndex=row.position;
    console.log("row:: "+row);
    console.log("rowlist:: "+JSON.stringify(row));
  }

  gana(element){
    //this.dataSource.data.forEach(row => this.selection.select(row));
    if(this.selection.isSelected(element)){
      console.log("element:: "+element);
      //this.selection.clear;
    }
     
   
    
  }
  getWhatsappSmsList() {
    console.log("getWhatsappSmsList called ");
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.whatsappSmsService
      .getWhatsappSmsList(customer.CustomerId)
      .subscribe((res) => {
        console.log(res);
        this.WhatsupSmsList = res.whatsupSmsList;
        this.count = this.WhatsupSmsList.length;
        this.dataSource = new MatTableDataSource(this.WhatsupSmsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  openwhatsapp() {
    this.dialogService.openwhatsappDialog('Add', []).subscribe((res) => {
      console.log(res);
      if (res) {
        console.log("openSettingDialog:: "+JSON.stringify(res));
         this.whatsappSmsService
           .addWhatsappSmsList(res)
           .subscribe((noteresponse) => {
            console.log("noteresponse:: "+JSON.stringify(noteresponse));
            this.WhatsupSmsList.unshift(noteresponse.whatsupSms);
             this.count = this.WhatsupSmsList.length;
             this.dataSource = new MatTableDataSource(this.WhatsupSmsList);
             this.dataSource.paginator = this.paginator;
             this.dataSource.sort = this.sort;
            });
       }
      });
    }


    
  

  onCheckboxChange(e, element: any) {
    if (e.checked) {
      this.showMsg = false;
      // console.log("e:: " + e);
       console.log("element:: " + JSON.stringify(element));

      this.deleteWhatsappSms.push(element);
      console.log("Checked:: " + JSON.stringify(this.deleteWhatsappSms));
    } else {
      console.log("unchecked:: ");
      var index = this.deleteWhatsappSms.indexOf(element);
      this.deleteWhatsappSms.splice(index, 1);
      //console.log("uncheckedRemovedafter:: " + JSON.stringify(this.deleteMailHost));
    }
  }

  editWhatsappsmsData(element: any) {
    this.dialogService.openwhatsappDialog('Edit',element).subscribe((res) => {
      if (res) {
         this.whatsappSmsService
          .editWhatsappSms(res)
          .subscribe((response) => {
           console.log("response:: " + JSON.stringify(response));
            let updatedNoteIndex;
            updatedNoteIndex = this.WhatsupSmsList.findIndex(
              (r) => r.Id === response.dbWhatsupSms.Id
            );
            if (updatedNoteIndex > -1) {
              let noteList = response.dbWhatsupSms;
              this.WhatsupSmsList.splice(updatedNoteIndex, 1);
              this.WhatsupSmsList.push(noteList);
              this.WhatsupSmsList.sort((n1, n2) => n1.Id - n2.Id);
              this.dataSource = new MatTableDataSource(
                this.WhatsupSmsList
              );
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              this.deleteWhatsappSms = [];

            }
          }); 
      }
    });

  }

   
  editwhatsappsmsGlobally() {
    if (this.deleteWhatsappSms.length == 1) {
     // console.log("one checkbox selected :: ");
      this.showMsg = false;
      this.message = '';

      for (let i = 0; i < this.deleteWhatsappSms.length; i++) {
        let insideJsonObj = this.deleteWhatsappSms[i];
        // console.log("editMailhostGlobally:: " + JSON.stringify(insideJsonObj));
         this.editWhatsappsmsData(insideJsonObj);
      }
    } else {
      //console.log("more than one checkbox you have selected select one checkbox at a time :: ");
      this.showMsg = true;
      this.message = 'Please select one checkbox at a time.';

      setTimeout(() => {
        this.showMsg = false;
        this.message = '';
      }, 5000);
    }
  }



  
  deletewhatsappsmsDialog() {
    if (this.deleteWhatsappSms.length > 0) {
      for (let i = 0; i < this.deleteWhatsappSms.length; i++) {
        let insideJsonObj = this.deleteWhatsappSms[i];
        // console.log("deleteMailhostGlobally:: " + JSON.stringify(insideJsonObj));
        this.deleteWhatsappsmsData(insideJsonObj);
      }
    }
  }

  deleteWhatsappsmsData(element: any) {
    // deleteMailHostData(element: MailHostModel) {
    this.whatsappSmsService.deleteWhatsappSms(element).subscribe((response) => {
      console.log("deleteapires:  " + JSON.stringify(response));
      let updatedNoteIndex;
      updatedNoteIndex = this.WhatsupSmsList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedNoteIndex > -1) {
        this.WhatsupSmsList.splice(updatedNoteIndex, 1);
        this.WhatsupSmsList.sort((n1, n2) => n1.Id - n2.Id);
        this.dataSource = new MatTableDataSource(this.WhatsupSmsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.count = this.WhatsupSmsList.length;
      }
    });
    this.deleteWhatsappSms = [];
  }





  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.WhatsupSmsList.length)
        data.push(this.WhatsupSmsList[i]);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.count = this.WhatsupSmsList.length;
  }

   
}