import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncentivesRoutingModule } from './incentives-routing.module';
import { IncentivesComponent } from './incentives.component';


@NgModule({
  declarations: [IncentivesComponent],
  imports: [CommonModule, IncentivesRoutingModule],
})
export class IncentivesModule {}
