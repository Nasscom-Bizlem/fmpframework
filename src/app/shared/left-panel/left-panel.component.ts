import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { fadeInAnimationForm } from '../animations/fade-in.animations';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core-services/base.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(5000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LeftPanelComponent implements OnInit {
  customerId: number;
  constructor(
    public sideNavService: UiService,
    private router: Router,
    private baseService: BaseService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    if (!!customer && !!customer.CustomerId) {
      this.customerId = customer.CustomerId;
    }
  }
  navigateToOverView(path: any) {
    this.uiService.backToCustomerList.next(true);
    // this.baseService.isAuthenticated();
    this.router.navigate([`${path}`]);
    //admin
  }

  navigateToPath(path: any) {
    this.uiService.backToCustomerList.next(false);
    // this.baseService.isAuthenticated();
    this.router.navigate([`${path}`]);
    //admin
  }
}
