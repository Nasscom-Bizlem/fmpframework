import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullfillmentComponent } from './fullfillment.component';
import { ServiceMasterComponent } from './service-master/service-master.component';

const routes: Routes = [
    {
        path: '',
        component: FullfillmentComponent,
        // resolve: [],
        // canActivate: [],
        children: [
            { path: 'service-master', component: ServiceMasterComponent },
            { path: '', pathMatch: 'full', redirectTo: 'service-master' },
        ],
    },
    { path: '**', component: FullfillmentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FullfillmentRoutingModule { }
