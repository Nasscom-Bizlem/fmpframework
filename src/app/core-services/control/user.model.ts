export class UserModel {
  Id: number;
  UserId: string;
  Password: string;
  Name: string;
  MobileNumber: string;
  EmailId: string;
  UserStatus: string;
  Company: string;
  AtDate: string;
}

export class UserBaseModel {
  ResponseCode: string;
  ResponseMessage: string;
  User: UserModel;
}
