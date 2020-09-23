import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-settings-project',
  templateUrl: './settings-project.component.html',
  styleUrls: ['./settings-project.component.scss'],
})
export class SettingsProjectComponent implements OnInit {
  constructor(
    private uiService: UiService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.uiService.displayedColumns.next('project');
  }
  openProjectDialog() {
    this.dialogService.openProject('Add Projects', []).subscribe((res) => {
      console.log(res);
    });
  }
}
