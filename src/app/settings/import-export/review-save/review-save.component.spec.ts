import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSaveComponent } from './review-save.component';

describe('ReviewSaveComponent', () => {
  let component: ReviewSaveComponent;
  let fixture: ComponentFixture<ReviewSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
