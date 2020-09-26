import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

export interface PeriodicMessageElement {
  check: boolean;
  accountType: string;
  accountName: string;
  typeV: string;
  number: number;
  campaign: string;
  routeId: string;
  action: boolean;
}

const MESSAGE_ELEMENT_DATA: PeriodicMessageElement[] = [
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'Whatsapp', number: 918799879977, campaign:'-', routeId: '-', action: false },
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'SMS', number: 918799459977, campaign:'-', routeId: '-', action: false },
  { check: false, accountType: 'Twillio', accountName: '-', typeV: 'SMS', number: 918799877977, campaign:'-', routeId: '-', action: false },
];

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  title = 'WhatsApp';
  messageDisplayedColumns: string[] = [ 'check', 'accountType', 'accountName', 'typeV', 'number', 'campaign', 'routeId', 'action'];
  messageDataSource = MESSAGE_ELEMENT_DATA;

  openSettingDialog() {
    this.dialogService.editSettingDialog('Add/Edit', []).subscribe((res) => {
      console.log(res);
    });
  }

}
