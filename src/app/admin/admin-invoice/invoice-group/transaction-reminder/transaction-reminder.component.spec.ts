import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReminderComponent } from './transaction-reminder.component';

describe('TransactionReminderComponent', () => {
  let component: TransactionReminderComponent;
  let fixture: ComponentFixture<TransactionReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
