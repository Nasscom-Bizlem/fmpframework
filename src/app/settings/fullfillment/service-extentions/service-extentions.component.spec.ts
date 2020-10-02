import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExtentionsComponent } from './service-extentions.component';

describe('ServiceExtentionsComponent', () => {
  let component: ServiceExtentionsComponent;
  let fixture: ComponentFixture<ServiceExtentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceExtentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExtentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
