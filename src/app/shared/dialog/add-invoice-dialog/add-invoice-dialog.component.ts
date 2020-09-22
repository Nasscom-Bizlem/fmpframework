import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';
import { PopoverService } from '../../popover/popover.service';
import { PopoverRef } from '../../popover/popover-ref';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { DatePipe, CurrencyPipe } from '@angular/common';
import {
  InvoiceCustomerModel,
  InvoiceDetailModel,
} from 'src/app/receivables/customer/customermodel/add-invoice.model';
import { CustomerService } from 'src/app/receivables/customer/customer.service';

@Component({
  selector: 'app-add-invoice-dialog',
  templateUrl: './add-invoice-dialog.component.html',
  styleUrls: ['./add-invoice-dialog.component.scss'],
})
export class AddInvoiceDialogComponent implements OnInit {
  planModel: any = { start_time: new Date() };
  planDueModel: any = { start_time: new Date() };
  customerListModel: Array<any>; //Array<CustomerListNewModel>;
  // customerAddress: string = '';
  email: string = '';
  termsValue = 'Net30';
  overlayRef: OverlayRef;
  customerId: string;
  @ViewChild('overlayTemplate') overlayTemplate: TemplatePortalDirective;

  serviceCollection = [];
  invoiceMessage: string = '';
  invoiceStatement: string = '';

  // addForm: FormGroup;
  productForm: FormGroup;
  totalSum: number = 0;
  myFormValueChanges$;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddInvoiceDialogComponent>,
    private formBuilder: FormBuilder,
    private overlay: Overlay,
    private popper: PopoverService,
    private customerService: CustomerService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    console.log(this.data.invoiceNumber);
    this.showCustomersList();

    this.productForm = this.formBuilder.group({
      Products: this.formBuilder.array([
        // load first row at start
        this.getProductCollection(),
      ]),
    });
    this.myFormValueChanges$ = this.productForm.controls[
      'Products'
    ].valueChanges;
    this.myFormValueChanges$.subscribe((units) =>
      this.updateTotalUnitPrice(units)
    );
  }
  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
  }

  get ArrayControls() {
    // return (this.productForm.get('Products') as FormArray).controls;
    return (<FormArray>this.productForm.get('Products')).controls as Array<
      FormGroup
    >;
  }

  get ArrayControlsLength() {
    return (this.productForm.get('Products') as FormArray).controls.length;
  }
  cards: string;
  banks: string;
  bank(event: any) {
    console.log(event);
    this.banks = event;
  }
  card(event: any) {
    console.log(event);
    this.cards = event;
  }

  getTerms(event: any) {
    this.termsValue = event.value;
  }

  save(model: any, isValid: boolean, e: any) {
    debugger;
    // customerAddress: string = '';
    // customerAddressCity: string = '';
    // customerAddressCountry: string = '';

    // let addressObj = new AddressModel();
    // addressObj.Address1 = this.customerAddress;
    // addressObj.City = this.customerAddressCity;
    // addressObj.Country = this.customerAddressCountry;
    //  {
    //   Address1: this.customerAddress,
    //   City: this.customerAddressCity,
    //   Country: this.customerAddressCountry,
    // };
    // addInvoiceModel.Address = [];
    // addInvoiceModel.Address.push(addressObj);
    // addInvoiceModel.CustomerId = this.customerId;
    // addInvoiceModel.Email = this.email;
    // addInvoiceModel.InvoiceDate = this.invoiceDate;
    // addInvoiceModel.InvoiceDueDate = this.dueInvoiceDate;
    // addInvoiceModel.InvoiceMessage = this.invoiceMessage;
    // addInvoiceModel.InvoiceNumber = this.data.invoiceNumber;
    // addInvoiceModel.InvoiceStatement = this.invoiceStatement;
    // addInvoiceModel.totalSum = this.totalSum;
    // let paymentMethodobj = {
    //   Card: this.cards,
    //   Bank: this.banks,
    // };
    // addInvoiceModel.PaymentMethod = [];
    // addInvoiceModel.PaymentMethod.push(paymentMethodobj);
    // addInvoiceModel.Terms = this.termsValue;

    // Id: number;
    // InvoiceNumber: string;
    // InvoiceDate: string;
    // DueDate: string;
    // Terms: string;
    // AtDate: string;
    // CustomerId?: string;
    // Location:string;
    // Amount: number;
    // ServiceDate?: string;
    // customer: InvoiceCustomerModel;
    // InvoiceMessage: string;
    // InvoiceStatement: string;
    // Products: ProductsModel[];

    let addInvoiceModel = new InvoiceDetailModel();
    addInvoiceModel.Amount = this.totalSum;
    addInvoiceModel.CustomerId = this.invoiceCustomerModel.CustomerId;
    addInvoiceModel.DueDate = this.dueInvoiceDate;
    addInvoiceModel.InvoiceDate = this.invoiceDate;
    addInvoiceModel.InvoiceMessage = this.invoiceMessage;
    addInvoiceModel.InvoiceStatement = this.invoiceStatement;
    addInvoiceModel.InvoiceNumber = this.data.invoiceNumber;
    addInvoiceModel.customer = this.invoiceCustomerModel;
    addInvoiceModel.Terms = this.termsValue;
    // customerAddress: string = '';
    // customerAddressCity: string = '';
    // customerAddressCountry: string = '';
    addInvoiceModel.Location =
      this.customerAddress +
      ',' +
      this.customerAddressCity +
      ',' +
      this.customerAddressCountry;
    addInvoiceModel.Products = model.Products;

    console.log(JSON.stringify(addInvoiceModel));
    this.dialogRef.close(addInvoiceModel);
    // e.preventDefault();
    // alert('Form data are: ' + JSON.stringify(model));/
  }
  private getProductCollection() {
    const numberPatern = '^[0-9.,]+$';
    return this.formBuilder.group({
      ProductName: ['', Validators.required],
      Description: ['', Validators.required],
      Qty: [1, [Validators.required, Validators.pattern(numberPatern)]],
      UnitPrice: ['', [Validators.required, Validators.pattern(numberPatern)]],
      Amount: [{ value: '', disabled: false }],
    });
  }
  addUnit() {
    const control = <FormArray>this.productForm.controls['Products'];
    control.push(this.getProductCollection());
  }

  removeUnit(i: number) {
    const control = <FormArray>this.productForm.controls['Products'];
    control.removeAt(i);
  }
  clearAllUnits() {
    const control = <FormArray>this.productForm.controls['Products'];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
    control.push(this.getProductCollection());
  }

  addSomeUnitsFromArrayExample() {
    debugger;
    const unitsArray = [];
    const control = <FormArray>this.productForm.controls['Products'];
    for (let i = 1; i < unitsArray.length; i++) {
      control.push(this.getProductCollection());
    }
    this.productForm.patchValue({ units: unitsArray });
  }

  private updateTotalUnitPrice(units: any) {
    const control = <FormArray>this.productForm.controls['Products'];
    this.totalSum = 0;
    for (let i in units) {
      let totalUnitPrice = units[i].Qty * units[i].UnitPrice;
      let totalUnitPriceFormatted = this.currencyPipe.transform(
        totalUnitPrice,
        'USD',
        'symbol-narrow',
        '1.2-2'
      );
      control
        .at(+i)
        .get('Amount')
        .setValue(totalUnitPriceFormatted, {
          onlySelf: true,
          emitEvent: false,
        });
      this.totalSum += totalUnitPrice;
    }
  }

  invoiceDate: any;
  dateChanged(evt) {
    let selectedDate = new Date(evt);
    this.invoiceDate = this.datePipe.transform(
      new Date(evt),
      'yyyy-MM-dd HH:mm:ss'
    );

    console.log('dateFieldValue', this.invoiceDate);
    // console.log('by UTCString:', selectedDate.toUTCString());
    // console.log('by LocaleString:', selectedDate.toLocaleString());
    // console.log('by LocaleTimeString:', selectedDate.toLocaleTimeString());
  }
  dueInvoiceDate: any;
  dueDateChanged(evt) {
    let selectedDate = new Date(evt);
    this.dueInvoiceDate = this.datePipe.transform(
      new Date(evt),
      'yyyy-MM-dd HH:mm:ss'
    );

    console.log('dueDateFieldValue', this.dueInvoiceDate);
    // console.log('by UTCString:', selectedDate.toUTCString());
    // console.log('by LocaleString:', selectedDate.toLocaleString());
    // console.log('by LocaleTimeString:', selectedDate.toLocaleTimeString());
  }

  show(content: TemplateRef<any>, origin, className: string) {
    const ref = this.popper.open<{ skills: number[] }>({
      content,
      //  content: 'Hello world!',
      // content: InsidePopoverComponent,
      origin,
      className: className,
      width: '200px',
      data: {
        skills: [1, 2, 3],
      },
    });

    ref.afterClosed$.subscribe((res) => {
      console.log(res);
    });
  }

  showCustomersList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.customerService
      .getUserCustomerList(customer.CustomerId)
      .subscribe((res) => {
        this.customerListModel = res.customers;
      });
  }
  customerAddress: string = '';
  customerAddressCity: string = '';
  customerAddressCountry: string = '';
  invoiceCustomerModel: InvoiceCustomerModel;
  getCustomerDetails(event: any) {
    this.invoiceCustomerModel = JSON.parse(JSON.stringify(event.value));
    console.log(this.invoiceCustomerModel);
    this.email = event.value.Email;
    this.customerAddress = event.value.customerAddresses[0].Address1;
    this.customerAddressCity = event.value.customerAddresses[0].City;
    this.customerAddressCountry = event.value.customerAddresses[0].Country;
  }

  //this.invoiceDate
  // this.dueInvoiceDate
  //this.customerAddress
  //this.customerAddressCity
  //this.customerAddressCountry
  isFieldEnabled = false;
  addService() {
    this.isFieldEnabled = true;
  }

  // onDeleteRow(rowIndex) {
  //   let rows = this.addForm.get('rows') as FormArray;
  //   rows.removeAt(rowIndex)
  // }

  // initGroup() {
  //   let rows = this.addForm.get('rows') as FormArray;
  //   rows.push(this.fb.group({
  //     description: [null, Validators.required],
  //     pickup_area: [null, Validators.required],
  //     pickup_time: [null, Validators.required],
  //     sign_board: [null, Validators.required],
  //   }));
  //   console.log(this.addForm.value);
  // }
}
