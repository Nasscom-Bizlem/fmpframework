import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorisationComponent } from './authorisation.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsRolePermissionComponent } from './settings-role-permission/settings-role-permission.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorisationComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'user', component: SettingsUserComponent },
      { path: 'project', component: SettingsProjectComponent },
      { path: 'group', component: SettingsGroupsComponent },
      { path: 'role', component: SettingsRolePermissionComponent },
      { path: 'details', component: UserDetailComponent },
      { path: '', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
  { path: '**', component: AuthorisationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorisationRoutingModule { }
