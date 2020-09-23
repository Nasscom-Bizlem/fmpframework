import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersActionComponent } from './reminders-action.component';

describe('RemindersActionComponent', () => {
  let component: RemindersActionComponent;
  let fixture: ComponentFixture<RemindersActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
