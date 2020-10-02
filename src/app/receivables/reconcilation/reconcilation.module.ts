import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReconcilationRoutingModule } from './reconcilation-routing.module';
import { ReconcilationComponent } from './reconcilation.component';
import { ReconTabComponent } from './recon-tab/recon-tab.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { AwaitingPaymentComponent } from './awaiting-payment/awaiting-payment.component';
import { ReconciledComponent } from './reconciled/reconciled.component';
import { UnReconciledComponent } from './un-reconciled/un-reconciled.component';
import { ReconDisputedComponent } from './recon-disputed/recon-disputed.component';
import { ReconSettlementComponent } from './recon-settlement/recon-settlement.component';
import { ManuelReconComponent } from './manuel-recon/manuel-recon.component';
import { ReconControlComponent } from './recon-control/recon-control.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ReconcilationComponent, ReconTabComponent, DataFilterComponent, AwaitingPaymentComponent, ReconciledComponent, UnReconciledComponent, ReconDisputedComponent, ReconSettlementComponent, ManuelReconComponent, ReconControlComponent],
  imports: [
    CommonModule,
    ReconcilationRoutingModule,
    SharedModule
  ]
})
export class ReconcilationModule { }
