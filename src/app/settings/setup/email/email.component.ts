import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddEmail, oAuthsData } from 'src/app/shared/dialog/add-email-dialog/add-email.model';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import {EmailServiceService} from './email-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
//import {formatDate } from '@angular/common';
import {formatDate } from '@angular/common';

export interface PeriodicElement {
  check: boolean;
  username: string;
  oauth: string;
  hostname: string;
  password: string;
  action: boolean;
}

export class Dumdata {
  Id:number;
  FilePath:string;
  Url:string;
  Name:string;
  UserId:string;
  AtDate:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {check: false, username: 'Rahul', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkw', action: true},
  {check: false, username: 'Ram', oauth: 'Absdcslkcn2131', hostname: 'Mr. Marc', password: 'Hncwkwkl', action: true},
  {check: false, username: 'Jay', oauth: 'Absdcslkcn2131', hostname: 'Mr. James', password: 'Hncwkwklk', action: true},
  {check: false, username: 'Raj', oauth: 'Absdcslkcn2131', hostname: 'Mr. David', password: 'Hncwkwklfe', action: true},
  {check: false, username: 'Sam', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkwklkjd', action: true},
];

const dumdata:Dumdata[]=[{Id:1,FilePath:"http://199.217.112.145:8089/fma/OAuthDocuments/7694278b-bb0e-4af3-b346-48050b4276b9/chrysanthemum.jpg",Url:"developer",Name:"developer team",UserId:"cus1001",AtDate:"Sep 29, 2020 5:18:44 PM"},
  {Id:2,FilePath:"http://199.217.112.145:8089/fma/OAuthDocuments/05beeaaa-3e8c-47e3-ad68-671a7610dd55/chrysanthemum.jpg",Url:"developer",Name:"developer team",UserId:"cus1001",AtDate:"Sep 29, 2020 5:21:22 PM"}
]


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit, AfterViewInit {


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

  emailSettingsList: Array<AddEmail> = [];
  dataSource: MatTableDataSource<AddEmail>;
  date: Date = null;
  selection = new SelectionModel<AddEmail>(true, []);

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

checkCheckBox:boolean;
globalElement;



 editFromabove() {

  let checkBoxValue;
  if(this.checkCheckBox){
    checkBoxValue="YES";
     console.log("checkBoxValueIf:: "+checkBoxValue);
     console.log("this.globalElementIf:: "+JSON.stringify(this.globalElement));
     this.dialogService.addEmailDialog(this.globalElement,[]).subscribe((res) => {
       console.log("resAboveEdit:: "+res);
      if (res) {

    }
  });
  }else{
    console.log("no");
    checkBoxValue="NO";
    console.log("checkBoxValueElse:: "+checkBoxValue);
  }

} 


  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];
  constructor(
    private dialogService: DialogService,
    private emailServiceService:EmailServiceService,
    ) { }

    ngAfterViewInit() {
      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }

  ngOnInit(): void {
    this.getemailSettingsList();
  }

  deleteemailSetting = [];
  showMsg: boolean = false;
  message: any;

  title = 'Email';
  displayedColumns: string[] = ['check', 'username', 'oauth', 'hostname', 'password', 'action'];
  //dataSource = ELEMENT_DATA;


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
  openEmailDialog() {
    this.dialogService.addEmailDialog('Add', []).subscribe((res) => {
      if (res) {
        console.log("openEmailList:: "+JSON.stringify(res));
         this.emailServiceService
           .addemailSettingList(res)
           .subscribe((noteresponse) => {
            console.log("noteresponse:: "+JSON.stringify(noteresponse));
            //  this.emailSettingsList.push(noteresponse);
            //  console.log(JSON.stringify(this.emailSettingsList));

             this.emailSettingsList.unshift(noteresponse.emailSetting);
             this.count = this.emailSettingsList.length;
             
             this.dataSource = new MatTableDataSource(this.emailSettingsList);
             this.dataSource.paginator = this.paginator;
             this.dataSource.sort = this.sort;
           });
           
       }
    });
  }

  getemailSettingsList() {
    console.log("getemailSettingsList called");
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    console.log("customer.CustomerId "+customer.CustomerId);

    this.emailServiceService
      .getemailSettingList(customer.CustomerId)
      .subscribe((res) => {
        console.log("resGetNoteList:: "+JSON.stringify(res));
        //console.log(res);
        console.log(this.emailSettingsList);
        if (res.hasOwnProperty("emailSettings")) {
        this.emailSettingsList = res.emailSettings;
        }
        this.count = this.emailSettingsList.length;
        
        this.dataSource = new MatTableDataSource(this.emailSettingsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


  onCheckboxChange(e, element: any) {
    if (e.checked) {
      this.showMsg = false;
      this.deleteemailSetting.push(element);
     console.log("Checked:: " + JSON.stringify(this.deleteemailSetting));
    } else {
      console.log("unchecked:: ");
      var index = this.deleteemailSetting.indexOf(element);
      this.deleteemailSetting.splice(index, 1);
      console.log("uncheckedRemovedafter:: " + JSON.stringify(this.deleteemailSetting));
    }
  }


  editemailsettingGlobally() {
    if (this.deleteemailSetting.length == 1) {
     // console.log("one checkbox selected :: ");
      this.showMsg = false;
      this.message = '';

      for (let i = 0; i < this.deleteemailSetting.length; i++) {
        let insideJsonObj = this.deleteemailSetting[i];
        // console.log("editMailhostGlobally:: " + JSON.stringify(insideJsonObj));
         this.editEmailsettingData(insideJsonObj);
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

  editEmailsettingData(element: any) {
    this.dialogService.addEmailDialog('Edit',element).subscribe((res) => {
      if (res) {
         this.emailServiceService
          .editemailSetting(res)
          .subscribe((response) => {
            console.log("mailhostresponseEdit:: " + JSON.stringify(response));
            let updatedNoteIndex;
            console.log("emailSettingsList "+this.emailSettingsList);
            console.log("response.emailSetting.Id "+response.emailSetting.Id);
            updatedNoteIndex = this.emailSettingsList.findIndex(
              (r) => r.Id === response.emailSetting.Id
            );
            if (updatedNoteIndex > -1) {
              let noteList = response.emailSetting;
              console.log("noteList "+noteList);
              this.emailSettingsList.splice(updatedNoteIndex, 1);
              this.emailSettingsList.push(noteList);
              this.emailSettingsList.sort((n1, n2) => n1.Id - n2.Id);
              this.dataSource = new MatTableDataSource(
                this.emailSettingsList
              );
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              this.deleteemailSetting=[];
            }
          }); 
      }
    });
  }

  deleteemailSettingDialog() {
    if (this.deleteemailSetting.length > 0) {
      this.showMsg = false;
      this.message = '';
      this.dialogService.delete('Delete').subscribe((res) => {
        //console.log("deletedialogue:: " + JSON.stringify(res));
        if (res.delete == true) {
          //console.log("deletedialogueInside:: " + JSON.stringify(res));
          this.deleteemailsettingGlobally();
        }
      });
    } else {
      // console.log("select checkbox :: ");
      this.showMsg = true;
      this.message = 'Please select checkbox to delete row.';

      setTimeout(() => {
        this.showMsg = false;
        this.message = '';
      }, 5000);

    }
  }

  deleteemailsettingGlobally() {
    if (this.deleteemailSetting.length > 0) {
      for (let i = 0; i < this.deleteemailSetting.length; i++) {
        let insideJsonObj = this.deleteemailSetting[i];
        // console.log("deleteMailhostGlobally:: " + JSON.stringify(insideJsonObj));
        this.deletEmailSettingData(insideJsonObj);
      }
    }
  }
  deletEmailSettingData(element: any) {
    // deleteMailHostData(element: MailHostModel) {
    this.emailServiceService.deleteemailSetting(element).subscribe((response) => {
      console.log("deleteapires:  " + JSON.stringify(response));
      let updatedNoteIndex;
      updatedNoteIndex = this.emailSettingsList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedNoteIndex > -1) {
        this.emailSettingsList.splice(updatedNoteIndex, 1);
        this.emailSettingsList.sort((n1, n2) => n1.Id - n2.Id);
        this.dataSource = new MatTableDataSource(this.emailSettingsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.count = this.emailSettingsList.length;
        this.deleteemailSetting=[];
      }
    });
  }

 
pageEvent(event) {
  let data = [];
  this.pageSize = event.pageSize;
  let startIndx = event.pageIndex * this.pageSize;
  let endIndx = startIndx + this.pageSize;
  for (var i = startIndx; i < endIndx; i++) {
    if (i < this.getemailSettingsList.length)
      data.push(this.getemailSettingsList[i]);
  }
  this.dataSource = new MatTableDataSource(data);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.count = this.getemailSettingsList.length;
}





}