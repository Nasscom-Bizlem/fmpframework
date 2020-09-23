import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullfillmentRoutingModule } from './fullfillment-routing.module';
import { FreeTrailComponent } from './free-trail/free-trail.component';
import { ExtendTrailComponent } from './extend-trail/extend-trail.component';
import { SuspendAccountComponent } from './suspend-account/suspend-account.component';
import { RestoreSuspentionsComponent } from './restore-suspentions/restore-suspentions.component';
import { UpgradeTrailComponent } from './upgrade-trail/upgrade-trail.component';
import { ServiceExtentionsComponent } from './service-extentions/service-extentions.component';
import { RestoreSuspentionComponent } from './restore-suspention/restore-suspention.component';
import { ServiceMasterComponent } from './service-master/service-master.component';


@NgModule({
  declarations: [FreeTrailComponent, ExtendTrailComponent, SuspendAccountComponent, RestoreSuspentionsComponent, UpgradeTrailComponent, ServiceExtentionsComponent, RestoreSuspentionComponent, ServiceMasterComponent],
  imports: [
    CommonModule,
    FullfillmentRoutingModule
  ]
})
export class FullfillmentModule { }
