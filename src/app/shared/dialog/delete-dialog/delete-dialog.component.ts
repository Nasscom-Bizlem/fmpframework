import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogueModel } from 'src/app/settings/setup/setup-model/delete-dialogue-model.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {}

 conditionToDeleteDialogue(){

  let deleteDialogueModelObj = new DeleteDialogueModel();
  deleteDialogueModelObj.delete = true
  deleteDialogueModelObj.cancel = false;

  this.dialogRef.close(deleteDialogueModelObj);

 }

}
