import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';
import { BaseService } from '../base.service';
import { UiService } from 'src/app/shared/ui.service';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate, CanActivateChild {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private Uiservice: UiService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.baseService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    // if (!this.router.url.includes('/CustomerId')) {
    //   this.router.navigate(['notfound']);
    //   return false;
    // }
    return true;
  }
}
