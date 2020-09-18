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
