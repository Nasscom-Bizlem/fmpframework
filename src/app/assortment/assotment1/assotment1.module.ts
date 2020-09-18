import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assotment1RoutingModule } from './assotment1-routing.module';
import { Assotment1Component } from './assotment1.component';


@NgModule({
  declarations: [Assotment1Component],
  imports: [
    CommonModule,
    Assotment1RoutingModule
  ]
})
export class Assotment1Module { }
