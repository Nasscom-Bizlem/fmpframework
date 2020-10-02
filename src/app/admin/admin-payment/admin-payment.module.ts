import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPaymentRoutingModule } from './admin-payment-routing.module';
import { AdminPaymentComponent } from './admin-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityTaskComponent } from './activity-task/activity-task.component';

@NgModule({
  declarations: [AdminPaymentComponent, ActivityTaskComponent],
  imports: [CommonModule, AdminPaymentRoutingModule, SharedModule],
})
export class AdminPaymentModule {}
