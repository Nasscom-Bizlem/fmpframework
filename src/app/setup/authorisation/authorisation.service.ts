import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import { SettingRoleModel, SettingRoleRootModel, UpdateSettingRoleRootModel } from './settings-model/setting-role-model.model';
import { catchError } from 'rxjs/operators';
import { SettingTeamSpaceModel, SettingTeamSpaceRootModel, UpdateSettingTeamSpaceRootModel } from './settings-model/setting-team-space-model.model';
import { SettingUserModel, SettingUserRootModel } from './settings-model/setting-user-model.model';
import { SettingAllocationModel, SettingAllocationRootModel } from './settings-model/setting-allocation-model.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) { }

  public addRoleData(data: SettingRoleModel) {
    return this.http
      .post<any>(this.globalConstants.addRoles, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }

 /*  public getRoleList() {
    return this.http
      .post<SettingRoleRootModel>(
        this.globalConstants.getRolesList,'')
        .pipe(catchError(this.baseAuthSercvice.handleError));
  } */

  public getRoleList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<SettingRoleRootModel>(
        this.globalConstants.getRolesList,params)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }


  public deleteRole(data: any) {
    //console.log("deleteNotePassedData:: "+JSON.stringify(data));
    return this.http
      .post<any>(this.globalConstants.RolesDelete, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }


  public editRole(data: any) {
    return this.http
      .post<UpdateSettingRoleRootModel>(this.globalConstants.editRoles, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //teamspace 

  public addTeamSpaceData(data: SettingTeamSpaceModel) {
    return this.http
      .post<any>(this.globalConstants.addTeamspace, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }
  public getTeamSpaceList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<SettingTeamSpaceRootModel>(
        this.globalConstants.getTeamSpaceList,params)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editTeamSpace(data: any) {
    return this.http
      .post<UpdateSettingTeamSpaceRootModel>(this.globalConstants.editTeamspace, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  public deleteTeamSpace(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteTeamSpace, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public addTeamMember(data: any) {
    return this.http
      .post<any>(this.globalConstants.addTeamMember, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public deleteTeamMember(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteTeamMember, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  
  //users

  public addUserData(data: SettingUserModel) {
    return this.http
      .post<any>(this.globalConstants.addUser, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }
  public getUsersList(customerId: any) {
    let params = new HttpParams().set('managerId', customerId);
    return this.http
      .post<SettingUserRootModel>(
        this.globalConstants.getUsersList,params)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  public deleteUsers(data: any) {
    return this.http
      .post<any>(this.globalConstants.deleteUsers, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //Allocation

  public addAllocationData(data: SettingAllocationModel) {
    return this.http
      .post<any>(this.globalConstants.addAllocation, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));    
  }
  public getAllocationList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<SettingAllocationRootModel>(
        this.globalConstants.getAllocationList,params)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }
  public getUsersInfoList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<any>(    //SettingUserRootModel
        this.globalConstants.getUsersInfo,params)
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public editUsers(data: any) {
    return this.http
      .post<any>(this.globalConstants.editUsers, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getPluginNameAndPermissions() {
    return this.http
      .post<any>(  
        this.globalConstants.getPluginDataAndPermissions,'')
        .pipe(catchError(this.baseAuthSercvice.handleError));
  }
}
