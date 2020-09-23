import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentActivityDialogComponent } from './payment-activity-dialog.component';

describe('PaymentActivityDialogComponent', () => {
  let component: PaymentActivityDialogComponent;
  let fixture: ComponentFixture<PaymentActivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentActivityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
