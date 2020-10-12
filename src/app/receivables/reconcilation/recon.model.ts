export class FieldTransactionModel {
  Id: number;
  ColumnName: string;
  ColumnType: string;
}
export class FieldPaymentModel {
  Id: number;
  ColumnName: string;
  ColumnType: string;
}
export class FieldInvoiceModel {
  Id: number;
  ColumnName: string;
  ColumnType: string;
}
export class FieldSettlementModel {
  Id: number;
  ColumnName: string;
  ColumnType: string;
}

export class FieldDisputeModel {
  Id: number;
  ColumnName: string;
  ColumnType: string;
}
export class FieldsRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  Transaction: FieldTransactionModel[];
  Payment: FieldPaymentModel[];
  Invoice: FieldInvoiceModel[];
  Settlement: FieldSettlementModel[];
  Dispute: FieldDisputeModel[];
}
// -------------------------------------------------------------------------------

export interface TransactionDataArrayList {
  DebtParty: string;
  TransactionNo: string;
  OrderTransaction: string;
  TransactionRef: string;
  CreditParty: string;
  TransactionType: string;
}

export interface RootObject {
  ResponseCode: number;
  ResponseMessage: string;
  TransactionDataArrayList: TransactionDataArrayList[];
}
