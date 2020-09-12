import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

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
export interface PeriodicGroupsElement {
  group: string;
  user: number;
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
  },
];
@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableGridComponent implements OnInit, OnChanges {
  roleData = new EventEmitter();
  groupData = new EventEmitter();
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private uiService: UiService,
    private dialogService: DialogService
  ) {}
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
    'admin',
    'created',
    'lastconnection',
    'edit',
    'view',
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
  groupDisplayedColumns = ['group', 'user', 'delete'];

  dataSource = ELEMENT_DATA;
  projectDataSource = PROJECT_ELEMENT_DATA;
  roleDataSource = ROLE_ELEMENT_DATA;
  groupDataSource = GROUP_ELEMENT_DATA;

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
  }
  // tslint:disable-next-line: typedef
  ngOnChanges() {}

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
}
