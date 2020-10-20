import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-reconcilation',
  templateUrl: './reconcilation.component.html',
  styleUrls: ['./reconcilation.component.scss'],
})
export class ReconcilationComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.isLogginPage.next(false);
  }
}
