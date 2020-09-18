import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasourceRoutingModule } from './datasource-routing.module';
import { DatasourceComponent } from './datasource.component';


@NgModule({
  declarations: [DatasourceComponent],
  imports: [
    CommonModule,
    DatasourceRoutingModule
  ]
})
export class DatasourceModule { }
