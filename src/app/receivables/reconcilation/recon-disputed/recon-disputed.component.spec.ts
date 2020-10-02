import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconDisputedComponent } from './recon-disputed.component';

describe('ReconDisputedComponent', () => {
  let component: ReconDisputedComponent;
  let fixture: ComponentFixture<ReconDisputedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconDisputedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconDisputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
