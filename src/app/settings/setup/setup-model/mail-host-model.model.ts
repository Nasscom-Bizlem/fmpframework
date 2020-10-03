export class MailHostModel {
    User: string;
    OutboundMail: string;
    MailLimit: string;
    Id:number;
    Sms: string;
    SmsLimit: string;
    Whatsup: string;
    WhatsupLimit: string;
    UserId: string;
}

export class MailHostRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    mailHosts: MailHostModel[];
    mailhost:MailHostModel;
  }

  export class UpdateMailHostRootModel{
    ResponseCode: number;
    ResponseMessage: string;
    mailHost:MailHostModel;
  }

  export class getArrayData {
    //data: Reminder[];
    deleteMailHost: Array<MailHostModel> = [];
}
