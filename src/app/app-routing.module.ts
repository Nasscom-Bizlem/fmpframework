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
      /* {
        path: 'settings',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      }, */
      {
        path: 'setup',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./setup/setup.module').then((m) => m.SetupModule),
      },
      {
        path: 'authorisation',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./setup/authorisation/authorisation.module').then((m) => m.AuthorisationModule),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
