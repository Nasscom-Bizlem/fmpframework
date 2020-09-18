import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assotment2Component } from './assotment2.component';

const routes: Routes = [
  {
    path: '',
    component: Assotment2Component,
  },
  { path: '**', component: Assotment2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assotment2RoutingModule {}
