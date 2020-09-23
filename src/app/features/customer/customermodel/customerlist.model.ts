export class CustomerListModel {
  Id: number;
  UserId: string;
  Password: string;
  Name: string;
  MobileNumber: string;
  EmailId: string;
  UserStatus: string;
  Company: string;
  CustomerId ?: string;
  AtDate: string;
  ManagerId: string;
  LastName: string;
}

export class CustomersListRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  users: CustomerListModel[];
}

//Later Will Change

export class CustomerAddress {
  Id?: number;
  Address1: string;
  CustomerId ?: string;
  City: string;
  Country: string;
  PinCode: string;
  AtDate: string;
}

export class CustomerContact {
  Id?: number;
  PhoneNumber: string;
  ContactType: string;
  CustomerId ?: string;
}

export class CustomerFinnanceSettings {
  Id: number;
  BankAccount: string;
  CustomerId ?: string;
  BankName: string;
}

export class CustomerListNewModel {
  Id: number;
  Name: string;
  CustomerId?: string;
  ProfileImage: string;
  AtDate: string;
  Email: string;
  ManagerId: string;
  TeamSpaceName: string;
  TeamSpaceId: string;
  customerAddresses: CustomerAddress[];
  customerContacts: CustomerContact[];
  customerFinnanceSettings: CustomerFinnanceSettings;
}

export class CustomerListNewRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customer: CustomerListNewModel;
}
export class CustomerListManagerRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customers: CustomerListNewModel;
}
