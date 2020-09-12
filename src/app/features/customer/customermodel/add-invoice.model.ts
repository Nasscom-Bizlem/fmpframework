export class Payment {
  Card: string;
  Bank: string;
}

export class Product {
  ProductName: string;
  Description: string;
  qty: number;
  unitPrice: number;
  Amount: number;
}
export class AddressModel {
  Address1: string;
  City: string;
  Country: string;
}
export class AddInvoiceModel {
  Email: string;
  Type?: string;
  InvoiceNumber: string;
  Address: AddressModel[];
  CustomerNumber?: string;
  PaymentMethod: Payment[];
  Terms: string;
  InvoiceDate: string;
  InvoiceDueDate: string;
  Products: Product[];
  InvoiceMessage: string;
  InvoiceStatement: string;
  CustomerId: string;
  totalSum: number;
}
// -----------------------------------------------------------------------------------
export class InvoiceCustomerModel {
  Id?: number;
  Name: string;
  CustomerId?: string;
  AtDate?: string;
  email: string;
  ManagerId: string;
  TeamSpaceName: string;
  TeamSpaceId: string;
}

export class ProductsModel {
  Id?: number;
  InvoiceNumber: string;
  CustomerId?: string;
  Qty: number;
  ProductName: string;
  Description:string;//New Added
  UnitPrice: number;
  Amount: number;
  AtDate?: string;
}
// Amount: "$4.00"
// Description: "test"
// ProductName: "test"
// qty: 1
// unitPrice: 44
export class InvoiceDetailModel {
  Id: number;
  InvoiceNumber: string;
  InvoiceDate: string;
  DueDate: string;
  Terms: string;
  AtDate: string;
  CustomerId?: string;
  Location:string;
  Amount: number;
  ServiceDate?: string;
  customer: InvoiceCustomerModel;
  InvoiceMessage: string;
  InvoiceStatement: string;
  Products: ProductsModel[];
}

export class InvoiceRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  invoiceDetail: InvoiceDetailModel;
}
