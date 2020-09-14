import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantService } from './global-constant.service';
import { UiService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    private http: HttpClient,
    private constants: GlobalConstantService,
    private UiService: UiService
  ) {}

  getAppSettings() {
    return this.http.get(this.constants.WebConfig_URL);
  }

  public isAuthenticated(): boolean {
    const userDetails = localStorage.getItem('currentUser');
    if (userDetails) {
      return true;
    } else {
      return false;
    }
    // Check whether the token is expired and return
    // true or false

    // return !this.jwtHelper.isTokenExpired(token);
  }
}
