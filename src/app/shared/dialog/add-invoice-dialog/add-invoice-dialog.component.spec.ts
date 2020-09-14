import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceDialogComponent } from './add-invoice-dialog.component';

describe('AddInvoiceDialogComponent', () => {
  let component: AddInvoiceDialogComponent;
  let fixture: ComponentFixture<AddInvoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
