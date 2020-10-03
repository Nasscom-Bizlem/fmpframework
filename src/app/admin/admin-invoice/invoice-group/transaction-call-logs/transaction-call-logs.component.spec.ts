import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCallLogsComponent } from './transaction-call-logs.component';

describe('TransactionCallLogsComponent', () => {
  let component: TransactionCallLogsComponent;
  let fixture: ComponentFixture<TransactionCallLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCallLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCallLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
