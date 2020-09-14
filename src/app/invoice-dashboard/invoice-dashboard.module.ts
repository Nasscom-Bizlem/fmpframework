import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDashboardRoutingModule } from './invoice-dashboard-routing.module';
import { InvoiceDashboardComponent } from './invoice-dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InvoiceDashboardComponent],
  imports: [
    CommonModule,
    InvoiceDashboardRoutingModule,
    SharedModule
  ]
})
export class InvoiceDashboardModule { }
