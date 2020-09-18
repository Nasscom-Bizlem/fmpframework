import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleflowComponent } from './ruleflow.component';

describe('RuleflowComponent', () => {
  let component: RuleflowComponent;
  let fixture: ComponentFixture<RuleflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
