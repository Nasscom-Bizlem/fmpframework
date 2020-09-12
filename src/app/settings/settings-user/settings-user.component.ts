import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.displayedColumns.next('user');
  }

}
