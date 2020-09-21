export class SettingAllocationModel {

    TeamSpaceId: string;
    ApproleId: string;
    Id:number;
    CustomerId: string;
    ManagerId: string;

}
export class SettingAllocationRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    teamSpaceRoleAllocations: SettingAllocationModel[];
}