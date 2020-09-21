import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorisationRoutingModule } from './authorisation-routing.module';
import { AuthorisationComponent } from './authorisation.component';

import { MatTabsModule } from '@angular/material/tabs';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableGridComponent } from './table-grid/table-grid.component';
import { AdminRolePermissionComponent } from './settings-role-permission/admin-role-permission/admin-role-permission.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [AuthorisationComponent,
    SettingsUserComponent,
    SettingsProjectComponent,
    SettingsRolePermissionComponent,
    SettingsGroupsComponent,
    SettingsTabComponent,
    TableGridComponent,
    AdminRolePermissionComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    AuthorisationRoutingModule
    , SharedModule, MatTabsModule,NgSelectModule
  ]
})
export class AuthorisationModule { }
