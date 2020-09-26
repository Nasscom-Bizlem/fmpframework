import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmpTeroCardComponent } from './fmp-tero-card.component';

describe('FmpTeroCardComponent', () => {
  let component: FmpTeroCardComponent;
  let fixture: ComponentFixture<FmpTeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmpTeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmpTeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
