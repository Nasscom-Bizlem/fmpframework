import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-tiles',
  templateUrl: './customer-tiles.component.html',
  styleUrls: ['./customer-tiles.component.scss'],
})
export class CustomerTilesComponent implements OnInit {
  customerId: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.customerId = res.CustomerId;
    });
  }



}
