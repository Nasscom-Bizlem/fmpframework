import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UiService } from 'src/app/shared/ui.service';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  customerId: string = '';
  InvoiceID: string = '';
  invoiceDetail: any;
  constructor(
    private uiService: UiService,
    private dialgService: DialogService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      if (!!res) {
        console.log(res);
        this.customerId = res.CustomerId;
        this.InvoiceID = res.InvoiceID;
        console.log(this.customerId);
        this.getInvoiceDetails(this.customerId, this.InvoiceID);
        // this.getCustomerInformation(this.customerId);
      } else {
        // this.router.navigate(['notfound']);
        // this.router.navigate(['/customerdashboard']);
      }
    });
  }
  //getInvoiceDetails
  getInvoiceDetails(customerId: string, invoiceNumber: string) {
    debugger;
    this.customerService
      .getInvoiceDetails(customerId, invoiceNumber)
      .subscribe((res) => {
        this.invoiceDetail = res.invoiceDetail;
        console.log(this.invoiceDetail);
      });
  }
}
