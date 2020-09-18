import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assotment4Component } from './assotment4.component';

const routes: Routes = [
  {
    path: '',
    component: Assotment4Component,
  },
  { path: '**', component: Assotment4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assotment4RoutingModule {}
