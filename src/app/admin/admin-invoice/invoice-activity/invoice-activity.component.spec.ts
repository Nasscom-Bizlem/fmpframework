import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceActivityComponent } from './invoice-activity.component';

describe('InvoiceActivityComponent', () => {
  let component: InvoiceActivityComponent;
  let fixture: ComponentFixture<InvoiceActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
