import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
import { BaseService } from '../base.service';
import { UiService } from 'src/app/shared/ui.service';
import { GlobalConstantService } from '../global-constant.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate, CanActivateChild {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private Uiservice: UiService,
    private globalConstants: GlobalConstantService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.baseService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
