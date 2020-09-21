import { Component, OnInit } from '@angular/core';
import { UiService } from '../../shared/ui.service';
import { DialogService } from '../../shared/dialog/dialog.service';

@Component({
  selector: 'app-settings-groups',
  templateUrl: './settings-groups.component.html',
  styleUrls: ['./settings-groups.component.scss']
})
export class SettingsGroupsComponent implements OnInit {

  isGroupTabOpen = false;
  isActive = true;
  groupSelectedData = '';
  constructor(
    private uiService: UiService,
    private dialogService: DialogService
  ) {}
  generalTab = [
    {
      tabName: 'General',
    },
    {
      tabName: 'User',
    },
    {
      tabName: 'Project',
    },
  ];

  ngOnInit(): void {
    this.uiService.displayedColumns.next('groups');
    this.uiService.isGroupColumnClicked.subscribe((res) => {
      this.isGroupTabOpen = res;
    });
    this.uiService.roleData.subscribe((res) => {
      this.groupSelectedData = res.groupData.group;
    });
  }
  generalTabClicked(data: any) {
    if (data === 1) {
    } else if (data === 2) {
    } else {
    }
  }
  openProjectDialog() {
    this.dialogService.openProject('Add Projects', []).subscribe((res) => {
      console.log(res);
    });
  }

}
