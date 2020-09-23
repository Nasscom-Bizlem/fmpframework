import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleFlowComponent } from './rule-flow.component';

describe('RuleFlowComponent', () => {
  let component: RuleFlowComponent;
  let fixture: ComponentFixture<RuleFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
