import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebServicesRoutingModule } from './web-services-routing.module';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { SaveVerisonComponent } from './save-verison/save-verison.component';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
  declarations: [ManageEventComponent, AddEventComponent, SaveVerisonComponent, EventListComponent],
  imports: [
    CommonModule,
    WebServicesRoutingModule
  ]
})
export class WebServicesModule { }
