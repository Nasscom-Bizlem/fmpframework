import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDisputesComponent } from './transaction-disputes.component';

describe('TransactionDisputesComponent', () => {
  let component: TransactionDisputesComponent;
  let fixture: ComponentFixture<TransactionDisputesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDisputesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
