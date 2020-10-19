import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantService } from './global-constant.service';
import { UiService } from '../shared/ui.service';
import { GlobalvariablesService } from './globalvariables.service';

@Injectable({
  providedIn: 'root',
})
export class AppContext {
  constructor(public globalvariable: GlobalvariablesService) {}

  public accesToken: string;

  get geStorageEditPermission() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.viewPermission.isCustomerEdit;
  }
  //isCustomerView
  get geStorageViewPermission() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.viewPermission.isCustomerView;
  }
  //isAddTask
  get geStorageTaskPermission() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.viewPermission.isAddTask;
  }
  //isEditTask
  get geStorageEditTaskPermission() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.viewPermission.isEditTask;
  }
}
