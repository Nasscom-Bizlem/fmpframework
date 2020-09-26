import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCallDialogComponent } from './log-call-dialog.component';

describe('LogCallDialogComponent', () => {
  let component: LogCallDialogComponent;
  let fixture: ComponentFixture<LogCallDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCallDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
