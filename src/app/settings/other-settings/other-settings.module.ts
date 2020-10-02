import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherSettingsRoutingModule } from './other-settings-routing.module';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';
import { MailReadComponent } from './mail-read/mail-read.component';
import { ManageRulesComponent } from './manage-rules/manage-rules.component';
import { CreateRulesComponent } from './create-rules/create-rules.component';
import { ManageRuleFlowComponent } from './manage-rule-flow/manage-rule-flow.component';
import { CreateRuleFlowComponent } from './create-rule-flow/create-rule-flow.component';
import { ManageWorkflowComponent } from './manage-workflow/manage-workflow.component';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';


@NgModule({
  declarations: [GoogleAnalyticsComponent, MailReadComponent, ManageRulesComponent, CreateRulesComponent, ManageRuleFlowComponent, CreateRuleFlowComponent, ManageWorkflowComponent, CreateWorkflowComponent],
  imports: [
    CommonModule,
    OtherSettingsRoutingModule
  ]
})
export class OtherSettingsModule { }
