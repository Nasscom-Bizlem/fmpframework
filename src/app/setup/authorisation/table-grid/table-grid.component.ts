import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  EventEmitter,
  ViewChild,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { SettingRoleModel } from '../settings-model/setting-role-model.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SettingTeamSpaceModel } from '../settings-model/setting-team-space-model.model';
import { SettingUserModel } from '../settings-model/setting-user-model.model';
import { formatDate } from '@angular/common';
import { AuthorisationService } from '../authorisation.service';

export interface PeriodicElement {
  firstname: string;
  login: string;
  lastname: string;
  email: string;
  admin: boolean;
  created: string;
  lastconnection: string;
}
export interface PeriodicProjectElement {
  // 'projects', 'role'
  project: string;
  role: string;
  created: string;
}
export interface PeriodicRoleElement {
  role: string;
}
/* export interface PeriodicGroupsElement {
  group: string;
  user: number;
} */

export interface PeriodicGroupsElement {
  name: string;
  description: string;
  members: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    login: 'Abhishek',
    firstname: 'Abhishek',
    lastname: 'Tiwari',
    email: 'geetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Admin',
    firstname: 'Admin',
    lastname: 'Admin',
    email: 'geetanjali@bizlem.come',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Asmita.M',
    firstname: 'Asmita',
    lastname: 'Rane',
    email: 'geetanjali@bizlem.comi',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Abhishek',
    firstname: 'Abhishek',
    lastname: 'Mhatre',
    email: 'geetanjali@bizlem.come',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'geetanjali@bizlem.com',
    firstname: 'geetanjali',
    lastname: 'mailtangy',
    email: 'Bgeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'innovators@gmail.com',
    firstname: 'innovators',
    lastname: 'Agrawal',
    email: 'Cgeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Abhishek1',
    firstname: 'Abhishek1',
    lastname: 'khatri',
    email: 'Ngeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Abhishek2',
    firstname: 'Abhishe12',
    lastname: 'Patwardhan',
    email: 'Ogeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Abhishek3',
    firstname: 'Abhishek22',
    lastname: 'tiwari',
    email: 'Fgeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
  {
    login: 'Abhishek4',
    firstname: 'Abhishek23',
    lastname: 'tiwari',
    email: 'Negeetanjali@bizlem.com',
    admin: true,
    created: '06/13/2019 03:21 PM',
    lastconnection: '06/13/2019 03:21 PM',
  },
];
const PROJECT_ELEMENT_DATA: PeriodicProjectElement[] = [
  {
    project: 'Distribution Master',
    role: 'Manager',
    created: '03/04/2019',
  },
  {
    project: 'Admin',
    role: 'Manager',
    created: '03/04/2019',
  },
  {
    project: 'Brokerage_droll',
    role: 'Developer',
    created: '03/04/2019',
  },
  {
    project: 'CarootRuleSiling',
    role: 'Manager',
    created: '03/04/2019',
  },
  {
    project: 'Test1',
    role: 'Manager',
    created: '03/04/2019',
  },
];
const ROLE_ELEMENT_DATA: PeriodicRoleElement[] = [
  {
    role: 'Manager',
  },
  {
    role: 'Reporter',
  },
  {
    role: 'Developer',
  },
  {
    role: 'Analyst',
  },
  {
    role: 'Non Member',
  },
];

const GROUP_ELEMENT_DATA: PeriodicGroupsElement[] = [

  {
    name: 'Carrot Rule Master',
    description: 'Rule Master',
    members: 'Member1, Member2',
  },
  {
    name: 'Doc Tiger Master',
    description: 'Carrot Rule Master',
    members: 'Member3, Member4',
  },
  {
    name: 'Fetchmypayments.com',
    description: 'Carrot Master',
    members: 'Member5',
  },
  {
    name: 'Master User',
    description: 'Rule Master',
    members: 'Member6, Member7',
  },

  /* {
    group: 'Carrot Rule Master',
    user: 1,
  },
  {
    group: 'Doc Tiger Master',
    user: 2,
  },
  {
    group: 'Fetchmypayments.com',
    user: 3,
  },
  {
    group: 'Master User',
    user: 1,
  }, */
];
@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableGridComponent implements OnInit, OnChanges {

  SettingRoleList: Array<SettingRoleModel> = [];
  SettingTeamSpaceList: Array<SettingTeamSpaceModel> = [];
  SettingUsersList: Array<SettingUserModel> = [];
  arrayMemberData: any = [];
  userJson: any = {};

  //filterSelectObj = [];
  filterValues = {};

  @ViewChild(MatPaginator)
  set paginator(tablePaginator: MatPaginator) {
    if (this.roleDataSource) {
      this.roleDataSource.paginator = tablePaginator;
    }
  }

  @ViewChild(MatSort)
  set sort(tablesort: MatSort) {
    if (this.roleDataSource) {
      this.roleDataSource.sort = tablesort;
    }
  }

  @ViewChild(MatPaginator)
  set paginatorTeamSpace(tablePaginatorTeamSpace: MatPaginator) {
    if (this.groupDataSource) {
      this.groupDataSource.paginator = tablePaginatorTeamSpace;
    }
  }

  @ViewChild(MatSort)
  set sortTeamSpace(tablesortTeamSpace: MatSort) {
    if (this.groupDataSource) {
      this.groupDataSource.sort = tablesortTeamSpace;
    }
  }

  @ViewChild(MatPaginator)
  set paginatorUsers(tablePaginatorUsers: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = tablePaginatorUsers;
    }
  }

  @ViewChild(MatSort)
  set sortUsers(tablesortUsers: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = tablesortUsers;
    }
  }

  pageSize = 20;
  count: number = 0;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  pageSizeTeamSpace = 10;
  countTeamSpace: number = 0;
  pageSizeOptionsTeamSpace: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  pageSizeUsers = 10;
  countUsers: number = 0;
  pageSizeOptionsUsers: number[] = [5, 10, 15, 20, 25, 30, 35, 100];

  roleData = new EventEmitter();
  groupData = new EventEmitter();
  // Object to create Filter for
  filterSelectObj = [
    {
      name: 'Role',
      columnProp: 'RoleName',
      options: []
    }
  ];

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private uiService: UiService,
    private settingsService: AuthorisationService,
    private dialogService: DialogService,
    private changeDetectorRef: ChangeDetectorRef
  ) {


  }
  isAdminUser = true;
  isProject = false;
  isRole = false;
  isGroup = false;

  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = [
    'login',
    'firstname',
    'lastname',
    'email',
    //'admin',
    'created',
    'lastconnection',
    //'edit',
    //'view',
    'delete',
  ];
  projectDisplayedColumns = [
    'project',
    'role',
    'created',
    'archive',
    'copy',
    'delete',
  ];
  roleDisplayedColumns = ['role', 'copy', 'delete'];

  // groupDisplayedColumns = ['group', 'user', 'delete'];
  groupDisplayedColumns = ['name', 'description', 'members', 'edit', 'delete'];

  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<SettingUserModel>;

  projectDataSource = PROJECT_ELEMENT_DATA;
  //roleDataSource = ROLE_ELEMENT_DATA;
  roleDataSource: MatTableDataSource<SettingRoleModel>;
  //groupDataSource = GROUP_ELEMENT_DATA;
  groupDataSource: MatTableDataSource<SettingTeamSpaceModel>;

  ngOnInit(): void {
    this.uiService.displayedColumns.subscribe((res) => {
      if (res === 'user') {
        this.isProject = false;
        this.isRole = false;
        this.isAdminUser = true;
        this.isGroup = false;
      } else if (res === 'project') {
        this.isProject = true;
        this.isRole = false;
        this.isAdminUser = false;
        this.isGroup = false;
      } else if (res === 'groups') {
        this.isProject = false;
        this.isRole = false;
        this.isAdminUser = false;
        this.isGroup = true;
      } else {
        this.isProject = false;
        this.isRole = true;
        this.isAdminUser = false;
        this.isGroup = false;
      }
    });

    if (this.isRole == true) {
      this.getRoleList();

    }
    if (this.isGroup == true) {
      this.getTeamSpaceList();
    }
    if (this.isAdminUser == true) {
      this.getUsersList();

    }

    if (this.isAdminUser == true) {
      /* configure filter */
      //console.log("this.dataSource:: "+this.dataSource);
      if (this.dataSource) {
        this.dataSource.filterPredicate = (data: SettingUserModel, filter: string) => data.UserId.indexOf(filter) != -1;
      }
    }


  }
  // tslint:disable-next-line: typedef
  ngOnChanges() { }

  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Called on Filter change
  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.roleDataSource.filter = JSON.stringify(this.filterValues)
  }


  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      //value.modelValue = undefined;
    })
    this.roleDataSource.filter = "";
  }

  // View Details

  // tslint:disable-next-line: typedef
  viewDetails(uri: string) {
    this.router.navigateByUrl(`/edit/${uri}`);
  }
  // tslint:disable-next-line: typedef
  groupCicked(data: any) {
    this.uiService.isGroupColumnClicked.emit(true);
    this.uiService.roleData.emit({
      groupData: data,
    });
  }

  // tslint:disable-next-line: typedef
  selectRole(data: any) {
    // this.roleData.next(data);
    this.uiService.roleData.emit({
      isRoleClicked: true,
      roleData: data,
    });
  }
  deleteDialog() {
    this.dialogService.delete('Delete').subscribe((res) => {
      console.log(res);
    });
  }

  pageEvent(event) {
    let data = [];
    this.pageSize = event.pageSize;
    let startIndx = event.pageIndex * this.pageSize;
    let endIndx = startIndx + this.pageSize;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.SettingRoleList.length)
        data.push(this.SettingRoleList[i]);
    }
    this.roleDataSource = new MatTableDataSource(data);
    this.roleDataSource.paginator = this.paginator;
    this.roleDataSource.sort = this.sort;
    this.count = this.SettingRoleList.length;
  }

  pageEventTeamSpace(event) {
    let data = [];
    this.pageSizeTeamSpace = event.pageSize;
    let startIndx = event.pageIndex * this.pageSizeTeamSpace;
    let endIndx = startIndx + this.pageSizeTeamSpace;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.SettingTeamSpaceList.length)
        data.push(this.SettingTeamSpaceList[i]);
    }
    this.groupDataSource = new MatTableDataSource(data);
    this.groupDataSource.paginator = this.paginatorTeamSpace;
    this.groupDataSource.sort = this.sortTeamSpace;
    this.countTeamSpace = this.SettingTeamSpaceList.length;
  }

  pageEventUsers(event) {
    let data = [];
    this.pageSizeUsers = event.pageSize;
    let startIndx = event.pageIndex * this.pageSizeUsers;
    let endIndx = startIndx + this.pageSizeUsers;
    for (var i = startIndx; i < endIndx; i++) {
      if (i < this.SettingUsersList.length)
        data.push(this.SettingUsersList[i]);
    }
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginatorUsers;
    this.dataSource.sort = this.sortUsers;
    this.countUsers = this.SettingUsersList.length;
  }

  getRoleList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getRoleList(customer.CustomerId)
      .subscribe((res) => {
        //console.log(res);
        // console.log("getRolelist:: "+JSON.stringify(res));
        this.SettingRoleList = res.appRoles;
        // console.log("this.SettingRoleList:: " + JSON.stringify(this.SettingRoleList));
        this.count = this.SettingRoleList.length;
        this.roleDataSource = new MatTableDataSource(this.SettingRoleList);
        this.roleDataSource.paginator = this.paginator;
        this.roleDataSource.sort = this.sort;

        this.roleDataSource.filterPredicate = this.createFilter();
        this.filterSelectObj.filter((o) => {
          o.options = this.getFilterObject(this.SettingRoleList, o.columnProp);
        });

      });
  }


  deleteRole(element: SettingRoleModel) {
    //console.log("insidedeleteelement:  " + JSON.stringify(element));

    this.settingsService.deleteRole(element).subscribe((roleresponse) => {
      // console.log("deleteapires:  " + JSON.stringify(roleresponse));
      let updatedRoleIndex;
      updatedRoleIndex = this.SettingRoleList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedRoleIndex > -1) {
        this.SettingRoleList.splice(updatedRoleIndex, 1);
        this.SettingRoleList.sort((n1, n2) => n1.Id - n2.Id);
        this.roleDataSource = new MatTableDataSource(this.SettingRoleList);
        this.roleDataSource.paginator = this.paginator;
        this.roleDataSource.sort = this.sort;
        this.count = this.SettingRoleList.length;
      }
    });
  }

  editRole(element) {
    // console.log("insideEditlement:  "+JSON.stringify(element));
    this.dialogService.openRole(element).subscribe((res) => {
      if (res) {
        //console.log("editRes:  " + JSON.stringify(res));
        this.settingsService
          .editRole(res)
          .subscribe((roleresponse) => {
            // console.log("roleresponse:  " + JSON.stringify(roleresponse));
            let updatedRoleIndex;
            updatedRoleIndex = this.SettingRoleList.findIndex(
              (r) => r.Id === roleresponse.appRole.Id
            );
            if (updatedRoleIndex > -1) {
              let noteList = roleresponse.appRole;
              this.SettingRoleList.splice(updatedRoleIndex, 1);
              this.SettingRoleList.push(noteList);
              this.SettingRoleList.sort((n1, n2) => n1.Id - n2.Id);
              this.roleDataSource = new MatTableDataSource(
                this.SettingRoleList
              );
              this.roleDataSource.paginator = this.paginator;
              this.roleDataSource.sort = this.sort;
            }
          });
      }
    });
  }

  /* we will define the type of the an object that will be emitted.*/
  // @Output() public clickedData = new EventEmitter<any>();

  viewUser(element: any) {
    this.uiService.elementdata.next(element);
    //debugger;
    this.router.navigate([`/authorisation/details`], {
      queryParams: { id: element.CustomerId },
    });
  }

  //teamspace

  getTeamSpaceList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getTeamSpaceList(customer.CustomerId)
      .subscribe((res) => {
        //console.log(res);
        // console.log("getTeamSpacelist:: " + JSON.stringify(res));
        this.SettingTeamSpaceList = res.teamSpaces;
        //console.log("this.SettingTeamSpaceList:: "+JSON.stringify(this.SettingTeamSpaceList));
        this.countTeamSpace = this.SettingTeamSpaceList.length;
        this.groupDataSource = new MatTableDataSource(this.SettingTeamSpaceList);
        this.groupDataSource.paginator = this.paginatorTeamSpace;
        this.groupDataSource.sort = this.sortTeamSpace;
      });
  }

  getMembersStr(element) {
    //console.log("elementgetmember:: "+JSON.stringify(element));
    let arrayMemberData = [];
    let arrayMembersList = element.teamSpaceMembers

    if (arrayMembersList instanceof Array) {
      if (arrayMembersList.length > 0) {
        for (var i = 0; i < arrayMembersList.length; i++) {
          let insideArrayJson = arrayMembersList[i];
          if (insideArrayJson.hasOwnProperty("CustomerId")) {
            let singleData = insideArrayJson.CustomerId
            arrayMemberData.push(singleData);
          }
        }
      }
    } else {
      arrayMembersList = element.TeamSpaceMember
      //console.log("arrayMembersList:: "+arrayMembersList);
      let spliteData = arrayMembersList;
      //console.log("spliteData:: "+spliteData);
      var splits = spliteData.split(",");
      for (var i = 0; i < splits.length; i++) {
        arrayMemberData.push(splits[i]);
      }

    }
    //console.log(arrayMemberData);
    Array.from(new Set(arrayMemberData));
    // return arrayMemberData.toString();
    return Array.from(new Set(arrayMemberData)).toString();
  }

  /*  editTeamSpace(element) {
     // console.log("insideEditlement:  " + JSON.stringify(element));
     this.dialogService.openNewTeam(element).subscribe((res) => {
       if (res) {
         //console.log("editRes:  " + JSON.stringify(res));
         this.settingsService
           .editTeamSpace(res)
           .subscribe((teamspaceresponse) => {
             console.log("teamspaceresponse:  " + JSON.stringify(teamspaceresponse));
             let updatedTeamSpaceIndex;
             updatedTeamSpaceIndex = this.SettingTeamSpaceList.findIndex(
               (r) => r.Id === teamspaceresponse.teamSpace.Id
             );
             if (updatedTeamSpaceIndex > -1) {
               let teamSpaceList = teamspaceresponse.teamSpace;
               console.log("teamSpaceList:  " + JSON.stringify(teamSpaceList));
               this.SettingTeamSpaceList.splice(updatedTeamSpaceIndex, 1);
               this.SettingTeamSpaceList.push(teamSpaceList);
               // console.log("editinside:: " + JSON.stringify(this.SettingTeamSpaceList));
               this.SettingTeamSpaceList.sort((n1, n2) => n1.Id - n2.Id);
               this.groupDataSource = new MatTableDataSource(
                 this.SettingTeamSpaceList
               );
               this.groupDataSource.paginator = this.paginatorTeamSpace;
               this.groupDataSource.sort = this.sortTeamSpace;
             }
           });
       }
     });
   } */

  editTeamSpace(element) {
    //console.log("insideEditlement-1:  " + JSON.stringify(element));
    this.dialogService.openNewTeam(element).subscribe((res) => {
      if (res) {
        //console.log("editRes-2:  " + JSON.stringify(res));
        let currentMembersList = this.callAddMemberCurrentMember(res, element);
        console.log("currentMembersList:  " + JSON.stringify(currentMembersList));

        if (!isEmpty(currentMembersList)) {
          this.settingsService
            .addTeamMember(currentMembersList)
            .subscribe((teamspaceresponse) => {
              console.log("teamspaceresponse:  " + JSON.stringify(teamspaceresponse));

              this.userJson["Id"] = element.Id;
              this.userJson["Name"] = element.Name;
              this.userJson["UserId"] = element.UserId;
              this.userJson["Status"] = element.Status;
              this.userJson["Description"] = element.Description;

              let elementExistingMembers = this.getMembersStr(element);
              this.userJson["TeamSpaceMember"] = elementExistingMembers + ',' + teamspaceresponse.teamSpaceMember.CustomerId;
              // console.log("userJson:  " + JSON.stringify(this.userJson));
              this.reloadComponent();
              let updatedTeamSpaceIndex;
              updatedTeamSpaceIndex = this.SettingTeamSpaceList.findIndex(
                (r) => r.Id === element.Id
              );
              if (updatedTeamSpaceIndex > -1) {
                let teamSpaceList = this.userJson;
                this.SettingTeamSpaceList.splice(updatedTeamSpaceIndex, 1);
                this.SettingTeamSpaceList.push(teamSpaceList);
                // console.log("editinside:: " + JSON.stringify(this.SettingTeamSpaceList));
                this.SettingTeamSpaceList.sort((n1, n2) => n1.Id - n2.Id);
                this.groupDataSource = new MatTableDataSource(
                  this.SettingTeamSpaceList
                );
                this.groupDataSource.paginator = this.paginatorTeamSpace;
                this.groupDataSource.sort = this.sortTeamSpace;
              }
            });
        } else {
          this.reloadComponent();
        }
      }
    });
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    //this.router.navigate(['/dashboard/roles']);
    this.router.navigate([this.router.url]);
  }

  deleteTeamspace(element: SettingTeamSpaceModel) {
    // console.log("insidedeleteelement:  " + JSON.stringify(element));

    this.settingsService.deleteTeamSpace(element).subscribe((teamspaceresponse) => {
      // console.log("deleteapires:  " + JSON.stringify(teamspaceresponse));
      let updatedTeamspaceIndex;
      updatedTeamspaceIndex = this.SettingTeamSpaceList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedTeamspaceIndex > -1) {
        this.SettingTeamSpaceList.splice(updatedTeamspaceIndex, 1);
        this.SettingTeamSpaceList.sort((n1, n2) => n1.Id - n2.Id);
        this.groupDataSource = new MatTableDataSource(this.SettingTeamSpaceList);
        this.groupDataSource.paginator = this.paginatorTeamSpace;
        this.groupDataSource.sort = this.sortTeamSpace;
        this.countTeamSpace = this.SettingTeamSpaceList.length;
      }
    });
  }

  //users

  getUsersList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    this.settingsService
      .getUsersList(customer.CustomerId)
      .subscribe((res) => {
        //console.log(res);
        //console.log("SettingUsersList:: " + JSON.stringify(res));
        this.SettingUsersList = res.users;
        // console.log("this.SettingUsersList:: " + JSON.stringify(this.SettingUsersList));
        this.countUsers = this.SettingUsersList.length;
        this.dataSource = new MatTableDataSource(this.SettingUsersList);
        this.dataSource.paginator = this.paginatorUsers;
        this.dataSource.sort = this.sortUsers;
      });
  }

  applyFilter(filterValue: string) {
    //console.log("filterValue:: " + filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteUsers(element: SettingUserModel) {
    //console.log("insidedeleteelementuser:  " + JSON.stringify(element));
   /*  if(window.confirm("Are you sure to delete "+element.UserId)) {
      console.log("Implement delete functionality here"); */
    
    let convertedDate = formatDate(new Date(element.AtDate), 'yyyy-MM-dd HH:mm:ss', 'en-US', '+0530');
    // console.log("convertedDate:: "+convertedDate);

    var userJson = {};
    userJson["Id"] = element.Id;
    userJson["UserId"] = element.UserId;
    userJson["Password"] = element.Password;
    userJson["Name"] = element.Name;
    userJson["LastName"] = element.LastName;
    userJson["MobileNumber"] = element.MobileNumber;
    userJson["EmailId"] = element.EmailId;
    userJson["UserStatus"] = element.UserStatus;
    userJson["UserType"] = element.UserType;
    userJson["AtDate"] = convertedDate;
    userJson["ManagerId"] = element.ManagerId;
    userJson["ConfrimPassword"] = element.ConfrimPassword;

    //console.log("userJson:: "+JSON.stringify(userJson));
    this.settingsService.deleteUsers(userJson).subscribe((userresponse) => {
      //console.log("userdeleteapires:  " + JSON.stringify(userresponse));
      let updatedUserIndex;
      updatedUserIndex = this.SettingUsersList.findIndex(
        (r) => r.Id === element.Id
      );
      if (updatedUserIndex > -1) {
        this.SettingUsersList.splice(updatedUserIndex, 1);
        this.SettingUsersList.sort((n1, n2) => n1.Id - n2.Id);
        this.dataSource = new MatTableDataSource(this.SettingUsersList);
        this.dataSource.paginator = this.paginatorUsers;
        this.dataSource.sort = this.sortUsers;
        this.countUsers = this.SettingUsersList.length;
      }
    });
  // }
  }

  dateParseFormateCreated(element) {

    let convertedDate;
    if (element.AtDate) {
      convertedDate = formatDate(new Date(element.AtDate), 'yyyy-MM-dd HH:mm:ss', 'en-US', '+0530');
    } else if (element.LastConnectionDate) {
      convertedDate = formatDate(new Date(element.LastConnectionDate), 'yyyy-MM-dd HH:mm:ss', 'en-US', '+0530');
    }
    return convertedDate;
    //console.log("convertedDate:: "+convertedDate);
  }

  dateParseFormateLatsConnnection(element) {

    let convertedDate;
    if (element.LastConnectionDate) {
      convertedDate = formatDate(new Date(element.LastConnectionDate), 'yyyy-MM-dd HH:mm:ss', 'en-US', '+0530');
    }
    return convertedDate;
    //console.log("convertedDate:: "+convertedDate);
  }

  callAddMemberCurrentMember(resultJson, element) {
    //console.log("element:: " + JSON.stringify(element));
    //console.log("resultJson:: " + JSON.stringify(resultJson));
    var userJson = {};
    if (resultJson.TeamSpaceMember) {
      let newMembersBoth = resultJson.TeamSpaceMember;
      // console.log("newMembersBoth:: " + newMembersBoth);
      let elementExistingMembers = this.getMembersStr(element);
      // console.log("elementExistingMembers:: " + elementExistingMembers);
      var newMembersBothNew = newMembersBoth.split(',');
      var arr = elementExistingMembers.split(',');

      // console.log("mergearray:: "+merge_array(newMembersBothNew, arr));
      if (newMembersBothNew.length > arr.length) { //>=
        // console.log("mergearray1:: "+merge_array(newMembersBothNew, arr));
        for (var i = 0; i < arr.length; i++) {
          newMembersBothNew.splice(arr[i], 1)
        }
        let arrayData = newMembersBothNew;
        //console.log("arrayDataif:: " + newMembersBothNew);

        userJson["CustomerId"] = arrayData.toString();
        userJson["GroupId"] = element.teamSpaceMembers[0].GroupId;
        userJson["ParrentCustomerId"] = element.teamSpaceMembers[0].ParrentCustomerId;

      } else {
        //console.log("arrayDataelse:: " + newMembersBothNew);
        /*  let arrayData = newMembersBothNew;
         userJson["CustomerId"] = arrayData.toString(); */

        var res = arr.filter(function (n) { return !this.has(n) }, new Set(newMembersBothNew));
        // console.log("unmatcheddata:: " + res);
        //console.log("res.length:: " + res.length);
        //console.log("element.teamSpaceMembers:: " + JSON.stringify(element.teamSpaceMembers));

        for (let k = 0; k < res.length; k++) {
          // console.log("k:: " + res[k]);
          /*  element.teamSpaceMembers.map(function (resData) {
             if (resData.CustomerId==res[k]) {
               //console.log("resData.Id:: "+resData.Id);
               userJson["Id"] = resData.Id;
               userJson["GroupId"] = resData.GroupId;
               userJson["CustomerId"] = res[k];
               userJson["ParrentCustomerId"] = resData.ParrentCustomerId;
             }
           }); */

          element.teamSpaceMembers.forEach((resData) => {
            //console.log("resData:: "+JSON.stringify(resData));
            if (resData.CustomerId == res[k]) {
              //console.log("resData.Id:: "+resData.Id);
              userJson["Id"] = resData.Id;
              userJson["GroupId"] = resData.GroupId;
              userJson["CustomerId"] = res[k];
              userJson["ParrentCustomerId"] = resData.ParrentCustomerId;

              this.deleteTeamSpaceData(userJson);
              userJson = {};
              //console.log("userJsonInside:: " + JSON.stringify(userJson));
            }
          });
        }
      }

      // console.log("newMembersBothNewReplace:: "+newMembersBothNew);
      // let arrayData = newMembersBothNew;

      /* userJson["GroupId"] = element.teamSpaceMembers[0].GroupId;
      // userJson["CustomerId"] = arrayData.toString();
      userJson["ParrentCustomerId"] = element.teamSpaceMembers[0].ParrentCustomerId; */
      //console.log("userJson:: " + JSON.stringify(userJson));
    }

    return userJson;
  }

  deleteTeamSpaceData(userJson: any) {
    this.settingsService.deleteTeamMember(userJson).subscribe((teammembersresponse) => {
      console.log("teammembersresponseDeleted:  " + JSON.stringify(teammembersresponse));
    });
  }

}

function isEmpty(obj: any) {
  return Object.keys(obj).length === 0;
}

function merge_array(array1, array2) {
  var result_array = [];
  var arr = array1.concat(array2);
  var len = arr.length;
  var assoc = {};

  while (len--) {
    var item = arr[len];

    if (!assoc[item]) {
      result_array.unshift(item);
      assoc[item] = true;
    }
  }

  return result_array;
}
