export class FieldDataModelInvoice {
  ColumnName: string;
  ColumnCode: number;
  ColumnType: string;
}

export class FieldDataModelTransaction {
  ColumnName: string;
  ColumnCode: number;
  ColumnType: string;
}
export class FieldDataModelSettlement {
  ColumnName: string;
  ColumnCode: number;
  ColumnType: string;
}
export class FieldDataModelPayment {
  ColumnName: string;
  ColumnCode: number;
  ColumnType: string;
}

// export class FieldDataModelSettlement {
//   ColumnName: string;
//   ColumnCode: number;
//   ColumnType: string;
// }
export class FieldDataModelDispute {
  ColumnName: string;
  ColumnCode: number;
  ColumnType: string;
}
export class FieldDataModelRoot {
  Invoice: FieldDataModelInvoice[];
  Transaction: FieldDataModelTransaction[];
  Settlement: FieldDataModelSettlement[];
  Payment: FieldDataModelPayment[];
  Dispute: FieldDataModelDispute[];
}

// export class fieldDataModel {
//   Payments: FieldControlModel[];
//   Transaction: FieldControlModel[];
//   Invoice: FieldControlModel[];
//   payments: FieldControlModel[];
//   Settlement: FieldControlModel[];
//   Disputes: FieldControlModel[];
// }
