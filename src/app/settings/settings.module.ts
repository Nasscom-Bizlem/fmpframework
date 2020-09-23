import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { SharedModule } from '../shared/shared.module';
// import { TableGridComponent } from './table-grid/table-grid.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { EventActionComponent } from './event-action/event-action.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { PaymentsComponent } from './payments/payments.component';
import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
// import { AddPluginComponent} from './add-plugin/add-plugin.component';
import { SettingsTabComponent } from './authorisation/settings-tab/settings-tab.component';

import { FullfillmentComponent } from './fullfillment/fullfillment.component';
import { SetupComponent } from './setup/setup.component';
@NgModule({
  declarations: [
    SettingsComponent,   
    MyAccountsComponent,
    AuthorisationComponent,
    EventActionComponent,
    WebServicesComponent,
    DataSourceComponent,
    ImportExportComponent,
    PaymentsComponent,
    OtherSettingsComponent,    
    FullfillmentComponent,
    SetupComponent,
    SettingsTabComponent
  ],
  imports: [CommonModule, SettingsRoutingModule,SharedModule,MatTableModule,MaterialModule,LayoutModule],
})
export class SettingsModule {}
