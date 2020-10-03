import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInvoiceComponent } from './admin-invoice.component';
import { TransactionComponent } from './invoice-group/transaction/transaction.component';
import { TransactionDetailsComponent } from './invoice-group/transaction-details/tranction-details.component';
import { TransactionDisputesComponent } from './invoice-group/transaction-disputes/transaction-disputes.component';
import { TransactionNotesFilesComponent } from './invoice-group/transaction-notes-files/transaction-notes-files.component';
import { TransactionReminderComponent } from './invoice-group/transaction-reminder/transaction-reminder.component';
import { TransactionCallLogsComponent } from './invoice-group/transaction-call-logs/transaction-call-logs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminInvoiceComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'transaction', component: TransactionComponent },
      { path: 'transactiondetails', component: TransactionDetailsComponent },
      { path: 'transactiondisputes', component: TransactionDisputesComponent },
      { path: 'transactionlogs', component: TransactionCallLogsComponent },
      { path: 'transactionnotesfile', component: TransactionNotesFilesComponent },
      { path: 'transactionreminder', component: TransactionReminderComponent },
      { path: '', pathMatch: 'full', redirectTo: 'transaction' },
    ],
  },
  { path: '**', component: AdminInvoiceComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminInvoiceRoutingModule {}
