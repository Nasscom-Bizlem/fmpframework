import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectDialogComponent } from './admin-project-dialog.component';

describe('AdminProjectDialogComponent', () => {
  let component: AdminProjectDialogComponent;
  let fixture: ComponentFixture<AdminProjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
