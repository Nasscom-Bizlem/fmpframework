export class WhatsupSms {
    

        MessageType: string;
        AccountName: string;
        Url: string;
        Key: string;
        Number: string;
        Campaign: string;
        AccountType: string;
        RouteId :string;
        AuthToken :string;
        UserId: string;
        Id:number;
}


export class WhatsappsmsRootModel{
    ResponseCode:number;
    ResponseMessage:string;
    whatsupSmsList:WhatsupSms[]
    }
    
export class WhatsappsmsSaveModel{
        ResponseCode:number;
        ResponseMessage:string;
        whatsupSms:WhatsupSms;
   }
export class WhatsappsmsEditModel{
        ResponseCode:number;
        ResponseMessage:string;
        dbWhatsupSms:WhatsupSms;
        }