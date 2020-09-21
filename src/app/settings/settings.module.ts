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
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { EventActionComponent } from './event-action/event-action.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { PaymentsComponent } from './payments/payments.component';
import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AddPluginComponent} from './add-plugin/add-plugin.component';
import { AllocationComponent } from './allocation/allocation.component';
import { TeamSpaceComponent } from './team-space/team-space.component';
@NgModule({
  declarations: [
    SettingsComponent,
    SettingsUserComponent,
    SettingsProjectComponent,
    SettingsRolePermissionComponent,
    SettingsGroupsComponent,
    SettingsTabComponent,
    TableGridComponent,
    AdminRolePermissionComponent,
    MyAccountsComponent,
    AuthorisationComponent,
    EventActionComponent,
    WebServicesComponent,
    DataSourceComponent,
    ImportExportComponent,
    PaymentsComponent,
    OtherSettingsComponent,
    AddPluginComponent,
    AllocationComponent,
    TeamSpaceComponent
  ],
  imports: [CommonModule, SettingsRoutingModule,SharedModule,MatTableModule,MaterialModule,LayoutModule],
})
export class SettingsModule {}
