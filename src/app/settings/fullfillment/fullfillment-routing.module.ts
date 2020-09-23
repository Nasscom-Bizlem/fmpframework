import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceMasterComponent } from '../../fullfillment/service-master/service-master.component';
import { ExtendTrailComponent } from './extend-trail/extend-trail.component';
import { FreeTrailComponent } from './free-trail/free-trail.component';
import { FullfillmentComponent } from './fullfillment.component';
import { RestoreSuspentionComponent } from './restore-suspention/restore-suspention.component';
import { RestoreSuspentionsComponent } from './restore-suspentions/restore-suspentions.component';
import { ServiceExtentionsComponent } from './service-extentions/service-extentions.component';
import { SuspendAccountComponent } from './suspend-account/suspend-account.component';
import { UpgradeTrailComponent } from './upgrade-trail/upgrade-trail.component';

const routes: Routes = [
  {
    path: '',
    component: FullfillmentComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'extend-trail', component: ExtendTrailComponent },
      { path: 'free-trail', component: FreeTrailComponent },
      { path: 'restore-suspention', component: RestoreSuspentionComponent },
      { path: 'service-extension', component: ServiceExtentionsComponent },
      { path: 'restore-suspentions', component: RestoreSuspentionsComponent },
      { path: 'service-master', component: ServiceMasterComponent },
      { path: 'suspend-account', component: SuspendAccountComponent },
      { path: 'upgrade-trail', component: UpgradeTrailComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: FullfillmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullfillmentRoutingModule { }
