import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assotment3Component } from './assotment3.component';

const routes: Routes = [
  {
    path: '',
    component: Assotment3Component,
  },
  { path: '**', component: Assotment3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assotment3RoutingModule {}
