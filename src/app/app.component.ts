import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { UiService } from './shared/ui.service';
import { BaseService } from './core-services/base.service';
import { GlobalConstantService } from './core-services/global-constant.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'v-app';

  @ViewChild(MatSidenav)
  sideNav: MatSidenav;

  mobileQuery: MediaQueryList;
  reason = '';
  isbackdrop = false;
  isLogginPage: true;
  sub: Subscription;
  queryParam: any;

  private _mobileQueryListener: () => void;

  loginSubscription: Subscription;

  constructor(
    public sideNavService: UiService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private uiService: UiService,
    private coreServices: BaseService,
    private globalConstants: GlobalConstantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loadAppSettings();

    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isLogginPage = true;
  }
  ngOnChanges() {}
  ngOnInit() {
    if (this.router.url.indexOf('/login') > -1) {
      alert('Login Apge');
    }
    debugger;
    this.loginSubscription = this.uiService.isLogginPage.subscribe((res) => {
      this.isLogginPage = res;
    });

    // this.router.events
    //   .pipe(filter((e) => e instanceof NavigationStart))
    //   .subscribe(() => {
    //     const currentNav = this.router.getCurrentNavigation();
    //     const state = currentNav.extras.state;
    //     console.log('from app component', state);
    //   });
  }

  toggle(event) {
    this.sideNav.toggle();
    console.log(this.mobileQuery);
    if (this.mobileQuery.matches) {
      this.isbackdrop = !this.isbackdrop;
    } else {
      this.isbackdrop = false;
    }
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.sub.unsubscribe();
    this.loginSubscription.unsubscribe();
  }
  //data
  close(reason: string) {
    console.log(reason);
    this.isbackdrop = false;
    this.reason = reason;
    this.sideNav.toggle();
    this.uiService.closeSideNav.emit(true);
  }
  loadAppSettings() {
    this.coreServices.getAppSettings().subscribe(
      (response) => {
        debugger;
        this.globalConstants.AppSettings = response;
        if (this.globalConstants.AppSettings.switchMiddleTierV1) {
          this.globalConstants.BASE_URL = this.globalConstants.AppSettings.baseUrlV1;
        } else {
          this.globalConstants.BASE_URL = this.globalConstants.AppSettings.testURL;
        }
      },
      (error) => {
        this.globalConstants.Errors = <any>error;
      }
    );
  }
}
