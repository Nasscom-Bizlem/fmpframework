
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexComponent } from './complex/complex.component';
import { DataSourceComponent } from './data-source.component';
import { ExcelComponent } from './excel/excel.component';
import { FormComponent } from './form/form.component';
import { InternalComponent } from './internal/internal.component';
import { SourceHomeComponent } from './source-home/source-home.component';
import { WebServiceComponent } from './web-service/web-service.component';

const routes: Routes = [
    {
        path: '',
        component: DataSourceComponent,
        // resolve: [],
        // canActivate: [],
        children: [
            { path: 'source-home', component: SourceHomeComponent },
            { path: 'complex', component: ComplexComponent },
            { path: 'excel', component: ExcelComponent },
            { path: 'form', component: FormComponent },
            { path: 'internal', component: InternalComponent },
            { path: 'web-service', component: WebServiceComponent },

            { path: '', pathMatch: 'full', redirectTo: '' },
        ],
    },
    { path: '**', component: DataSourceComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DataSourceRoutingModule { }
