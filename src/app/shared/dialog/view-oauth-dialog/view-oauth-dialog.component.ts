import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { DialogService } from '../dialog.service';
import { SetupService } from 'src/app/settings/setup/setup.service';
import { MatTableDataSource } from '@angular/material/table';
import { OAuth } from 'src/app/settings/setup/setup-model/oauth.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-view-oauth-dialog',
  templateUrl: './view-oauth-dialog.component.html',
  styleUrls: ['./view-oauth-dialog.component.scss']
})
export class ViewOauthDialogComponent implements OnInit {

  titlesOAuth: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewOauthDialogComponent>,
    //private dialogService: DialogService,
    private setupService: SetupService,
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

   // console.log("modelData:: " + JSON.stringify(this.data.modeldata));

    if (!!this.data.modeldata) {
      this.titlesOAuth = "View";
      this.getOAuthList(this.data.modeldata);
    } else {

    }

    // this.getOAuthList();
  }

  oauthDisplayedColumns: string[] = ['icon', 'name', 'emailAddress', 'action'];
  ViewoauthDataSource: MatTableDataSource<OAuth>;
  OAuthList: Array<OAuth> = [];

  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  @ViewChild(MatPaginator)
  set paginator(tablePaginator: MatPaginator) {
    if (this.ViewoauthDataSource) {
      this.ViewoauthDataSource.paginator = tablePaginator;
    }
  }

  @ViewChild(MatSort)
  set sort(tablesort: MatSort) {
    if (this.ViewoauthDataSource) {
      this.ViewoauthDataSource.sort = tablesort;
    }
  }

  ngAfterViewInit() {
    if (this.ViewoauthDataSource) {
      this.ViewoauthDataSource.paginator = this.paginator;
      this.ViewoauthDataSource.sort = this.sort;
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
    this.ViewoauthDataSource = new MatTableDataSource(data);
    this.ViewoauthDataSource.paginator = this.paginator;
    this.ViewoauthDataSource.sort = this.sort;
    this.count = this.OAuthList.length;
  }

  getOAuthList(data: any) {
    this.OAuthList = data;
    this.count = this.OAuthList.length;
    this.ViewoauthDataSource = new MatTableDataSource(this.OAuthList);
    this.ViewoauthDataSource.paginator = this.paginator;
    this.ViewoauthDataSource.sort = this.sort;
  }

  /* getOAuthList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.setupService
      .getOAuthList(customer.CustomerId)
      .subscribe((res) => {
        //console.log("getOAuthList:: " + JSON.stringify(res));
        this.OAuthList = res.oAuthsList;
        this.count = this.OAuthList.length;
        this.ViewoauthDataSource = new MatTableDataSource(this.OAuthList);
        this.ViewoauthDataSource.paginator = this.paginator;
        this.ViewoauthDataSource.sort = this.sort;
      });
  } */


}
