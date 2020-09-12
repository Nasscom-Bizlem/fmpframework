import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit, OnChanges {
  @Input() invoiceDetails: any;
  constructor() {}

  ngOnInit(): void {
    if (!!this.invoiceDetails) {
      console.log(this.invoiceDetails);
    }
  }

  ngOnChanges() {
    if (!!this.invoiceDetails) {
      console.log(this.invoiceDetails);
    }
  }


  formateDate(dateVal) {
    if (dateVal != undefined && dateVal.trim() != '' && dateVal != 'NA') {
      return new DatePipe('en-US').transform(dateVal, 'MM-dd-yyyy');
    }
    return '';
  }

  barChartData = [
    {
      name: 'JAN',
      value: 40632,
      extra: {
        code: 'jan',
      },
    },
    {
      name: 'FEB',
      value: 50000,
      extra: {
        code: 'feb',
      },
    },
    {
      name: 'MAR',
      value: 36745,
      extra: {
        code: 'mar',
      },
    },
    {
      name: 'APR',
      value: 36240,
      extra: {
        code: 'apr',
      },
    },
    {
      name: 'MAY',
      value: 33000,
      extra: {
        code: 'may',
      },
    },
    {
      name: 'JUN',
      value: 35600,
      extra: {
        code: 'jun',
      },
    },
    {
      name: 'JUL',
      value: 35800,
      extra: {
        code: 'july',
      },
    },
    {
      name: 'AUG',
      value: 25800,
      extra: {
        code: 'aug',
      },
    },
    {
      name: 'SEP',
      value: 30000,
      extra: {
        code: 'sep',
      },
    },
    {
      name: 'OCT',
      value: 32000,
      extra: {
        code: 'oct',
      },
    },
    {
      name: 'NOV',
      value: 30800,
      extra: {
        code: 'nov',
      },
    },
    {
      name: 'DEC',
      value: 40500,
      extra: {
        code: 'dec',
      },
    },
  ];

  view: any[] = [380, 200];
  barPadding = '18';

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  animations = true;
  xAxisLabel = '';
  showYAxisLabel = false;
  showDataLabel = false;
  yAxisLabel = '';

  colorScheme = {
    domain: [
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#4753fd',
      '#3ac43d',
      'coral',
    ],
  };

  onSelect(event) {
    console.log(event);
  }
  onResize(event, chartWrapper: any) {
    console.log(chartWrapper);
    if (window.innerWidth < 1024) {
      console.log('test', window.innerWidth - 20);
      this.view = [window.innerWidth - 30, 280];
      this.barPadding = '26';
    } else if (window.innerWidth == 1024) {
      this.view = [window.innerWidth / 2.35, 280];
      this.barPadding = '16';
    } else {
      this.view = [chartWrapper, 280];
      this.barPadding = '20';
    }
  }
}
