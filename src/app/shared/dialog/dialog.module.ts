import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { MaterialModule } from '../material.module';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { CustomerInvoiceDialogComponent } from './customer-invoice-dialog/customer-invoice-dialog.component';
import { LogCallDialogComponent } from './log-call-dialog/log-call-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { PaymentActivityDialogComponent } from './payment-activity-dialog/payment-activity-dialog.component';
import { CustomerListDialogComponent } from './customer-list-dialog/customer-list-dialog.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { AddDisputeComponent } from './add-dispute/add-dispute.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AdminProjectDialogComponent } from './admin-project-dialog/admin-project-dialog.component';
import { CustomernotesComponent } from './customernotes/customernotes.component';
import { PromisePayDialogComponent } from './promise-pay-dialog/promise-pay-dialog.component';
import { AddInvoiceDialogComponent } from './add-invoice-dialog/add-invoice-dialog.component';
import { CustomerTeamspaceComponent } from './customerteamspace/customer-teamspace/customer-teamspace.component';

@NgModule({
  declarations: [
    NewTaskDialogComponent,
    CustomerInvoiceDialogComponent,
    LogCallDialogComponent,
    NewEventDialogComponent,
    TaskDialogComponent,
    PaymentActivityDialogComponent,
    CustomerListDialogComponent,
    AddCustomerDialogComponent,
    AddDisputeComponent,
    DeleteDialogComponent,
    AdminProjectDialogComponent,
    CustomernotesComponent,
    PromisePayDialogComponent,
    AddInvoiceDialogComponent,
    // CustomerTeamspaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    SharedModule,
  ],
  exports: [],
  providers: [CurrencyPipe, DatePipe],
  entryComponents: [
    NewTaskDialogComponent,
    CustomerInvoiceDialogComponent,
    LogCallDialogComponent,
    NewEventDialogComponent,
    PaymentActivityDialogComponent,
    CustomerListDialogComponent,
    AddCustomerDialogComponent,
    AddDisputeComponent,
    DeleteDialogComponent,
    AdminProjectDialogComponent,
    PromisePayDialogComponent,
    AddInvoiceDialogComponent,
    // CustomerTeamspaceComponent
  ],
})
export class DialogModule {}
