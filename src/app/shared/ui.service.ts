import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  toggleEvent = new EventEmitter<string>();
  displayedColumns = new BehaviorSubject('user');
  isGroupColumnClicked = new EventEmitter<boolean>();
  roleData = new EventEmitter<any>();
  hideSideNav: boolean = true;
  isLogginPage = new BehaviorSubject(null);

  backToCustomerList = new BehaviorSubject(null);
  public elementdata  = new BehaviorSubject(null);

  closeSideNav = new EventEmitter();

  customerIdEmiiter = new EventEmitter<any>();

  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
