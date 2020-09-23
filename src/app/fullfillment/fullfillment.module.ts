import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FullfillmentRoutingModule } from './fullfillment-routing.module';
import { FullfillmentComponent } from './fullfillment.component';
import { ServiceMasterComponent } from './service-master/service-master.component';

@NgModule({
  declarations: [
    FullfillmentComponent,
    ServiceMasterComponent,

  ],
  imports: [CommonModule, FullfillmentRoutingModule,SharedModule],
})
export class FullfillmentModule {}
