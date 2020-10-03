import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { IncentivesModule } from './incentives/incentives.module';
import { DialogModule } from './shared/dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './core-services/control/login/login.component';
import { RegistrationComponent } from './core-services/control/registration/registration.component';
import { DatePipe } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './LoaderForRequest/components/shared/loader/loader.component';
import { LoaderService } from './LoaderForRequest/services/loader.service';
import { LoaderInterceptor } from './LoaderForRequest/interceptors/loader.interceptor';

//import { FullfillmentComponent } from './fullfillment/fullfillment.component';
//import { ServiceMasterComponent } from './fullfillment/service-master/service-master.component';
// import 'hammerjs';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent,LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    DialogModule,
    IncentivesModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DatePipe,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
