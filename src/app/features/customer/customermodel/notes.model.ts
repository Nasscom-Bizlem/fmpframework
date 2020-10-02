export class NotesModel {
  Id: number;
  Title: string;
  Description: string;
  CreatedBy: string;
  LastModified: string;
  LastModifiedBy: string;
  AtDate: string;
  CustomerId: string;
  Type?: string;
  InvoiceNumber?: string ;
}

export class CustomerNotesListModel {
  Id: number;
  Title: string;
  Description: string;
  CreatedBy: string;
  LastModified: string;
  LastModifiedBy: string;
  AtDate: string;
  CustomerId: string;
  Type?: string;
  InvoiceNumber?: string ;
}

export class CustomerNotesRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  customerNotesList: CustomerNotesListModel[];
}


export class UpdateCustomerNotesRootModel{
  ResponseCode: number;
  ResponseMessage: string;
  customerNote: CustomerNotesListModel
}
