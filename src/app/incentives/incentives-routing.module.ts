import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncentivesComponent } from './incentives.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: IncentivesComponent,
    children: [
      {
        path: 'team',
        canActivateChild: [],
        loadChildren: () =>
          import('./team/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'plan',
        canActivateChild: [],
        loadChildren: () =>
          import('./plan/plan.module').then((m) => m.PlanModule),
      },
      {
        path: 'quota',
        canActivateChild: [],
        loadChildren: () =>
          import('./quota/quota.module').then((m) => m.QuotaModule),
      },
      {
        path: 'contract',
        canActivateChild: [],
        loadChildren: () =>
          import('./contract/contract.module').then((m) => m.ContractModule),
      },
      {
        path: 'ruleflow',
        canActivateChild: [],
        loadChildren: () =>
          import('./ruleflow/ruleflow.module').then((m) => m.RuleflowModule),
      },
      {
        path: 'datasource',
        canActivateChild: [],
        loadChildren: () =>
          import('./datasource/datasource.module').then(
            (m) => m.DatasourceModule
          ),
      },
    ],
  },

  { path: '**', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncentivesRoutingModule {}
