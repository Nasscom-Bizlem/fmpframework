import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core-services/control/login/login.component';
import { RegistrationComponent } from './core-services/control/registration/registration.component';
import { DatePipe } from '@angular/common';
import { CustomerDashboardComponent } from './dashboard-collection/customer-dashboard/customer-dashboard.component';
import { DialogModule } from './shared/dialog/dialog.module';
import { MaterialModule } from './shared/material.module';
import { CustomerInvoiceComponent } from './dashboard-collection/customer-invoice/customer-invoice.component';
// import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CustomerDashboardComponent,
    CustomerInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    DialogModule,
    MaterialModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
