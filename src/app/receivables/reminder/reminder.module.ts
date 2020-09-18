import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderComponent } from './reminder.component';


@NgModule({
  declarations: [ReminderComponent],
  imports: [
    CommonModule,
    ReminderRoutingModule
  ]
})
export class ReminderModule { }
