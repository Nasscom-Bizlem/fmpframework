import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleflowComponent } from './ruleflow.component';

const routes: Routes = [
  {
    path: '',
    component: RuleflowComponent,
  },
  { path: '**', component: RuleflowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuleflowRoutingModule {}
