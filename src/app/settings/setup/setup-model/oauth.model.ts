export class OAuth {
    UserId: string;
    Name: string;
    Url: string;
    Id:number;
    oauthFile:string;
    FilePath:string;
    fileName:string;
}

export class OAuthRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    oAuthsList: OAuth[];
  }

  export class UpdateOAuthRootModel{
    ResponseCode: number;
    ResponseMessage: string;
    oAuthsList:OAuth;
  }

  export class OAuthListModel {
    Id: number;
    FilePath: string;
    Url: string;
    Name: string;
    UserId: string;
    AtDate: string;
  }