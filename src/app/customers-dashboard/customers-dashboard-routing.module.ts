import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersDashboardComponent } from './customers-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersDashboardComponent,
  },
  { path: '**', component: CustomersDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersDashboardRoutingModule {}
