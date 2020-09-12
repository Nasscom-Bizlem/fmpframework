import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { DialogModule } from './shared/dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core-services/control/login/login.component';
import { RegistrationComponent } from './core-services/control/registration/registration.component';
import { DatePipe } from '@angular/common';
// import 'hammerjs';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    DialogModule,
  ],
  providers: [
    DatePipe,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
