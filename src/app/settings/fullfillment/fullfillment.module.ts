import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';

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
    FullfillmentRoutingModule,
    SharedModule,MatTableModule,MaterialModule,LayoutModule
  ]
})
export class FullfillmentModule { }
