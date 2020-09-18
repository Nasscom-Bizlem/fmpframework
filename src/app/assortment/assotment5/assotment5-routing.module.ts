import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assotment5Component } from './assotment5.component';

const routes: Routes = [
  {
    path: '',
    component: Assotment5Component,
  },
  { path: '**', component: Assotment5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Assotment5RoutingModule {}
