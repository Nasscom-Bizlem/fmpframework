import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-project-dialog',
  templateUrl: './admin-project-dialog.component.html',
  styleUrls: ['./admin-project-dialog.component.scss'],
})
export class AdminProjectDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminProjectDialogComponent>
  ) {}

  ngOnInit(): void {}

  saveProjectData() {
    this.dialogRef.close('sending data to project component');
  }
  closeProjectDialog() {
    this.dialogRef.close();
  }
}
