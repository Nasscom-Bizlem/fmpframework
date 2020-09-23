export class SettingRoleModel {

    RoleName: string;
    PluginName: string;
    Permissions: string;
    Id:number;
    CustomerId: string;

}

export class SettingRoleRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    appRoles: SettingRoleModel[];
  }

  export class UpdateSettingRoleRootModel{
    ResponseCode: number;
    ResponseMessage: string;
    appRole: SettingRoleModel
  }