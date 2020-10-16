import { Component, OnInit } from '@angular/core';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { GlobalvariablesService } from 'src/app/core-services/globalvariables.service';

@Component({
  selector: 'app-inc-tab',
  templateUrl: './inc-tab.component.html',
  styleUrls: ['./inc-tab.component.scss'],
})
export class IncTabComponent implements OnInit {
  constructor(private globalVariale: GlobalvariablesService) {}
  tabs = [];
  ngOnInit(): void {
    debugger;
    this.tabs = this.globalVariale.incentiveHomeTabs;
  }
}
