import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalvariablesService {
  constructor() {}
  FieldLabel = ['Transaction', 'Invoice', 'Payment', 'Dispute', 'Settlement'];
  FieldColumn = [
    'Order Transaction',
    'Debt Party',
    'Transaction Ref',
    'Transaction No',
    'Credit Party',
    'Transaction Type',
    'Bank Name',
    'Bank Charge',
    'Probability Percentage',
    'Bank Code',
    'Currency',
    'Currency Code',
    'Invoice Date',
    'Invoice No',
    'Invoice Amount',
    'Settlement Percentage',
    'Total Settlement Value',
    'Settlement Amount',
    'Settlement Invoice No',
    'Dispute Date',
    'Dispute Type',
    'Dispute Status',
    'Dispute Comments',
  ];

  isCustomerEdit: boolean = false;
}
