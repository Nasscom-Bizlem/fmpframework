import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPackageComponent } from './event-package.component';

describe('EventPackageComponent', () => {
  let component: EventPackageComponent;
  let fixture: ComponentFixture<EventPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
