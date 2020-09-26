import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

export interface PeriodicOAuthElement {
  check: boolean;
  icon: string;
  name: string;
  emailAddress: string;
  action: boolean;
}
const OAUTH_ELEMENT_DATA: PeriodicOAuthElement[] = [
  { check: false, icon: 'gmail', name: 'Gmail', emailAddress: 'xyz@abc.com', action:false },
  { check: false, icon: 'outlook', name: 'Outlook', emailAddress: 'xyz@abc.com', action:false },
  { check: true, icon: 'salesforce', name: 'SDFC', emailAddress: 'xyz@abc.com', action:true },
  { check: true, icon: 'gmail', name: 'Gmail', emailAddress: 'xyz@abc.com', action:true }
];

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  oauthDisplayedColumns: string[] = ['check', 'icon', 'name', 'emailAddress', 'action'];
  oauthDataSource = OAUTH_ELEMENT_DATA;

  openOauthDialog(){
      this.dialogService.addOauthDialog('Add', []).subscribe((res) => {
        console.log(res);
      });
  }

}
