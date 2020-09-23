import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportExportRoutingModule } from './import-export-routing.module';
import { ImportDataComponent } from './import-data/import-data.component';
import { UploadComponent } from './upload/upload.component';
import { MapFileComponent } from './map-file/map-file.component';
import { ReviewSaveComponent } from './review-save/review-save.component';
import { MapListComponent } from './map-list/map-list.component';


@NgModule({
  declarations: [ImportDataComponent, UploadComponent, MapFileComponent, ReviewSaveComponent, MapListComponent],
  imports: [
    CommonModule,
    ImportExportRoutingModule
  ]
})
export class ImportExportModule { }
