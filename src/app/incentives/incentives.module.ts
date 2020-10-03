import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncentivesRoutingModule } from './incentives-routing.module';
import { TeamComponent } from './team/team.component';
import { PlanComponent } from './plan/plan.component';
import { QuotaComponent } from './quota/quota.component';
import { ContractComponent } from './contract/contract.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ObjectsComponent } from './objects/objects.component';
import { RuleFlowComponent } from './rule-flow/rule-flow.component';
import { DataSourcesComponent } from './data-sources/data-sources.component';
// import { IncentivesComponent } from './incentives.component';


@NgModule({
  declarations: [TeamComponent, PlanComponent, QuotaComponent, ContractComponent, AnalyticsComponent, ObjectsComponent, RuleFlowComponent, DataSourcesComponent],
  imports: [
    CommonModule,
    IncentivesRoutingModule
  ]
})
export class IncentivesModule { }
