import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsProjectComponent } from './settings-project/settings-project.component';
import { SettingsGroupsComponent } from './settings-groups/settings-groups.component';
import { SettingsRolePermissionComponent } from '../authorisation/settings-role-permission/settings-role-permission.component';
import { AuthorisationComponent } from '../authorisation/authorisation.component';
import { TeamSpaceComponent } from './team-space/team-space.component';
import { AddPluginComponent} from './add-plugin/add-plugin.component'
import { AllocationComponent} from './allocation/allocation.component';

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
      { path: 'add-plugin', component: AddPluginComponent },
      { path: 'allocation', component: AllocationComponent },
      { path: 'team-space', component: TeamSpaceComponent },      
     

      { path: '', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
  { path: '**', component: AuthorisationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorisationRoutingModule { }
