import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOauthDialogComponent } from './add-oauth-dialog.component';

describe('AddOauthDialogComponent', () => {
  let component: AddOauthDialogComponent;
  let fixture: ComponentFixture<AddOauthDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOauthDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOauthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
