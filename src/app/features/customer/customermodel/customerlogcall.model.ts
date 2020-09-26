export class CustomerLogACallModel {
  Id: number;
  Subject: string;
  Comments: string;
  Name: string;
  RelatedTo: string;
  AtDate: string;
  CustomerId: string;
  Type?: string;
  InvoiceNumber?: string ;
}

// export interface CustomerLogCallListModel {
//   Id: number;
//   Subject: string;
//   Comments: string;
//   Name: string;
//   RelatedTo: string;
//   AtDate: string;
//   CustomerId: string;
// }

export class LogACallRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  CustomerLogCallList: CustomerLogACallModel[];
}

export class LogACallAddRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerLogCall: CustomerLogACallModel;
}
