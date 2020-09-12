import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';

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
      { path: '', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
  { path: '**', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
