import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assotment4Component } from './assotment4.component';

describe('Assotment4Component', () => {
  let component: Assotment4Component;
  let fixture: ComponentFixture<Assotment4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assotment4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assotment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
