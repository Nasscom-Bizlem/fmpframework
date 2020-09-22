import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesRoutingModule } from './receivables-routing.module';
import { ReceivablesComponent } from './receivables.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [ReceivablesComponent],
  imports: [
    CommonModule,
    ReceivablesRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class ReceivablesModule { }
