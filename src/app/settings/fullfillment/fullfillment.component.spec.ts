import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullfillmentComponent } from './fullfillment.component';

describe('FullfillmentComponent', () => {
  let component: FullfillmentComponent;
  let fixture: ComponentFixture<FullfillmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullfillmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
