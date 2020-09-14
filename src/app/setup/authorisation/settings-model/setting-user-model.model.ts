export class SettingUserModel {

    UserId: string;  //Login user
    Password: string;
    Name: string;  //FirstName
    Id:number;
    LastName: string;
    MobileNumber: string;
    EmailId: string;
    UserStatus: string;
    ManagerId: string; //  same as customerID
    ConfrimPassword: string; 
    AtDate: string;
    UserType: string;
    generatePassword: string;
    ChangePasswordNextLogin: string;

}

export class SettingUserRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    users: SettingUserModel[];
}