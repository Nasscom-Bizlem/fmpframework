import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPackageComponent } from './action-package.component';

describe('ActionPackageComponent', () => {
  let component: ActionPackageComponent;
  let fixture: ComponentFixture<ActionPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
