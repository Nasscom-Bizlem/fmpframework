import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // resolve: [],
    // canActivate: [],

    children: [
      {
        path: 'payment',
        loadChildren: () =>
          import('./admin-payment/admin-payment.module').then(
            (m) => m.AdminPaymentModule
          ),
      },
      {
        path: 'invoice-details',
        loadChildren: () =>
          import('./admin-invoice/admin-invoice.module').then(
            (m) => m.AdminInvoiceModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'payment' },
    ],
  },

  { path: '**', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
