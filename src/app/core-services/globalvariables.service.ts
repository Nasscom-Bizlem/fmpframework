import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalvariablesService {
  constructor(private router: Router) {}

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

  incentiveHomeTabs = [
    {
      name: 'Home'
    },
    {
      name: 'Status'
    },
    { name: 'Dashboard' },
  ];

  navigateToPath(path: any) {
    this.router.navigate([`${path}`]);
    //admin
  }
}
