import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantService } from './global-constant.service';
import { UiService } from '../shared/ui.service';
import { GlobalvariablesService } from './globalvariables.service';
import { AppContextPermissionModel, ViewPermission } from './app-context.model';

@Injectable({
  providedIn: 'root',
})
export class AppContext {
  constructor(public globalvariable: GlobalvariablesService) {
    this.permissionCollection();
  }
  appContextPermissionModel: Array<ViewPermission>;
  public accesToken: string;

  permissionCollection() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.appContextPermissionModel = user.viewPermission;
  }

  getBoolean(value: string) {
    return value === 'true' ? true : false;
  }

  get geStorageCustomerEditPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 1 &&
        R.viewLabel.toLowerCase() === 'isCustomerEdit'.toLowerCase()
    );

    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //isCustomerView
  get geStorageCustomerViewPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 2 &&
        R.viewLabel.toLowerCase() === 'isCustomerView'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddCustomer
  get geAddCustomerPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 3 && R.viewLabel.toLowerCase() === 'AddCustomer'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //CreateTask
  get getCreateTaskPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 4 && R.viewLabel.toLowerCase() === 'CreateTask'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //CreateLog
  get getCreateLogPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 5 && R.viewLabel.toLowerCase() === 'CreateLog'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //CreateNewEvent
  get getCreateNewEventPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 6 &&
        R.viewLabel.toLowerCase() === 'CreateNewEvent'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddCustomerDetail
  get getAddCustomerDetailPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 7 &&
        R.viewLabel.toLowerCase() === 'AddCustomerDetail'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //ViewDispute
  get getViewDisputePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 8 && R.viewLabel.toLowerCase() === 'ViewDispute'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddDispute
  get getAddDisputePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 9 && R.viewLabel.toLowerCase() === 'AddDispute'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddPromiseToPay
  get getAddPromiseToPayPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 11 &&
        R.viewLabel.toLowerCase() === 'AddPromiseToPay'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddInvoice
  get getAddInvoicePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 12 && R.viewLabel.toLowerCase() === 'AddInvoice'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }

  //AddNote
  get getAddNotePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 13 && R.viewLabel.toLowerCase() === 'AddNote'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //EditNote
  get getEditNotePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 14 && R.viewLabel.toLowerCase() === 'EditNote'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //DeleteNote
  get getDeleteNotePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 15 && R.viewLabel.toLowerCase() === 'DeleteNote'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //InvoiceCreateNewEvent
  get getInvoiceCreateNewEventPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 16 &&
        R.viewLabel.toLowerCase() === 'InvoiceCreateNewEvent'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //InvoiceCreateLog
  get getInvoiceCreateLogPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 17 &&
        R.viewLabel.toLowerCase() === 'InvoiceCreateLog'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //EditTask
  get getStorageEditTaskPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 18 && R.viewLabel.toLowerCase() === 'EditTask'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //DeleteTask
  get getDeleteTaskPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 19 && R.viewLabel.toLowerCase() === 'EditTask'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //PaymentSearchFilter
  get getPaymentSearchFilterPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 20 &&
        R.viewLabel.toLowerCase() === 'PaymentSearchFilter'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //AddPayment
  get getAddPaymentPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 21 && R.viewLabel.toLowerCase() === 'AddPayment'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //ViewPayment
  get getViewPaymentPermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 22 && R.viewLabel.toLowerCase() === 'ViewPayment'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
  //LateFeesToggle
  get getLateFeesTogglePermission() {
    let isEdit = this.appContextPermissionModel.find(
      (R) =>
        R.id === 23 &&
        R.viewLabel.toLowerCase() === 'LateFeesToggle'.toLowerCase()
    );
    if (isEdit) {
      return this.getBoolean(isEdit.viewValue);
    }
    return true;
  }
}
