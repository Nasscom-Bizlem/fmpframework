import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { Router } from '@angular/router';
import { SettingTeamSpaceModel } from '../settings-model/setting-team-space-model.model';
import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-settings-groups',
  templateUrl: './settings-groups.component.html',
  styleUrls: ['./settings-groups.component.scss']
})
export class SettingsGroupsComponent implements OnInit {

  isGroupTabOpen = false;
  isActive = true;
  groupSelectedData = '';

  SettingTeamSpaceList: Array<SettingTeamSpaceModel> = [];

  constructor(
    private uiService: UiService,
    private dialogService: DialogService,
    private settingsService: AuthorisationService,
    private router: Router,
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
    });
  }

  openNewTeamDialog() {
    this.dialogService.openNewTeam().subscribe((res) => {
      console.log("teamspaceDialogOpen:: "+JSON.stringify(res));

      if (res) {
          
         this.settingsService
        .addTeamSpaceData(res)
        .subscribe((teamspaceresponse) => {
          this.SettingTeamSpaceList.push(teamspaceresponse);
          console.log("savedTeamSpaceres:: "+JSON.stringify( this.SettingTeamSpaceList));

           console.log(this.router.url);

            this.reloadComponent();

        }); 

      }
    });
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    //this.router.navigate(['/dashboard/roles']);
    this.router.navigate([this.router.url]);
}

}
