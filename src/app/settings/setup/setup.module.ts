import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallCentreComponent } from './call-centre/call-centre.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { SmsComponent } from './sms/sms.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SetupRoutingModule } from './setup-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { OauthComponent } from './oauth/oauth.component';


@NgModule({
  declarations: [CallCentreComponent, ChatComponent,WhatsappComponent, EmailComponent, SmsComponent, OauthComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    MaterialModule,
  ]
})
export class SetupModule{}