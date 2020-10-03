import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RemindersActionComponent } from './reminders-action/reminders-action.component';
import { NotesFilesComponent } from './notes-files/notes-files.component';
import { DisputesComponent } from './disputes/disputes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CustomerComponent,
    OverviewComponent,
    DetailsComponent,
    InvoicesComponent,
    RemindersActionComponent,
    NotesFilesComponent,
    DisputesComponent
  ],
  imports: [CommonModule, CustomerRoutingModule,SharedModule],
  providers:[DatePipe]
})
export class CustomerModule {
  debugger;
}
