import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  username: string;
  oauth: string;
  hostname: string;
  password: string;
  action: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'Rahul', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkw', action: true},
  {username: 'Ram', oauth: 'Absdcslkcn2131', hostname: 'Mr. Marc', password: 'Hncwkwkl', action: true},
  {username: 'Jay', oauth: 'Absdcslkcn2131', hostname: 'Mr. James', password: 'Hncwkwklk', action: true},
  {username: 'Raj', oauth: 'Absdcslkcn2131', hostname: 'Mr. David', password: 'Hncwkwklfe', action: true},
  {username: 'Sam', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkwklkjd', action: true},
];

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Email';
  displayedColumns: string[] = ['username', 'oauth', 'hostname', 'password', 'action'];
  dataSource = ELEMENT_DATA;

}
