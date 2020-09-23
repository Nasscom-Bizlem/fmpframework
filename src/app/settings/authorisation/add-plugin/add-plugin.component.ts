import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddPlugin } from './plugin.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-plugin',
  templateUrl: './add-plugin.component.html',
  styleUrls: ['./add-plugin.component.scss']
})
export class AddPluginComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Permission',
    'MethodURL',
    'UIURL',
    'ButtonID',
    'ElementID',
    'select'
  ];
  // dataSource = ELEMENT_DATA;
  // selection = new SelectionModel<AddPlugin>(true, []);


  constructor() { }

  ngOnInit(): void {
  }

  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

}
// const ELEMENT_DATA: AddPlugin[] = [
//   { Id: 'T1', Permission: 'Granted', MethodURL: "//http", UIURL: '/http', ButtonID: "#123", ElementID: "#163" },
//   { Id: 'T2', Permission: 'Granted', MethodURL: "//http", UIURL: '/http', ButtonID: "#123", ElementID: "#193" },

// ];