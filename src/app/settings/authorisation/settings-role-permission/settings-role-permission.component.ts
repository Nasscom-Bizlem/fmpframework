import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { SettingRoleModel } from '../settings-model/setting-role-model.model';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { Router } from '@angular/router';
import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-settings-role-permission',
  templateUrl: './settings-role-permission.component.html',
  styleUrls: ['./settings-role-permission.component.scss']
})
export class SettingsRolePermissionComponent implements OnInit {

  isRoleSelected = false;
  roleSelectedData: any;

  SettingRoleList: Array<SettingRoleModel> = [];

  constructor(
    private uiService: UiService,
    private dialogService: DialogService,
    private settingsService: AuthorisationService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.uiService.displayedColumns.next('role');
    this.uiService.roleData.subscribe((res) => {
      this.isRoleSelected = res.isRoleClicked;
      this.roleSelectedData = res.roleData.role;
    });
  }
  // tslint:disable-next-line: typedef
  getSelectedRole(event: any) {
    console.log(event);
  }

  openRoleDialog() {

    this.dialogService.openRole().subscribe((res) => {
      //console.log(res);
     // console.log("roleDialogOpen:: "+JSON.stringify(res));
      if (res) {

        this.settingsService
          .addRoleData(res)
          .subscribe((roleresponse) => {
           // console.log("withoutArra:: "+JSON.stringify(roleresponse));
            this.SettingRoleList.push(roleresponse);
           // console.log("savedRoleres:: "+JSON.stringify( this.SettingRoleList));
           // this.router.navigate(['/dashboard/roles']);

          //this.ngOnInit();
         // console.log(this.router.url);
        // this.router.navigateByUrl('/dashboard/roles');
       /* this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };*/

        this.reloadComponent();

          });
      }
    });
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    //this.router.navigate(['/dashboard/roles']);
    this.router.navigate([this.router.url]);
}

}
