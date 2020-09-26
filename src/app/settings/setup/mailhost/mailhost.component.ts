import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

export interface PeriodicMailhostElement {
  check: boolean;
  user: string;
  outboundMail: string;
  mailLimit: number;
  sms: string;
  smsLimit: number;
  whatsapp: string;
  whatsappLimit: number;
  action: boolean;
}

const MAILHOST_ELEMENT_DATA: PeriodicMailhostElement[] = [
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null ,action: false },
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null ,action: false },
  { check: false, user: 'Twillio', outboundMail: '-', mailLimit: null, sms: '-', smsLimit: null, whatsapp: '-', whatsappLimit: null ,action: false },
];

@Component({
  selector: 'app-mailhost',
  templateUrl: './mailhost.component.html',
  styleUrls: ['./mailhost.component.scss']
})
export class MailhostComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  title = 'Mailhost';
  mailhostDisplayedColumns: string[] = [ 'check', 'user', 'outboundMail', 'mailLimit', 'sms', 'smsLimit', 'whatsapp', 'whatsappLimit', 'action'];
  mailhostDataSource = MAILHOST_ELEMENT_DATA;

  openMailhostDialog(){
    this.dialogService.addMailhostDialog('Add', []).subscribe((res) => {
      console.log(res);
    });
}

}
