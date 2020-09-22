import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ExpandMenuDirective } from './directives/expand-menu.directive';
import { CustomerTilesComponent } from './customer-tiles/customer-tiles.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FmpTeroCardComponent } from './fmp-tero-card/fmp-tero-card.component';
import { ExpandInnerMenuDirective } from './directives/inner-menu-direcrtive';
import { FilterComponent } from './filter/filter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PopoverComponent } from './popover/popover.component';
import { PopupDataComponent } from './popup-data/popup-data.component';
const sharedModules: any[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [sharedModules, RouterModule, NgxChartsModule],
  providers: [],
  declarations: [
    HeaderComponent,
    LeftPanelComponent,
    ExpandMenuDirective,
    CustomerTilesComponent,
    FmpTeroCardComponent,
    ExpandInnerMenuDirective,
   
    FilterComponent,
    NotfoundComponent,
    PopoverComponent,
    PopupDataComponent,
  ],
  exports: [
    sharedModules,
    NgxChartsModule,
    RouterModule,
    HeaderComponent,
    LeftPanelComponent,
    ExpandMenuDirective,
    CustomerTilesComponent,
    FmpTeroCardComponent,
    ExpandInnerMenuDirective,
    FilterComponent,
    NotfoundComponent,
    PopoverComponent,
    PopupDataComponent, 
  ],
  entryComponents: [PopoverComponent,PopupDataComponent],
})
export class SharedModule {}
