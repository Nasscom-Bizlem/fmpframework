import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddteamspaceComponent } from './addteamspace.component';

@Injectable({
  providedIn: 'root',
})
export class AddCustomerTeamSpaceService {
  constructor(public dialog: MatDialog) {}

  openTeamSpace() {
    const d = this.dialog.open(AddteamspaceComponent, {
      data: {
        // modeldata: modeldata,
      },
      minWidth: '35vw',
      minHeight: '40vh',
    });

    return d.afterClosed();
  }
}
