import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasourceComponent } from './datasource.component';

const routes: Routes = [
  {
    path: '',
    component: DatasourceComponent,
  },
  { path: '**', component: DatasourceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatasourceRoutingModule {}
