import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { SetupService } from '../setup.service';
import { MailHostModel } from '../setup-model/mail-host-model.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface PeriodicMailhostElement {
  check: boolean;
  user: string;
  outboundMail: string;
  mailLimit: number;
  sms: string;
  smsLimit: number;
  whatsapp: string;
  whatsappLimit: number;
  action: boolean;
}

const MAILHOST_ELEMENT_DATA: PeriodicMailhostElement[] = [
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null, action: false },
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null, action: false },
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null, action: false },
];

@Component({
  selector: 'app-mailhost',
  templateUrl: './mailhost.component.html',
  styleUrls: ['./mailhost.component.scss']
})
export class MailhostComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private setupService: SetupService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getMailHostList();
  }

  deleteMailHost = [];
  showMsg: boolean = false;
  message: any;
  checkBoxChecked: boolean; // or true based on the need

  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  @ViewChild(MatPaginator)
  set paginator(tablePaginator: MatPaginator) {
    if (this.mailhostDataSource) {
      this.mailhostDataSource.paginator = tablePaginator;
    }
  }

  @ViewChild(MatSort)
  set sort(tablesort: MatSort) {
    if (this.mailhostDataSource) {
      this.mailhostDataSource.sort = tablesort;
    }
  }

  ngAfterViewInit() {
    if (this.mailhostDataSource) {
      this.mailhostDataSource.paginator = this.paginator;
      this.mailhostDataSource.sort = this.sort;
    }
  }

  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.mailHostList.length)
        data.push(this.mailHostList[i]);
    }
    this.mailhostDataSource = new MatTableDataSource(data);
    this.mailhostDataSource.paginator = this.paginator;
    this.mailhostDataSource.sort = this.sort;
    this.count = this.mailHostList.length;
  }

  title = 'Mailhost';
  mailhostDisplayedColumns: string[] = ['check', 'user', 'outboundMail', 'mailLimit', 'sms', 'smsLimit', 'whatsapp', 'whatsappLimit', 'action'];
  //mailhostDataSource = MAILHOST_ELEMENT_DATA;
  mailhostDataSource: MatTableDataSource<MailHostModel>;

  mailHostList: Array<MailHostModel> = [];

  /*  openMailhostDialog(){
     this.dialogService.addMailhostDialog('Add', []).subscribe((res) => {
       console.log(res);
     });
 } */

  openMailhostDialog() {
    this.dialogService.addMailhostDialog().subscribe((res) => {
      if (res) {
        this.setupService.addMailHost(res).subscribe((mailhostresponse) => {
          // console.log("MailhostList:: " + JSON.stringify(mailhostresponse));
          this.mailHostList.unshift(mailhostresponse.mailhost);
          this.count = this.mailHostList.length;
          this.mailhostDataSource = new MatTableDataSource(this.mailHostList);
          this.mailhostDataSource.paginator = this.paginator;
          this.mailhostDataSource.sort = this.sort;
        });
      }
    });
  }

  getMailHostList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.setupService
      .getMailHostList(customer.CustomerId)
      .subscribe((res) => {
        // console.log(res);
        this.mailHostList = res.mailHosts;
        this.count = this.mailHostList.length;
        this.mailhostDataSource = new MatTableDataSource(this.mailHostList);
        this.mailhostDataSource.paginator = this.paginator;
        this.mailhostDataSource.sort = this.sort;
      });
  }

  deleteMailHostData(element: any) {
    // deleteMailHostData(element: MailHostModel) {
    this.setupService.deleteMailHost(element).subscribe((mailhostresponse) => {
      console.log("deleteapires:  " + JSON.stringify(mailhostresponse));
      let updatedNoteIndex;
      updatedNoteIndex = this.mailHostList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedNoteIndex > -1) {
        this.mailHostList.splice(updatedNoteIndex, 1);
        this.mailHostList.sort((n1, n2) => n1.Id - n2.Id);
        this.mailhostDataSource = new MatTableDataSource(this.mailHostList);
        this.mailhostDataSource.paginator = this.paginator;
        this.mailhostDataSource.sort = this.sort;
        this.count = this.mailHostList.length;
      }
    });
  }

  dataEvent: any;
  onCheckboxChange(e, element: any) {
    if (e.checked) {
      this.showMsg = false;
      this.dataEvent = e;
      // console.log("e:: " + e);
      // console.log("element:: " + JSON.stringify(element));

      this.deleteMailHost.push(element);
     // console.log("Checked:: " + JSON.stringify(this.deleteMailHost));

      /* //console.log("e:: "+e);
     // console.log(e.source._elementRef.nativeElement);
      let target=e.source._elementRef.nativeElement;
      console.log("text:: "+target.innerText.trim());
      console.log("checked:: "+e.checked); */ //find id,name,attribute search later

    } else {
      console.log("unchecked:: ");
      var index = this.deleteMailHost.indexOf(element);
      this.deleteMailHost.splice(index, 1);
      //console.log("uncheckedRemovedafter:: " + JSON.stringify(this.deleteMailHost));
    }
  }

  deleteMailHostDialog() {
    if (this.deleteMailHost.length > 0) {
      this.showMsg = false;
      this.message = '';
      this.dialogService.delete('Delete').subscribe((res) => {
        //console.log("deletedialogue:: " + JSON.stringify(res));
        if (res.delete == true) {
          //console.log("deletedialogueInside:: " + JSON.stringify(res));
          this.deleteMailhostGlobally();
          this.deleteMailHost = [];
        }else {
          this.handleSelection(this.dataEvent);
          this.deleteMailHost = [];
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

  deleteMailhostGlobally() {
    if (this.deleteMailHost.length > 0) {
      for (let i = 0; i < this.deleteMailHost.length; i++) {
        let insideJsonObj = this.deleteMailHost[i];
        // console.log("deleteMailhostGlobally:: " + JSON.stringify(insideJsonObj));
        this.deleteMailHostData(insideJsonObj);
      }
    }
  }

  editMailHostData(element: any) {
    this.dialogService.addMailhostDialog(element).subscribe((res) => {
      if (res == false) {
        this.handleSelection(this.dataEvent);
      }
      if (res) {
         this.setupService
          .editMailHost(res)
          .subscribe((mailhostresponse) => {
           // console.log("mailhostresponseEdit:: " + JSON.stringify(mailhostresponse));
            let updatedNoteIndex;
            updatedNoteIndex = this.mailHostList.findIndex(
              (r) => r.Id === mailhostresponse.mailHost.Id
            );
            if (updatedNoteIndex > -1) {
              let noteList = mailhostresponse.mailHost;
              this.mailHostList.splice(updatedNoteIndex, 1);
              this.mailHostList.push(noteList);
              this.mailHostList.sort((n1, n2) => n1.Id - n2.Id);
              this.mailhostDataSource = new MatTableDataSource(
                this.mailHostList
              );
              this.mailhostDataSource.paginator = this.paginator;
              this.mailhostDataSource.sort = this.sort;
            }
          }); 
      }
    });
  }

  editMailhostGlobally() {
    if (this.deleteMailHost.length == 1) {
     // console.log("one checkbox selected :: ");
      this.showMsg = false;
      this.message = '';

      for (let i = 0; i < this.deleteMailHost.length; i++) {
        let insideJsonObj = this.deleteMailHost[i];
        // console.log("editMailhostGlobally:: " + JSON.stringify(insideJsonObj));
         this.editMailHostData(insideJsonObj);
         this.deleteMailHost=[];
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

  handleSelection(event: any) {
    if (event.checked) {
      this.checkBoxChecked = false;
      this.dataEvent = null;
      this.deleteMailHost = [];
      this.router.navigate([this.router.url])
        .then(() => {
          window.location.reload();
        });
    } else {
      this.checkBoxChecked = false;
      this.dataEvent = null;
      this.deleteMailHost = [];
    }
  }



}
