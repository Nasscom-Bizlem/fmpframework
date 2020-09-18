import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assotment5Component } from './assotment5.component';

describe('Assotment5Component', () => {
  let component: Assotment5Component;
  let fixture: ComponentFixture<Assotment5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assotment5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assotment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
