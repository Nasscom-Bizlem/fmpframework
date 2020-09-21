export class SettingTeamSpaceModel {

    Name: string;
    Status: string;
    TeamSpaceMember: string;
    Id: number;
    UserId: string;  //CustomerId (same)
    Description: string;

}

export class SettingTeamSpaceRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    teamSpaces: SettingTeamSpaceModel[];
}

export class UpdateSettingTeamSpaceRootModel {
    ResponseCode: number;
    ResponseMessage: string;
    teamSpace: SettingTeamSpaceModel;
}