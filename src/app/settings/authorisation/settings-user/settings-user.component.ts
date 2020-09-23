import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { Router } from '@angular/router';
import { SettingUserModel } from '../settings-model/setting-user-model.model';
import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

  SettingUserList: Array<SettingUserModel> = [];

  constructor(
    private uiService: UiService,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService,
    private settingsService: AuthorisationService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.uiService.displayedColumns.next('user');
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  openNewUser() {
    //this.dialogService.openNewUser('New User', []).subscribe((res) => {
      this.dialogService.openNewUser().subscribe((res) => {
       // console.log("resuser:: "+res);
        if (res) {
          //console.log("resuserInside:: "+res);
          this.settingsService
          .addUserData(res)
          .subscribe((userresponse) => {
            this.SettingUserList.push(userresponse);
            console.log("savedUserres:: "+JSON.stringify( userresponse));
             this.reloadComponent();
             
          });
        }
    });
    //this.changeDetectorRef.detectChanges();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    //this.router.navigate(['/dashboard/roles']);
    this.router.navigate([this.router.url]);
}



}
