export class CustomerDisputeModel {
  Subject: string;
  CustomerId: string;
  Priority: string;
  ContactName: string;
  LastActivity: string;
  Owner: string;
  Id: number;
  Type?: string;
  InvoiceNumber?: string;
}

export class CustomerDisuteRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  disputesList: CustomerDisputeModel[];
}

////
export class UpdateCustomerDisuteRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  dispute: CustomerDisputeModel;
}
