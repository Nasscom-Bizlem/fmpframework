import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReconcilationComponent } from './reconcilation.component';

const routes: Routes = [
  {
    path: '',
    component: ReconcilationComponent,
  },
  { path: '**', component: ReconcilationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconcilationRoutingModule {}
