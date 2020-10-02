import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventActionComponent } from './manage-event-action.component';

describe('ManageEventActionComponent', () => {
  let component: ManageEventActionComponent;
  let fixture: ComponentFixture<ManageEventActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
