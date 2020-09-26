import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallCentreComponent } from './call-centre/call-centre.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { MailhostComponent } from './mailhost/mailhost.component';
import { OauthComponent } from './oauth/oauth.component';
import { SetupComponent } from './setup.component';
import { SmsComponent } from './sms/sms.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'call-centre', component: CallCentreComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'email', component: EmailComponent },
      { path: 'sms', component: SmsComponent },
      { path: 'mailhost', component: MailhostComponent},
      { path: 'oauth', component: OauthComponent },
      { path: 'whatsapp', component: WhatsappComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: SetupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class SetupRoutingModule{}