import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { CustomerInvoiceDialogComponent } from './customer-invoice-dialog/customer-invoice-dialog.component';
import { LogCallDialogComponent } from './log-call-dialog/log-call-dialog.component';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { PaymentActivityDialogComponent } from './payment-activity-dialog/payment-activity-dialog.component';
import { CustomerListDialogComponent } from './customer-list-dialog/customer-list-dialog.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { CustomerTaskModel } from 'src/app/features/customer/customermodel/customertask.model';
import { DisputesComponent } from 'src/app/features/customer/disputes/disputes.component';
import { AddDisputeComponent } from './add-dispute/add-dispute.component';
import { CustomerDisputeModel } from 'src/app/features/customer/customermodel/customer-dispute.model';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AdminProjectDialogComponent } from './admin-project-dialog/admin-project-dialog.component';
import {
  CustomerListModel,
  CustomerListNewModel,
} from 'src/app/features/customer/customermodel/customerlist.model';
import { CustomernotesComponent } from './customernotes/customernotes.component';
import { CustomerNotesListModel } from 'src/app/features/customer/customermodel/notes.model';
import { CustomerDetailsModel } from 'src/app/features/customer/customermodel/getcustomerdetails';
import { PromisePayDialogComponent } from './promise-pay-dialog/promise-pay-dialog.component';
import { PromisePayModel } from 'src/app/features/customer/customermodel/promise-pay.model';
import { AddInvoiceDialogComponent } from './add-invoice-dialog/add-invoice-dialog.component';
import { SettingUserModel } from 'src/app/settings/authorisation/settings-model/setting-user-model.model';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { SettingTeamSpaceModel } from 'src/app/settings/authorisation/settings-model/setting-team-space-model.model';
import { TeamAddDialogComponent } from './team-add-dialog/team-add-dialog.component';
import { SettingRoleModel } from 'src/app/settings/authorisation/settings-model/setting-role-model.model';
import { AdminRoleDialogComponent } from './admin-role-dialog/admin-role-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openNewTask(customerId: any, type: string, invoiceNumber?: string) {
    const d = this.dialog.open(NewTaskDialogComponent, {
      data: {
        customerId: customerId,
        type: type,
        invoiceNumber: invoiceNumber,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
  openlogCall(customerId: any, type: string, invoiceNumber?: string) {
    const d = this.dialog.open(LogCallDialogComponent, {
      data: {
        customerId: customerId,
        type: type,
        invoiceNumber: invoiceNumber,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }

  openNewEvent(customerId: any, type: string, invoiceNumber?: string) {
    const d = this.dialog.open(NewEventDialogComponent, {
      data: {
        customerId: customerId,
        type: type,
        invoiceNumber: invoiceNumber,
      },
      minWidth: '45vw',
    });

    return d.afterClosed();
  }
  openCustomerInvoice(modeldata: any) {
    const d = this.dialog.open(CustomerInvoiceDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
    });

    return d.afterClosed();
  }
  openTask(modeldata: CustomerTaskModel) {
    const d = this.dialog.open(TaskDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
    });

    return d.afterClosed();
  }
  openPayementTask(modeldata: any) {
    const d = this.dialog.open(PaymentActivityDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '55vw',
    });

    return d.afterClosed();
  }

  openCustomerList(
    modeldata: Array<CustomerListNewModel>,
    customerDetails: CustomerListNewModel
  ) {
    const d = this.dialog.open(CustomerListDialogComponent, {
      data: {
        modeldata: modeldata,
        customerDetails: customerDetails,
      },
      minWidth: '80vw',
      minHeight: '65vh',
    });

    return d.afterClosed();
  }

  addCustomerList(modeldata: any) {
    const d = this.dialog.open(AddCustomerDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
      minHeight: '65vh',
    });

    return d.afterClosed();
  }

  openDispute(customerId: any, customerDisputeModel?: any) {
    const d = this.dialog.open(AddDisputeComponent, {
      data: {
        customerId: customerId,
        modeldata: customerDisputeModel,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }

  openPromisePay(customerId: any, modeldata?: PromisePayModel) {
    const d = this.dialog.open(PromisePayDialogComponent, {
      data: {
        customerId: customerId,
        modeldata: modeldata,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
  //CustomerDisputeModel
  // editDispute(customerDisputeModel: CustomerDisputeModel) {
  //   const d = this.dialog.open(AddDisputeComponent, {
  //     data: {
  //       modeldata: customerDisputeModel,
  //     },
  //     minWidth: '40vw',
  //   });

  //   return d.afterClosed();
  // }
  openProject(projectTitle: string, modeldata: any) {
    const d = this.dialog.open(AdminProjectDialogComponent, {
      data: {
        title: projectTitle,
        modeldata: [],
      },
      width: '80%',
      maxWidth: '80vw',
    });

    return d.afterClosed();
  }
  delete(projectTitle: string) {
    const d = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: projectTitle,
      },
      width: '50%',
      maxWidth: '50vw',
    });

    return d.afterClosed();
  }

  openNotes(
    customerId: any,
    type: string,
    customerNotesListModel?: CustomerNotesListModel
  ) {
    debugger;
    const d = this.dialog.open(CustomernotesComponent, {
      data: {
        customerId: customerId,
        type: type,
        customerNotesList: customerNotesListModel,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
  //AddInvoiceDialogComponent
  openAddInvoiceDialogComponent(
    customerId: any,
    invoiceNumber: string,
    customerNotesListModel?: any
  ) {
    const d = this.dialog.open(AddInvoiceDialogComponent, {
      data: {
        customerId: customerId,
        invoiceNumber: invoiceNumber,
        modeldata: [],
      },
      width: '95%',
      maxWidth: '95vw',
      minHeight: '93vh',
    });

    return d.afterClosed();
  }

  openRole( settingRoleModel?: SettingRoleModel ) {
    const d = this.dialog.open(AdminRoleDialogComponent, {
      data: {
        //modeldata: modeldata,
        modeldata: settingRoleModel,
      },
      width: '50%',
      maxWidth: '50vw',
    });

    return d.afterClosed();

  }


  openNewTeam( settingTeamSpaceModel?: SettingTeamSpaceModel ) {
    const d = this.dialog.open(TeamAddDialogComponent, {
      data: {
        //modeldata: modeldata,
        modeldata: settingTeamSpaceModel,
      },
      width: '50%',
      maxWidth: '50vw',
    });

    return d.afterClosed();

  }

 /*  openNewTeam(projectTitle: string, modeldata: any) {
    const d = this.dialog.open(TeamAddDialogComponent, {
      data: {
        title: projectTitle,
        modeldata: [],
      },
      width: '50%',
      maxWidth: '50vw',
    });

    return d.afterClosed();
  } */

  /* openNewUser(projectTitle: string, modeldata: any) {
    const d = this.dialog.open(UserAddDialogComponent, {
      data: {
        title: projectTitle,
        modeldata: [],
      },
      width: '50%',
      maxWidth: '50vw',
    });

    return d.afterClosed();
  } */

  openNewUser( settingUserModel?: SettingUserModel ) {
    const d = this.dialog.open(UserAddDialogComponent, {
      data: {
        //modeldata: modeldata,
        modeldata: settingUserModel,
      },
      width: '50%',
      maxWidth: '50vw',
    });

   // console.log("d:: "+d.getState);
    return d.afterClosed();

  }

}
