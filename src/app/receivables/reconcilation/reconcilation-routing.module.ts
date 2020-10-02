import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwaitingPaymentComponent } from './awaiting-payment/awaiting-payment.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { ManuelReconComponent } from './manuel-recon/manuel-recon.component';
import { ReconDisputedComponent } from './recon-disputed/recon-disputed.component';
import { ReconSettlementComponent } from './recon-settlement/recon-settlement.component';
import { ReconcilationComponent } from './reconcilation.component';
import { ReconciledComponent } from './reconciled/reconciled.component';
import { UnReconciledComponent } from './un-reconciled/un-reconciled.component';


const routes: Routes = [
  {
    path: '',
    component: ReconcilationComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'datafilter', component: DataFilterComponent },
      { path: 'awaitingpayment', component: AwaitingPaymentComponent },
      { path: 'reconciled', component: ReconciledComponent },
      { path: 'unreconciled', component: UnReconciledComponent },
      { path: 'settlement', component: ReconDisputedComponent },
      { path: 'manuelrecon', component: ManuelReconComponent },
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
    ],
  },
  { path: '**', component: DataFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconcilationRoutingModule {}
