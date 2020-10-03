import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCentreComponent } from './call-centre.component';

describe('CallCentreComponent', () => {
  let component: CallCentreComponent;
  let fixture: ComponentFixture<CallCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
