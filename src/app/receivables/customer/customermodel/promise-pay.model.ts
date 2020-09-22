export class PromisePayModel {
  Id?: number;
  CustomerName: string;
  ExpectedDate: string;
  Description: string;
  RelatedTo: string;
  PaymentMethod: string;
  CustomerId: string;
}

export class GetPromisePayRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerPromiseToPays: PromisePayModel[];
}
export class SaveUpdateCusProPayRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerPromiseToPay: PromisePayModel;
}
