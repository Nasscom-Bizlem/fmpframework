import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { SaveVerisonComponent } from './save-verison/save-verison.component';
import { WebServicesComponent } from './web-services.component';

const routes: Routes = [
  {
    path: '',
    component: WebServicesComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'add-event', component: AddEventComponent },
      { path: 'event-list', component: EventListComponent },
      { path: 'manage-event', component: ManageEventComponent },
      { path: 'save-version', component: SaveVerisonComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: WebServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebServicesRoutingModule { }
