import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DataSourceRoutingModule } from './data-source-routing.module';
import { SourceHomeComponent } from './source-home/source-home.component';
import { ExcelComponent } from './excel/excel.component';
import { WebServiceComponent } from './web-service/web-service.component';
import { FormComponent } from './form/form.component';
import { InternalComponent } from './internal/internal.component';
import { ComplexComponent } from './complex/complex.component';

@NgModule({
    declarations: [
        SourceHomeComponent,
        ExcelComponent,
        WebServiceComponent,
        FormComponent,
        InternalComponent,
        ComplexComponent,

    ],
    imports: [CommonModule, DataSourceRoutingModule, SharedModule],
})
export class DataSourceModule { }
