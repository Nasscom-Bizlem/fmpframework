import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRuleFlowComponent } from './create-rule-flow/create-rule-flow.component';
import { CreateRulesComponent } from './create-rules/create-rules.component';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';
import { MailReadComponent } from './mail-read/mail-read.component';
import { ManageRuleFlowComponent } from './manage-rule-flow/manage-rule-flow.component';
import { ManageRulesComponent } from './manage-rules/manage-rules.component';
import { ManageWorkflowComponent } from './manage-workflow/manage-workflow.component';
import { OtherSettingsModule } from './other-settings.module';
import { OtherSettingsComponent } from './other-settings.component';
const routes: Routes = [
  {
    path: '',
    component: OtherSettingsComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'rule-flow', component: CreateRuleFlowComponent },
      { path: 'create-rule', component: CreateRulesComponent },
      { path: 'workflow', component: CreateWorkflowComponent },
      { path: 'analytics', component: GoogleAnalyticsComponent },
      { path: 'mail-read', component: MailReadComponent },
      { path: 'manage-rule-flow', component: ManageRuleFlowComponent },
      { path: 'manage-rules', component: ManageRulesComponent },
      { path: 'manage-workflow', component: ManageWorkflowComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: OtherSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherSettingsRoutingModule { }
