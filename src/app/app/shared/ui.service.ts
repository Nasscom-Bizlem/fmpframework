import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  toggleEvent = new EventEmitter<string>();
  displayedColumns = new BehaviorSubject('user');
  isGroupColumnClicked = new EventEmitter<boolean>();
  roleData = new EventEmitter<any>();
  hideSideNav: boolean = true;
  isLogginPage: Subject<any> = new Subject();

  backToCustomerList = new BehaviorSubject(null);

  closeSideNav = new EventEmitter();

  customerIdEmiiter = new EventEmitter<any>();

  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
