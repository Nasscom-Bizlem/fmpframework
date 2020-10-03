import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from 'src/app/features/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-invoice',
  templateUrl: './admin-invoice.component.html',
  styleUrls: ['./admin-invoice.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminInvoiceComponent implements OnInit {
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
    this.customerService
      .getInvoiceDetails(customerId, invoiceNumber)
      .subscribe((res) => {
        this.invoiceDetail = res.invoiceDetail;
        console.log(this.invoiceDetail);
      });
  }
}
