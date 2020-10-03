export class CustomerTaskModel {
  Subject: string;
  // RelateTo: string;
  AssignedTo: string;
  Status: string;
  CustomerId: string;
  Name: string;
  Id: number;
  AtDate: string;
  Type?: string;
  InvoiceNumber?: string ;
}
export interface CustomerTaskRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  taskList: CustomerTaskModel[];
}


export interface CustomerTaskAddModel {
  ResponseCode: number;
  ResponseMessage: string;
  task: CustomerTaskModel;
}
