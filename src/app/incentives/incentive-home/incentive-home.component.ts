import { Component, OnInit } from '@angular/core';
import { GlobalvariablesService } from 'src/app/core-services/globalvariables.service';

@Component({
  selector: 'app-incentive-home',
  templateUrl: './incentive-home.component.html',
  styleUrls: ['./incentive-home.component.scss'],
})
export class IncentiveHomeComponent implements OnInit {
  constructor(public globalVariables: GlobalvariablesService) {}

  tabs = [];
  ngOnInit(): void {
    debugger;
    this.tabs = this.globalVariables.incentiveHomeTabs;
  }

  navigate(tab: string) {
    debugger;
    this.globalVariables.navigateToPath('/incentives/home/' + `${tab}`);
  }
}
