import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReconcilationRoutingModule } from './reconcilation-routing.module';
import { ReconcilationComponent } from './reconcilation.component';


@NgModule({
  declarations: [ReconcilationComponent],
  imports: [
    CommonModule,
    ReconcilationRoutingModule
  ]
})
export class ReconcilationModule { }
