import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEventComponent } from '../web-services/manage-event/manage-event.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ImportExportComponent } from './import-export.component';
import { MapFileComponent } from './map-file/map-file.component';
import { MapListComponent } from './map-list/map-list.component';
import { ReviewSaveComponent } from './review-save/review-save.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: ImportExportComponent,
    // resolve: [],
    // canActivate: [],
    children: [
      { path: 'import-data', component: ImportDataComponent },
      { path: 'map-file', component: MapFileComponent },
      { path: 'map-list', component: MapListComponent },
      { path: 'review-save', component: ReviewSaveComponent },
      { path: 'upload', component: UploadComponent },

      { path: '', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', component: ImportExportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportExportRoutingModule { }
