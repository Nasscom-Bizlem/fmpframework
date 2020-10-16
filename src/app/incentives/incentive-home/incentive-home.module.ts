import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncentiveHomeRoutingModule } from './incentive-home-routing.module';
import { IncentiveHomeComponent } from './incentive-home.component';
import { IncTabComponent } from '../incentive-common/inc-tab/inc-tab.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IncHomeComponent } from './inc-home/inc-home.component';
import { IncStatusComponent } from './inc-status/inc-status.component';

@NgModule({
  declarations: [IncentiveHomeComponent, IncHomeComponent, IncStatusComponent],
  imports: [CommonModule, IncentiveHomeRoutingModule, SharedModule],
})
export class IncentiveHomeModule {}
