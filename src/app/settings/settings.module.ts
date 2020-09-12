import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { SharedModule } from '../shared/shared.module';
import { TableGridComponent } from './table-grid/table-grid.component';
import { AdminRolePermissionComponent } from './settings-role-permission/admin-role-permission/admin-role-permission.component';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsUserComponent,
    SettingsProjectComponent,
    SettingsRolePermissionComponent,
    SettingsGroupsComponent,
    SettingsTabComponent,
    TableGridComponent,
    AdminRolePermissionComponent
  ],
  imports: [CommonModule, SettingsRoutingModule,SharedModule],
})
export class SettingsModule {}
