import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconSettlementComponent } from './recon-settlement.component';

describe('ReconSettlementComponent', () => {
  let component: ReconSettlementComponent;
  let fixture: ComponentFixture<ReconSettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconSettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
