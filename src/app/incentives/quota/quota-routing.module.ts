import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotaComponent } from './quota.component';

const routes: Routes = [
  {
    path: '',
    component: QuotaComponent,
  },
  { path: '**', component: QuotaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotaRoutingModule {}
