import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconTabComponent } from './recon-tab.component';

describe('ReconTabComponent', () => {
  let component: ReconTabComponent;
  let fixture: ComponentFixture<ReconTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
