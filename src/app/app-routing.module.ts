import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

      //---------------------------Incentives-------------------------------------------
      {
        path: 'incentives',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./incentives/incentives.module').then(
            (m) => m.IncentivesModule
          ),
      },

      //---------------------------Incentives END-------------------------------------------

      //---------------------------receivables-------------------------------------------
      {
        path: 'receivables',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./receivables/receivables.module').then(
            (m) => m.ReceivablesModule
          ),
      },

      //---------------------------receivables END-------------------------------------------

      //---------------------------Assortment-------------------------------------------
      {
        path: 'assortment1',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./assortment/assotment1/assotment1.module').then(
            (m) => m.Assotment1Module
          ),
      },
      {
        path: 'assortment2',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./assortment/assotment2/assotment2.module').then(
            (m) => m.Assotment2Module
          ),
      },
      {
        path: 'assortment3',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./assortment/assotment3/assotment3.module').then(
            (m) => m.Assotment3Module
          ),
      },
      {
        path: 'assortment4',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./assortment/assotment4/assotment4.module').then(
            (m) => m.Assotment4Module
          ),
      },
      {
        path: 'assortment5',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./assortment/assotment5/assotment5.module').then(
            (m) => m.Assotment5Module
          ),
      },
      //---------------------------Assortment END-------------------------------------------
      // {
      //   path: 'customerdashboard',
      //   canActivateChild: [AuthLoginGuard],
      //   loadChildren: () =>
      //     import('./dashboard-collection/').then(
      //       (m) => m.CustomersDashboardModule
      //     ),
      // },
      // {
      //   path: 'invoicedashboard',
      //   canActivateChild: [AuthLoginGuard],
      //   loadChildren: () =>
      //     import('./invoice-dashboard/invoice-dashboard.module').then(
      //       (m) => m.InvoiceDashboardModule
      //     ),
      // },
      {
        path: 'customer',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./receivables/customer/customer.module').then(
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
      // {
      //   path: 'admin',
      //   canActivateChild: [AuthLoginGuard],
      //   loadChildren: () =>
      //     import('./admin/admin.module').then((m) => m.AdminModule),
      // },
      {
        path: 'settings',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      { path: 'authorisation', loadChildren: () => import('./settings/authorisation/authorisation.module').then(m => m.AuthorisationModule) },

      { path: 'incentives', loadChildren: () => import('./incentives/incentives.module').then(m => m.IncentivesModule) },
      { path: 'data-source', loadChildren: () => import('./settings/data-source/data-source.module').then(m => m.DataSourceModule) },
      { path: 'event-action', loadChildren: () => import('./settings/event-action/event-action.module').then(m => m.EventActionModule) },
      { path: 'payments', loadChildren: () => import('./settings/payments/payments.module').then(m => m.PaymentsModule) },
      { path: 'web-services', loadChildren: () => import('./settings/web-services/web-services.module').then(m => m.WebServicesModule) },
      { path: 'import-export', loadChildren: () => import('./settings/import-export/import-export.module').then(m => m.ImportExportModule) },
      { path: 'fullfillment', loadChildren: () => import('./settings/fullfillment/fullfillment.module').then(m => m.FullfillmentModule) },
      { path: 'setup', loadChildren: () => import('./settings/setup/setup.module').then(m => m.SetupModule) },
      { path: 'other-settings', loadChildren: () => import('./settings/other-settings/other-settings.module').then(m => m.OtherSettingsModule) },


      
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
