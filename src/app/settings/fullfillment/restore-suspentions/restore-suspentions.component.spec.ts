import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreSuspentionsComponent } from './restore-suspentions.component';

describe('RestoreSuspentionsComponent', () => {
  let component: RestoreSuspentionsComponent;
  let fixture: ComponentFixture<RestoreSuspentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreSuspentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreSuspentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
