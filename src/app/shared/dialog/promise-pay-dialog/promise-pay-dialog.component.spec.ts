import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisePayDialogComponent } from './promise-pay-dialog.component';

describe('PromisePayDialogComponent', () => {
  let component: PromisePayDialogComponent;
  let fixture: ComponentFixture<PromisePayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisePayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisePayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
