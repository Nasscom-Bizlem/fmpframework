import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReminderRoutingModule } from './create-reminder-routing.module';
import { CreateReminderComponent } from './create-reminder.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreateReminderComponent],
  imports: [
    CommonModule,
    CreateReminderRoutingModule, SharedModule
  ]
})
export class CreateReminderModule { }
