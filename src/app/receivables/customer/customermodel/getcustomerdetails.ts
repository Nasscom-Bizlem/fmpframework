export class CustomerAddressModel {
  Id: number;
  Address1: string;
  CustomerId: string;
  City: string;
  Country: string;
  PinCode: string;
  AtDate: string;
}

export class CustomerModel {
  Id: number;
  Name: string;
  CustomerId: string;
  ProfileImage: string;
  AtDate: string;
  Email: string;
  customerAddresses: CustomerAddressModel[];
  customerContacts: any[];
}

export class CustomerDetailsModel {
  ResponseCode: number;
  ResponseMessage: string;
  customer: CustomerModel;
}
