import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceDialogComponent } from './customer-invoice-dialog.component';

describe('CustomerInvoiceDialogComponent', () => {
  let component: CustomerInvoiceDialogComponent;
  let fixture: ComponentFixture<CustomerInvoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
