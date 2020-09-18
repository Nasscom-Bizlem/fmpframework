import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotaRoutingModule } from './quota-routing.module';
import { QuotaComponent } from './quota.component';


@NgModule({
  declarations: [QuotaComponent],
  imports: [
    CommonModule,
    QuotaRoutingModule
  ]
})
export class QuotaModule { }
