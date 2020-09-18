import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesRoutingModule } from './receivables-routing.module';
import { ReceivablesComponent } from './receivables.component';


@NgModule({
  declarations: [ReceivablesComponent],
  imports: [
    CommonModule,
    ReceivablesRoutingModule
  ]
})
export class ReceivablesModule { }
