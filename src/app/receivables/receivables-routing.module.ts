import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReceivablesComponent } from './receivables.component';

const routes: Routes = [
  {
    path: '',
    component: ReceivablesComponent,
    children: [
      {
        path: 'reminder',
        canActivateChild: [],
        loadChildren: () =>
          import('./reminder/reminder.module').then((m) => m.ReminderModule),
      },
      {
        path: 'customer',
        canActivateChild: [],
        loadChildren: () =>
          import('./customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'invoice',
        canActivateChild: [],
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
      },
      {
        path: 'payment',
        canActivateChild: [],
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'analytics',
        canActivateChild: [],
        loadChildren: () =>
          import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
      },
      {
        path: 'reconcilation',
        canActivateChild: [],
        loadChildren: () =>
          import('./reconcilation/reconcilation.module').then(
            (m) => m.ReconcilationModule
          ),
      },
    ],
  },

  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivablesRoutingModule {}
