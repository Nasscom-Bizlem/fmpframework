import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../shared/ui.service';
import { DialogService } from '../../../shared/dialog/dialog.service';
@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.displayedColumns.next('user');
  }

}
