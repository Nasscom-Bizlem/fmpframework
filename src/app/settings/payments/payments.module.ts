import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { StripeComponent } from './stripe/stripe.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PaypalComponent } from './paypal/paypal.component';


@NgModule({
  declarations: [StripeComponent, RazorpayComponent, CreditCardComponent, PaypalComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
