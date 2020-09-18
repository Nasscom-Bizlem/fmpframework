import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assotment1Component } from './assotment1.component';

describe('Assotment1Component', () => {
  let component: Assotment1Component;
  let fixture: ComponentFixture<Assotment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assotment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assotment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
