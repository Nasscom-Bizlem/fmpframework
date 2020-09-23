import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeTrailComponent } from './upgrade-trail.component';

describe('UpgradeTrailComponent', () => {
  let component: UpgradeTrailComponent;
  let fixture: ComponentFixture<UpgradeTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeTrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
