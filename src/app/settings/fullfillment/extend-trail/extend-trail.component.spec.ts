import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendTrailComponent } from './extend-trail.component';

describe('ExtendTrailComponent', () => {
  let component: ExtendTrailComponent;
  let fixture: ComponentFixture<ExtendTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendTrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
