import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernotesComponent } from './customernotes.component';

describe('CustomernotesComponent', () => {
  let component: CustomernotesComponent;
  let fixture: ComponentFixture<CustomernotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomernotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
