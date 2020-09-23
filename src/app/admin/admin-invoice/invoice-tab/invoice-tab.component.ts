import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-tab',
  templateUrl: './invoice-tab.component.html',
  styleUrls: ['./invoice-tab.component.scss'],
})
export class InvoiceTabComponent implements OnInit {
  customerId: number;
  InvoiceIDs: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.customerId = res.CustomerId;
      this.InvoiceIDs = res.InvoiceID;
    });
  }
}
