import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { SlideInOutAnimation } from '../recon-animation';
import {
  FieldDisputeModel,
  FieldInvoiceModel,
  FieldPaymentModel,
  FieldSettlementModel,
  FieldsRootModel,
  FieldTransactionModel,
} from '../recon.model';
import { ReconService } from '../recon.service';
import { FieldDataModelRoot } from './recon-field';

@Component({
  selector: 'app-recon-control',
  templateUrl: './recon-control.component.html',
  styleUrls: ['./recon-control.component.scss'],
  animations: [SlideInOutAnimation],
})
export class ReconControlComponent implements OnInit {
  fieldTransactionModel: Array<FieldTransactionModel>;
  fieldPaymentModel: Array<FieldPaymentModel>;
  fieldInvoiceModel: Array<FieldInvoiceModel>;
  fieldSettlementModel: Array<FieldSettlementModel>;
  fieldDisputeModel: Array<FieldDisputeModel>;

  selected = 'option1';
  isFilterPanelOpen = false;
  animationState = 'out';
  isFiledOpen = false;
  columnFields = [];

  chipsSelection = [];

  filterChipsSelection = [];

  constructor(private reconService: ReconService,private uiService:UiService) {}

  ngOnInit(): void {
    this.getReconFields();
  }

  getFields(event: any, columnDetails: any) {
    // console.log(columnDetails);
    if (event.checked) {
      this.chipsSelection.push(columnDetails);
    } else {
      let index = this.chipsSelection.findIndex(
        (R) => R.Id == columnDetails.Id
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
    this.uiService.reconColumnFieldEmitter.emit(this.chipsSelection);
  }

  removeChipList(data: any) {
    const index = this.chipsSelection.indexOf(data);

    if (index >= 0) {
      this.chipsSelection.splice(index, 1);
    }
    this.uiService.reconColumnFieldEmitter.emit(this.chipsSelection);
  }

  //Filter Chips
  getReconFields() {
    //getReconFieldResponse
    this.reconService.getAllFields().subscribe((res) => {
      console.log(res);
      this.fieldTransactionModel = res.Transaction.Transaction;
      this.fieldPaymentModel = res.Payment.Payment;
      this.fieldDisputeModel = res.Dispute.Dispute;
      this.fieldInvoiceModel = res.Invoice.Invoice;
      this.fieldSettlementModel = res.Settlement.Settlement;
      this.columnFields = [
        { Transaction: this.fieldTransactionModel },
        { Payment: this.fieldPaymentModel },
        { Settlement: this.fieldSettlementModel },
        { Invoice: this.fieldInvoiceModel },
        { Dispute: this.fieldDisputeModel },
      ];
      console.log(this.columnFields);
      this.uiService.reconColumnFieldEmitter.emit(this.fieldTransactionModel);
    });
  }
}
