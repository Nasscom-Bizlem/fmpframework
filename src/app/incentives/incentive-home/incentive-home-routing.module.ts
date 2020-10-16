import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncHomeComponent } from './inc-home/inc-home.component';
import { IncStatusComponent } from './inc-status/inc-status.component';
import { IncentiveHomeComponent } from './incentive-home.component';

const routes: Routes = [
  {
    path: '',
    component: IncentiveHomeComponent,
    children: [
      { path: 'inchome', component: IncHomeComponent },
      { path: 'incstatus', component: IncStatusComponent },
      { path: '', pathMatch: 'full', redirectTo: 'inchome' },
    ],
  },
  { path: '**', component: IncHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncentiveHomeRoutingModule {}
