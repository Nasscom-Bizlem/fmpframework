import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContractComponent } from './contract/contract.component';
import { DataSourcesComponent } from './data-sources/data-sources.component';
import { ObjectsComponent } from './objects/objects.component';
import { PlanComponent } from './plan/plan.component';
import { QuotaComponent } from './quota/quota.component';
import { RuleFlowComponent } from './rule-flow/rule-flow.component';


// import { IncentivesComponent } from './incentives.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Incentives',
    status: false
  },
  // resolve: [],
  // canActivate: [],
  children: [
    {
      path: '',
      redirectTo: 'team',
      pathMatch: 'full'
    },
    {
      path: 'team',
      component: TeamComponent,
      data: {
        path: 'team'
      }
    }, {
      path: 'analytics',
      component: AnalyticsComponent,
      data: {
        path: 'analytics'
      }
    }, {
      path: 'cotract',
      component: ContractComponent,
      data: {
        path: 'cotract'
      }
    }, {
      path: 'data-sources',
      component: DataSourcesComponent,
      data: {
        path: 'data-sources'
      }
    }, {
      path: 'objects',
      component: ObjectsComponent,
      data: {
        path: 'objects'
      }
    }, {
      path: 'plan',
      component: PlanComponent,
      data: {
        path: 'plan'
      }
    },
    {
      path: 'quota',
      component: QuotaComponent,
      data: {
        path: 'quota'
      }
    },
    {
      path: 'rule-flow',
      component: RuleFlowComponent,
      data: {
        path: 'rule-flow'
      }
    },

    { path: '', pathMatch: 'full', redirectTo: 'user' },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentivesRoutingModule { }
