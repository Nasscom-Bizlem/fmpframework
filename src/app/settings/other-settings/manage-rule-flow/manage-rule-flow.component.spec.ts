import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRuleFlowComponent } from './manage-rule-flow.component';

describe('ManageRuleFlowComponent', () => {
  let component: ManageRuleFlowComponent;
  let fixture: ComponentFixture<ManageRuleFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRuleFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRuleFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
