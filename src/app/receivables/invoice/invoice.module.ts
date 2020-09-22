import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { StepperComponent } from './stepper/stepper.component';
import { InvoiceActivityComponent } from './invoice-activity/invoice-activity.component';
import { IqraComponent } from './iqra/iqra.component';
import { InvoiceTabComponent } from './invoice-tab/invoice-tab.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { TransactionComponent } from './invoice-group/transaction/transaction.component';
import { TransactionDetailsComponent } from './invoice-group/transaction-details/tranction-details.component';
import { TransactionDisputesComponent } from './invoice-group/transaction-disputes/transaction-disputes.component';
import { TransactionCallLogsComponent } from './invoice-group/transaction-call-logs/transaction-call-logs.component';
import { TransactionNotesFilesComponent } from './invoice-group/transaction-notes-files/transaction-notes-files.component';
import { TransactionReminderComponent } from './invoice-group/transaction-reminder/transaction-reminder.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    InvoiceComponent,
    BannerComponent,
    StepperComponent,
    InvoiceActivityComponent,
    IqraComponent,
    InvoiceTabComponent,
    InvoiceListComponent,
    TransactionComponent,
    TransactionDetailsComponent,
    TransactionDisputesComponent,
    TransactionCallLogsComponent,
    TransactionNotesFilesComponent,
    TransactionReminderComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    MaterialModule,
    NgxChartsModule,
  ],
})
export class InvoiceModule {}
