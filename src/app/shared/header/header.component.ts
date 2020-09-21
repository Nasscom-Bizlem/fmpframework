import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../ui.service';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core-services/base.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  navToggle = new EventEmitter<boolean>();
  isOpen = false;
  constructor(
    public UiService: UiService,
    private router: Router,
    private baseService: BaseService
  ) {}
  pageNum=0;
  ngOnInit(): void {
    this.UiService.closeSideNav.subscribe((res) => {
      this.isOpen = !this.isOpen;
    });
  }
  navOpen() {
    this.navToggle.emit(true);
    this.isOpen = !this.isOpen;
  }
  logOut() {
    localStorage.removeItem('currentUser');
    // this.UiService.isLogginPage.next(false);
    // this.baseService.isAuthenticated();
    this.router.navigate(['login']);
  }
}
