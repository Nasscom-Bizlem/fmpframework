import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assotment2RoutingModule } from './assotment2-routing.module';
import { Assotment2Component } from './assotment2.component';


@NgModule({
  declarations: [Assotment2Component],
  imports: [
    CommonModule,
    Assotment2RoutingModule
  ]
})
export class Assotment2Module { }
