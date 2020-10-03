export class CustomerEventModel {
  Id?: number;
  Subject: string;
  StartDate: string;
  StartTime: string;
  EndDate: string;
  EndTime: string;
  AllDayEvent: string;
  Name: string;
  RelatedTo: string;
  AssignedTo: string;
  Location: string;
  CustomerId: string;
  Type?: string;
  InvoiceNumber?: string ;
}

// export class CustomerEvent {
//   Id: number;
//   Subject: string;
//   StartDate: string;
//   StartTime: string;
//   EndDate: string;
//   EndTime: string;
//   AllDayEvent: string;
//   Name: string;
//   RelatedTo: string;
//   AssignedTo: string;
//   Location: string;
//   AtDate: string;
//   CustomerId: string;
// }
export class CustomerEventListRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerEventsList: CustomerEventModel[];
}

export class CustomerEventRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerEvent: CustomerEventModel;
}
