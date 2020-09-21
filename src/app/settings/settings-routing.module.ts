import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { EventActionComponent } from './event-action/event-action.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { PaymentsComponent } from './payments/payments.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { AddPluginComponent } from './add-plugin/add-plugin.component';
import { TeamSpaceComponent } from './team-space/team-space.component';
import { AllocationComponent } from './allocation/allocation.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'user', component: SettingsUserComponent },
      { path: 'project', component: SettingsProjectComponent },
      { path: 'group', component: SettingsGroupsComponent },
      { path: 'role', component: SettingsRolePermissionComponent },
      { path: 'add-plugin', component: AddPluginComponent },
      { path: 'allocation', component: AllocationComponent },
      { path: 'team-space', component: TeamSpaceComponent },

      { path: 'authorisation', component: AuthorisationComponent },
      { path: 'data-source', component: DataSourceComponent },
      { path: 'event-action', component: EventActionComponent },
      { path: 'import-export', component: ImportExportComponent },
      { path: 'my-accounts', component: MyAccountsComponent },
      { path: 'other-settings', component: OtherSettingsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'web-services', component: WebServicesComponent },

      { path: '', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
  { path: '**', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
