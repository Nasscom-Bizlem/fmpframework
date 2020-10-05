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

export class AppOAuthSettings {
    public static API_ENDPOINT='http://127.0.0.1:6666/api/';
    public static currentWindowUrl='http://localhost:4200/setup';
    public static code ='code';
    public static GMAIL ='GMAIL';
    public static OUTLOOK ='OUTLOOK';
    public static client_id_key ='client_id';
    public static client_id ='350043906139-infkug7o8lu33pvo0ak3l4accic1guqo.apps.googleusercontent.com';
    public static client_secret_key ='client_secret';
    public static client_secret ='rWSaS6LZA_VZSTGe7UzSoS9l';
    public static grant_type_key ='grant_type';
    public static authorization_code ='authorization_code';
    public static redirect_uri_key ='redirect_uri';
    public static redirect_uri ='http://localhost:4200/setup/email';
    public static gmailOAuthApi ='https://www.googleapis.com/oauth2/v4/token';
 }