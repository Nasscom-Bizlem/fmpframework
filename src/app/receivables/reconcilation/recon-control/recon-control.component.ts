import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../recon-animation';
import { FieldDataModelRoot } from './recon-field';

@Component({
  selector: 'app-recon-control',
  templateUrl: './recon-control.component.html',
  styleUrls: ['./recon-control.component.scss'],
  animations: [SlideInOutAnimation],
})
export class ReconControlComponent implements OnInit {
  selected = 'option1';
  isFilterPanelOpen = false;
  animationState = 'out';
  isFiledOpen = false;
  columnFields: Array<FieldDataModelRoot> = [];

  chipsSelection = [];

  filterChipsSelection = [];

  constructor() {}

  ngOnInit(): void {
    this.columnFields = [
      {
        Transaction: [
          {
            ColumnName: 'Order Transaction',
            ColumnCode: 1,
            ColumnType: 'Transaction',
          },
          {
            ColumnName: 'Debt Party',
            ColumnCode: 2,
            ColumnType: 'Transaction',
          },
          {
            ColumnName: 'Transaction Ref',
            ColumnCode: 3,
            ColumnType: 'Transaction',
          },
          {
            ColumnName: 'Transaction No',
            ColumnCode: 4,
            ColumnType: 'Transaction',
          },
          {
            ColumnName: 'Credit Party',
            ColumnCode: 5,
            ColumnType: 'Transaction',
          },
          {
            ColumnName: 'Transaction type',
            ColumnCode: 6,
            ColumnType: 'Transaction',
          },
        ],
        Invoice: [
          {
            ColumnName: 'Invoice Date',
            ColumnCode: 7,
            ColumnType: 'Invoice',
          },
          {
            ColumnName: 'Invoice No',
            ColumnCode: 8,
            ColumnType: 'Invoice',
          },
          {
            ColumnName: 'Invoice Amount',
            ColumnCode: 9,
            ColumnType: 'Invoice',
          },
        ],
        Settlement: [
          {
            ColumnName: 'Settlement Percentage',
            ColumnCode: 10,
            ColumnType: 'Settlement',
          },
          {
            ColumnName: 'Total Settlement Value',
            ColumnCode: 11,
            ColumnType: 'Settlement',
          },
          {
            ColumnName: 'Settlement Amount',
            ColumnCode: 12,
            ColumnType: 'Settlement',
          },
          {
            ColumnName: 'Settlement Invoice No',
            ColumnCode: 13,
            ColumnType: 'Settlement',
          },
        ],
        Payment: [
          {
            ColumnName: 'Bank Name',
            ColumnCode: 14,
            ColumnType: 'Payment',
          },
          {
            ColumnName: 'Bank Charge',
            ColumnCode: 15,
            ColumnType: 'Payment',
          },
          {
            ColumnName: 'Probability Percentage',
            ColumnCode: 16,
            ColumnType: 'Payment',
          },
          {
            ColumnName: 'Bank Code',
            ColumnCode: 17,
            ColumnType: 'Payment',
          },
          {
            ColumnName: 'Currency',
            ColumnCode: 18,
            ColumnType: 'Payment',
          },
          {
            ColumnName: 'Currency Code',
            ColumnCode: 19,
            ColumnType: 'Payment',
          },
        ],
        Dispute: [
          {
            ColumnName: 'Dispute Date',
            ColumnCode: 20,
            ColumnType: 'Dispute',
          },
          {
            ColumnName: 'Dispute ID',
            ColumnCode: 21,
            ColumnType: 'Dispute',
          },
          {
            ColumnName: 'Dispute Type',
            ColumnCode: 22,
            ColumnType: 'Dispute',
          },
          {
            ColumnName: 'Dispute Status',
            ColumnCode: 23,
            ColumnType: 'Dispute',
          },
          {
            ColumnName: 'Dispute Comments',
            ColumnCode: 24,
            ColumnType: 'Dispute',
          },
        ],
      },
    ];
  }

  getFields(event: any, columnDetails: any) {
    // console.log(columnDetails);
    if (event.checked) {
      this.chipsSelection.push(columnDetails);
    } else {
      let index = this.chipsSelection.findIndex(
        (R) => R.ColumnCode == columnDetails.ColumnCode
      );
      if (index > -1) {
        this.chipsSelection.splice(index, 1);
      }
    }
    console.log(this.chipsSelection);
  }

  getSourceDetails(event: any) {}

  openFilterPanel(divName?: string) {
    this.isFiledOpen = false;
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
    // if (divName === 'divA') {
    //   this.animationState = this.animationState === 'out' ? 'in' : 'out';
    //   console.log(this.animationState);
    // }
  }
  openFieldPanel(divName?: string) {
    this.isFilterPanelOpen = false;
    this.isFiledOpen = !this.isFiledOpen;
    // if (divName === 'divA') {
    //   this.animationState = this.animationState === 'out' ? 'in' : 'out';
    //   console.log(this.animationState);
    // }
  }

  showChips() {
    this.isFiledOpen = false;
    this.isFilterPanelOpen = false;
  }

  removeChipList(data: any) {
    const index = this.chipsSelection.indexOf(data);

    if (index >= 0) {
      this.chipsSelection.splice(index, 1);
    }
  }

  //Filter Chips
  
}
