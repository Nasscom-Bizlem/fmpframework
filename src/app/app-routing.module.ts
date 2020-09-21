import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './features/customer/customer.component';
import { LoginComponent } from './core-services/control/login/login.component';
import { RegistrationComponent } from './core-services/control/registration/registration.component';
import { AuthLoginGuard } from './core-services/guard/authLogin.guard';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    canActivateChild: [],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'notfound', component: NotfoundComponent },
      {
        path: 'customerdashboard',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./customers-dashboard/customers-dashboard.module').then(
            (m) => m.CustomersDashboardModule
          ),
      },
      {
        path: 'invoicedashboard',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./invoice-dashboard/invoice-dashboard.module').then(
            (m) => m.InvoiceDashboardModule
          ),
      },
      {
        path: 'customer',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./features/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
      // {
      //   path: 'customer/:id',
      //   canActivateChild: [AuthLoginGuard],
      //   loadChildren: () =>
      //     import('./features/customer/customer.module').then(
      //       (m) => m.CustomerModule
      //     ),
      // },
      {
        path: 'admin',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'settings',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'fullfillment',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./fullfillment/fullfillment.module').then((m) => m.FullfillmentModule),
      },
      { path: 'incentives', loadChildren: () => import('./incentives/incentives.module').then(m => m.IncentivesModule) },
      { path: 'data-source', loadChildren: () => import('./settings/data-source/data-source.module').then(m => m.DataSourceModule) },
      { path: 'event-action', loadChildren: () => import('./settings/event-action/event-action.module').then(m => m.EventActionModule) },
      { path: 'payments', loadChildren: () => import('./settings/payments/payments.module').then(m => m.PaymentsModule) },


      
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
