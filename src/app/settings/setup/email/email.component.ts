import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

export interface PeriodicElement {
  check: boolean;
  username: string;
  oauth: string;
  hostname: string;
  password: string;
  action: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: false, username: 'Rahul', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkw', action: true},
  {check: false, username: 'Ram', oauth: 'Absdcslkcn2131', hostname: 'Mr. Marc', password: 'Hncwkwkl', action: true},
  {check: false, username: 'Jay', oauth: 'Absdcslkcn2131', hostname: 'Mr. James', password: 'Hncwkwklk', action: true},
  {check: false, username: 'Raj', oauth: 'Absdcslkcn2131', hostname: 'Mr. David', password: 'Hncwkwklfe', action: true},
  {check: false, username: 'Sam', oauth: 'Absdcslkcn2131', hostname: 'Mr. John', password: 'Hncwkwklkjd', action: true},
];

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onCheckboxChange(e,element:any) {
    if (e.checked) {

      console.log("e:: "+e);
      console.log("element:: "+JSON.stringify(element));

     /* //console.log("e:: "+e);
    // console.log(e.source._elementRef.nativeElement);
     let target=e.source._elementRef.nativeElement;
     console.log("text:: "+target.innerText.trim());
     console.log("checked:: "+e.checked); */ //find id,name,attribute search later
    
    } else {
      console.log("unchecked:: ");
     
    }
  }


  title = 'Email';
  displayedColumns: string[] = ['check', 'username', 'oauth', 'hostname', 'password', 'action'];
  dataSource = ELEMENT_DATA;

  openEmailDialog() {
    this.dialogService.addEmailDialog('Add', []).subscribe((res) => {
      console.log(res);
    });
  }

}
