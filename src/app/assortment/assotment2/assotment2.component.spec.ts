import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assotment2Component } from './assotment2.component';

describe('Assotment2Component', () => {
  let component: Assotment2Component;
  let fixture: ComponentFixture<Assotment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assotment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assotment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
