import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRuleFlowComponent } from './create-rule-flow.component';

describe('CreateRuleFlowComponent', () => {
  let component: CreateRuleFlowComponent;
  let fixture: ComponentFixture<CreateRuleFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRuleFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRuleFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
