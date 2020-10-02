import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnReconciledComponent } from './un-reconciled.component';

describe('UnReconciledComponent', () => {
  let component: UnReconciledComponent;
  let fixture: ComponentFixture<UnReconciledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnReconciledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnReconciledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
