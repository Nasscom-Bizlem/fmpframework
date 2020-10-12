import { Component, OnInit } from '@angular/core';
import { GlobalvariablesService } from 'src/app/core-services/globalvariables.service';
import { UiService } from 'src/app/shared/ui.service';
import { ReconService } from '../recon.service';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit {
  columnFields = [];

  data = [];

  obj = [];

  setHeader(title, index) {
    return title + index;
  }

  setData(data, title) {
    if (!title) return 'Hi';
    return data;
  }

  constructor(
    private uiService: UiService,
    public globalVariable: GlobalvariablesService,
    private reconService: ReconService
  ) {}

  ngOnInit(): void {
    this.uiService.reconColumnFieldEmitter.subscribe((res) => {
      // console.log(res);
      this.columnFields = res;
      let dataFields = this.makeObjFields();
      // console.log(dataFields);
      this.getReconrecord(dataFields);
    });
  }

  makeObjFields() {
    let obj = {};
    this.globalVariable.FieldLabel.forEach((r) => {
      let index = this.columnFields.findIndex(
        (PP) => PP.ColumnType.toLowerCase() === r.toLowerCase()
      );
      if (index > -1) {
        obj[r] = this.columnFields.filter(
          (x) => x.ColumnType.toLowerCase() === r.toLowerCase()
        );
      }
    });

    return obj;
  }

  fieldOBJ = {};

  getReconrecord(dataField: any) {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.reconService
      .getReconList('Transaction', customer.CustomerId, 0, 20, dataField)
      .subscribe((res) => {
        // console.log(res);
        this.data = res.TransactionDataArrayList;
        if (this.data && this.data.length > 0) {
          this.fieldOBJ = { ...res.TransactionDataArrayList[0] };
        }

        // print object
        // console.log(this.fieldOBJ);
      });
  }
}
