import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionPackageComponent } from './action-package/action-package.component';
import { ActionComponent } from './action/action.component';
import { EventActionComponent } from './event-action.component';
import { EventPackageComponent } from './event-package/event-package.component';
import { EventComponent } from './event/event.component';
import { ManageEventActionComponent } from './manage-event-action/manage-event-action.component';
import { SaveVersionComponent } from './save-version/save-version.component';

const routes: Routes = [
  {
      path: '',
      component: EventActionComponent,
      // resolve: [],
      // canActivate: [],
      children: [
          { path: 'action', component: ActionComponent },
          { path: 'action-package', component: ActionPackageComponent },
          { path: 'event', component: EventComponent },
          { path: 'event-package', component: EventPackageComponent },
          { path: 'manage-event-action', component: ManageEventActionComponent},
          { path: 'save-verison', component: SaveVersionComponent },

          { path: '', pathMatch: 'full', redirectTo: 'service-master' },
      ],
  },
  { path: '**', component: EventActionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventActionRoutingModule { }
