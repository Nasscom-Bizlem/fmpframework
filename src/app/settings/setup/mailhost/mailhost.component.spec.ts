import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailhostComponent } from './mailhost.component';

describe('MailhostComponent', () => {
  let component: MailhostComponent;
  let fixture: ComponentFixture<MailhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
