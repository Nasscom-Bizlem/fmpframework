import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { StripeComponent } from './stripe/stripe.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PaypalComponent } from './paypal/paypal.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'credit-card', component: CreditCardComponent },
      { path: 'paypal', component: PaypalComponent },
      { path: 'razorpay', component: RazorpayComponent },
      { path: 'stripe', component: StripeComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule { }
