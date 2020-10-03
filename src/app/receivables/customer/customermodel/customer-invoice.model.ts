export class InvoiceDetailsModel {
  Id: number;
  InvoiceNumber: string;
  InvoiceDate: string;
  DueDate: string;
  Terms: string;
  Location: string;
  Memo: string;
  Product: string;
  AtDate: string;
  Description: string;
  CustomerId: string;
  ItemQuantity: number;
  ItemRate: number;
  ServiceDate: string;
}

export class CustomerInvoiceRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  invoiceDetailses: InvoiceDetailsModel[];
}
export class UpdateCustomerInvoiceRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  dispute: InvoiceDetailsModel;
}
