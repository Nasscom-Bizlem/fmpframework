import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
// import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { MaterialModule } from '../../shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { AuthorisationRoutingModule } from './authorisation-routing.module';
import { AdminRolePermissionComponent } from './settings-role-permission/admin-role-permission/admin-role-permission.component';
import { TableGridComponent } from '../table-grid/table-grid.component';

@NgModule({
    declarations: [
      SettingsUserComponent,
      SettingsProjectComponent,
      SettingsRolePermissionComponent,
      SettingsGroupsComponent,
    //   SettingsTabComponent,
      AdminRolePermissionComponent,
      TableGridComponent
    ],
    imports: [CommonModule, AuthorisationRoutingModule,SharedModule,MatTableModule,MaterialModule,LayoutModule],
  })
export class AuthorisationModule {}
