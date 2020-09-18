import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assotment1Component } from './assotment1.component';

const routes: Routes = [
  {
    path: '',
    component: Assotment1Component,
  },
  { path: '**', component: Assotment1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assotment1RoutingModule {}
