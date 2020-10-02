import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreSuspentionComponent } from './restore-suspention.component';

describe('RestoreSuspentionComponent', () => {
  let component: RestoreSuspentionComponent;
  let fixture: ComponentFixture<RestoreSuspentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreSuspentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreSuspentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
