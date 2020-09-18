import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assotment3Component } from './assotment3.component';

describe('Assotment3Component', () => {
  let component: Assotment3Component;
  let fixture: ComponentFixture<Assotment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assotment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assotment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
