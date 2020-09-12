import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersDashboardRoutingModule } from './customers-dashboard-routing.module';
import { CustomersDashboardComponent } from './customers-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomersDashboardComponent],
  imports: [CommonModule, CustomersDashboardRoutingModule, SharedModule],
})
export class CustomersDashboardModule {}
