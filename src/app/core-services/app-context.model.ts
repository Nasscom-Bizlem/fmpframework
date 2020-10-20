export class ViewPermission {
  id: number;
  viewLabel: string;
  viewValue: string;
  viewScreen: string;
  customerId: string;
}

export class AppContextPermissionModel {
  viewPermission: ViewPermission[];
}
