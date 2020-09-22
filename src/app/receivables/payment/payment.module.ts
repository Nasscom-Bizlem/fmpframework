import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityTaskComponent } from './activity-task/activity-task.component';

@NgModule({
  declarations: [PaymentComponent, ActivityTaskComponent],
  imports: [CommonModule, PaymentRoutingModule, MaterialModule, SharedModule],
})
export class PaymentModule {}
