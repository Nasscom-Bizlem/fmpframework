import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantService } from './global-constant.service';
import { UiService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root',
})
export class AppContext {
  public accesToken: string;
}
