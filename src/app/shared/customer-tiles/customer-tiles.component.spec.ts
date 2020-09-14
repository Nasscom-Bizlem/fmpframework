import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTilesComponent } from './customer-tiles.component';

describe('CustomerTilesComponent', () => {
  let component: CustomerTilesComponent;
  let fixture: ComponentFixture<CustomerTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
