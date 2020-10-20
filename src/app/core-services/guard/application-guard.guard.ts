import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/shared/ui.service';
import { BaseService } from '../base.service';
import { GlobalConstantService } from '../global-constant.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationGuard implements CanActivate {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private Uiservice: UiService,
    private globalConstants: GlobalConstantService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    debugger;
    return this.IsCanActivate(route, state);
    // return true;
  }
  async IsCanActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (!this.globalConstants.AppSettings) {
      await this.getAppSetings().then((settings) => {
        debugger;
        this.globalConstants.AppSettings = settings;
      });
    }
  }

  getAppSetings(): Promise<any> {
    return new Promise<boolean>((resolve) => {
      debugger;
      this.baseService.getAppSettings().subscribe((value: any) => {
        debugger;
        resolve(value);
      });
    });
  }
}
