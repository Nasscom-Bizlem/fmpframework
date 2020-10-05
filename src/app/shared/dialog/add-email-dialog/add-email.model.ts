export class AddEmail {
    Hostname: string;
    Username: string;
    Password: string;
    UserId: string;
    Id:number;
}
export class ListEmailRootModel{
ResponseCode:number;
ResponseMessage:string;
emailSettings:AddEmail[]
}

export class EditEmailRootModel{
    ResponseCode:number;
    ResponseMessage:string;
    emailSetting:AddEmail;
}

export class SaveEmailRootModel{
    ResponseCode:number;
    ResponseMessage:string;
    emailSetting:AddEmail;
}
export class getoAuthsListRootModel{
    ResponseCode:number;
    ResponseMessage:string;
    oAuthsList:oAuthsData[];
}

export class oAuthsData {
    Id:number;
    FilePath:string;
    Url:string;
    Name:string;
    UserId:string;
    AtDate:string;
}

export class saveAuthToken{
    AccessToken :string;
    RefreshToken:string;
    TokenType:string;
    UserId:string;
    ClientSecret:string;
    AuthCode:string;
    RedirectUrl:string;

}