import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleflowRoutingModule } from './ruleflow-routing.module';
import { RuleflowComponent } from './ruleflow.component';


@NgModule({
  declarations: [RuleflowComponent],
  imports: [
    CommonModule,
    RuleflowRoutingModule
  ]
})
export class RuleflowModule { }
