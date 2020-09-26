import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventActionRoutingModule } from './event-action-routing.module';
import { EventPackageComponent } from './event-package/event-package.component';
import { EventComponent } from './event/event.component';
import { ActionPackageComponent } from './action-package/action-package.component';
import { ActionComponent } from './action/action.component';
import { SaveVersionComponent } from './save-version/save-version.component';
import { ManageEventActionComponent } from './manage-event-action/manage-event-action.component';


@NgModule({
  declarations: [EventPackageComponent, EventComponent, ActionPackageComponent, ActionComponent, SaveVersionComponent, ManageEventActionComponent],
  imports: [
    CommonModule,
    EventActionRoutingModule
  ]
})
export class EventActionModule { }
