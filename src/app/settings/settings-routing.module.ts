import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

import { AuthorisationComponent } from './authorisation/authorisation.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { EventActionComponent } from './event-action/event-action.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { PaymentsComponent } from './payments/payments.component';
import { WebServicesComponent } from './web-services/web-services.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    // resolve: [],
    // canActivate: [],
    children: [ 

      { path: 'authorisation', component: AuthorisationComponent },
      { path: 'data-source', component: DataSourceComponent },
      { path: 'event-action', component: EventActionComponent },
      { path: 'import-export', component: ImportExportComponent },
      { path: 'my-accounts', component: MyAccountsComponent },
      { path: 'other-settings', component: OtherSettingsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'web-services', component: WebServicesComponent },

      { path: '', pathMatch: 'full', redirectTo: 'user' },
    ],
  },
  { path: '**', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
