import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DetailsComponent } from './details/details.component';
import { DisputesComponent } from './disputes/disputes.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NotesFilesComponent } from './notes-files/notes-files.component';
import { OverviewComponent } from './overview/overview.component';
import { RemindersActionComponent } from './reminders-action/reminders-action.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'notesfile', component: NotesFilesComponent },
      { path: 'reminder', component: RemindersActionComponent },
      { path: 'disputes', component: DisputesComponent },
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
    ],
  },
  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
