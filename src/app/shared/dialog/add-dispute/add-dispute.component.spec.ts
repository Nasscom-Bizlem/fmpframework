import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisputeComponent } from './add-dispute.component';

describe('AddDisputeComponent', () => {
  let component: AddDisputeComponent;
  let fixture: ComponentFixture<AddDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
