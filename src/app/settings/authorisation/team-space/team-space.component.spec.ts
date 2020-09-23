import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSpaceComponent } from './team-space.component';

describe('TeamSpaceComponent', () => {
  let component: TeamSpaceComponent;
  let fixture: ComponentFixture<TeamSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
