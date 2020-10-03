import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMailhostDialogComponent } from './add-mailhost-dialog.component';

describe('AddMailhostDialogComponent', () => {
  let component: AddMailhostDialogComponent;
  let fixture: ComponentFixture<AddMailhostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMailhostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMailhostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
