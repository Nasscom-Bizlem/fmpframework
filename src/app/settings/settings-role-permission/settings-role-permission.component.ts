import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-settings-role-permission',
  templateUrl: './settings-role-permission.component.html',
  styleUrls: ['./settings-role-permission.component.scss']
})
export class SettingsRolePermissionComponent implements OnInit {

  isRoleSelected = false;
  roleSelectedData: any;
  constructor(private uiService: UiService) {}

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
}
