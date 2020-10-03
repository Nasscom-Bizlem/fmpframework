import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { SetupService } from '../setup.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OAuth, OAuthListModel } from '../setup-model/oauth.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface PeriodicOAuthElement {
  check: boolean;
  icon: string;
  name: string;
  emailAddress: string;
  action: boolean;
}
const OAUTH_ELEMENT_DATA: PeriodicOAuthElement[] = [
  { check: false, icon: 'gmail', name: 'Gmail', emailAddress: 'xyz@abc.com', action: false },
  { check: false, icon: 'outlook', name: 'Outlook', emailAddress: 'xyz@abc.com', action: false },
  { check: true, icon: 'salesforce', name: 'SDFC', emailAddress: 'xyz@abc.com', action: true },
  { check: true, icon: 'gmail', name: 'Gmail', emailAddress: 'xyz@abc.com', action: true }
];

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  deleteMailHost = [];
  showMsg: boolean = false;
  message: any;
  checkBoxChecked: boolean; // or true based on the need

  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  @ViewChild(MatPaginator)
  set paginator(tablePaginator: MatPaginator) {
    if (this.oauthDataSource) {
      this.oauthDataSource.paginator = tablePaginator;
    }
  }

  @ViewChild(MatSort)
  set sort(tablesort: MatSort) {
    if (this.oauthDataSource) {
      this.oauthDataSource.sort = tablesort;
    }
  }

  ngAfterViewInit() {
    if (this.oauthDataSource) {
      this.oauthDataSource.paginator = this.paginator;
      this.oauthDataSource.sort = this.sort;
    }
  }

  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.OAuthList.length)
        data.push(this.OAuthList[i]);
    }
    this.oauthDataSource = new MatTableDataSource(data);
    this.oauthDataSource.paginator = this.paginator;
    this.oauthDataSource.sort = this.sort;
    this.count = this.OAuthList.length;
  }

  constructor(private dialogService: DialogService,
    private setupService: SetupService,
    private datePipe: DatePipe,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getOAuthList();
  }

  oauthDisplayedColumns: string[] = ['check', 'icon', 'name', 'emailAddress', 'action'];
  // oauthDataSource = OAUTH_ELEMENT_DATA;
  oauthDataSource: MatTableDataSource<OAuth>;
  OAuthList: Array<OAuth> = [];

  openOauthDialog() {
    this.dialogService.addOauthDialog().subscribe((res) => {
      // console.log("insideAdd:: "+res);
      if (res) {
        if (res.ResponseCode == 1) {
          // console.log("openOauthDialog:: " + JSON.stringify(res));
          this.getOAuthList();
        }
        /* this.setupService.addOAuth(res).subscribe((OAuthresponse) => {
           console.log("OAuthList:: " + JSON.stringify(OAuthresponse));
         
        }); */
      }
    });
  }

  getOAuthList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.setupService
      .getOAuthList(customer.CustomerId)
      .subscribe((res) => {
        //console.log("getOAuthList:: " + JSON.stringify(res));
        this.OAuthList = res.oAuthsList;
        this.count = this.OAuthList.length;
        this.oauthDataSource = new MatTableDataSource(this.OAuthList);
        this.oauthDataSource.paginator = this.paginator;
        this.oauthDataSource.sort = this.sort;
      });
  }

  /*  openOauthDialog(){
       this.dialogService.addOauthDialog('Add', []).subscribe((res) => {
         console.log(res);
       });
   } */

  deleteOAuthData(element: any) {
    this.setupService.deleteOAuth(element).subscribe((oauthresponse) => {
      console.log("deleteapires:  " + JSON.stringify(oauthresponse));
      let updatedNoteIndex;
      updatedNoteIndex = this.OAuthList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedNoteIndex > -1) {
        this.OAuthList.splice(updatedNoteIndex, 1);
        this.OAuthList.sort((n1, n2) => n1.Id - n2.Id);
        this.oauthDataSource = new MatTableDataSource(this.OAuthList);
        this.oauthDataSource.paginator = this.paginator;
        this.oauthDataSource.sort = this.sort;
        this.count = this.OAuthList.length;
      }
    });
  }

  dataEvent: any;
  onCheckboxChange(e, element: any) {
    if (e.checked) {
      this.showMsg = false;
      this.dataEvent = e;
      console.log("e:: " + e);
      this.deleteMailHost.push(element);
      // console.log("Checked:: " + JSON.stringify(this.deleteMailHost));

    } else {
      console.log("unchecked:: ");
      var index = this.deleteMailHost.indexOf(element);
      this.deleteMailHost.splice(index, 1);
      //console.log("uncheckedRemovedafter:: " + JSON.stringify(this.deleteMailHost));
    }
  }

  deleteOAuthDialog() {
    if (this.deleteMailHost.length > 0) {
      this.showMsg = false;
      this.message = '';
      this.dialogService.delete('Delete').subscribe((res) => {
        //console.log("deletedialogue:: " + JSON.stringify(res));
        if (res.delete == true) {
          //console.log("deletedialogueInside:: " + JSON.stringify(res));
          this.deleteOAuthGlobally();
          this.deleteMailHost = [];
        } else {
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

  deleteOAuthGlobally() {
    if (this.deleteMailHost.length > 0) {
      for (let i = 0; i < this.deleteMailHost.length; i++) {
        let insideJsonObj = this.deleteMailHost[i];
        // console.log("deleteOAuthGlobally:: " + JSON.stringify(insideJsonObj));

        let obj = new OAuthListModel();
        obj.FilePath = insideJsonObj.FilePath;
        obj.Id = insideJsonObj.Id;
        obj.Name = insideJsonObj.Name;
        obj.Url = insideJsonObj.Url;
        let dateFieldValue = this.datePipe.transform(
          insideJsonObj.AtDate,
          'yyyy-MM-dd HH:mm:ss'
        );
        obj.AtDate = dateFieldValue;
        obj.UserId = insideJsonObj.UserId;

        this.deleteOAuthData(obj);
      }
    }
  }

  editOAuthData(element: any) {
    this.dialogService.addOauthDialog(element).subscribe((res) => {

      if (res == false) {
        this.handleSelection(this.dataEvent);
      }

      if (res) {
        if (res.ResponseCode == 1) {
          // console.log("openOauthDialog:: " + JSON.stringify(res));
          this.getOAuthList();
        }

        /*  this.setupService
           .editOAuth(res)
           .subscribe((oauthresponse) => {
             // console.log("oauthresponse:: " + JSON.stringify(oauthresponse));
             let updatedNoteIndex;
             updatedNoteIndex = this.OAuthList.findIndex(
               (r) => r.Id === oauthresponse.oAuthsList.Id
             );
             if (updatedNoteIndex > -1) {
               let noteList = oauthresponse.oAuthsList;
               this.OAuthList.splice(updatedNoteIndex, 1);
               this.OAuthList.push(noteList);
               this.OAuthList.sort((n1, n2) => n1.Id - n2.Id);
               this.oauthDataSource = new MatTableDataSource(
                 this.OAuthList
               );
               this.oauthDataSource.paginator = this.paginator;
               this.oauthDataSource.sort = this.sort;
             }
           }); */
      }
    });
  }

  editOAuthGlobally() {
    if (this.deleteMailHost.length == 1) {
      // console.log("one checkbox selected :: ");
      this.showMsg = false;
      this.message = '';

      for (let i = 0; i < this.deleteMailHost.length; i++) {
        let insideJsonObj = this.deleteMailHost[i];
        // console.log("editMailhostGlobally:: " + JSON.stringify(insideJsonObj));
        this.editOAuthData(insideJsonObj);
        this.deleteMailHost = [];
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

  openViewOauthDialog(element: any) {
    this.dialogService.viewOAuthDialog(element).subscribe((res) => {
      console.log("resView:: " + res);
      if (res == false) {
        this.handleSelection(this.dataEvent);
      }

    });
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

  viewOAuthGlobally() {
    if (this.deleteMailHost.length > 0) {
      // console.log("viewOAuthGlobally:: " + JSON.stringify(this.deleteMailHost));
      this.openViewOauthDialog(this.deleteMailHost);
      this.deleteMailHost = [];
    } else {
      this.showMsg = true;
      this.message = 'Please select any checkbox.';

      setTimeout(() => {
        this.showMsg = false;
        this.message = '';
      }, 3000);
    }
  }



}
