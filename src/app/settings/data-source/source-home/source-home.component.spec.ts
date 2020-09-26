import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceHomeComponent } from './source-home.component';

describe('SourceHomeComponent', () => {
  let component: SourceHomeComponent;
  let fixture: ComponentFixture<SourceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
