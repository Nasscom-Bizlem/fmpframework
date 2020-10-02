import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteamspaceComponent } from './addteamspace.component';

describe('AddteamspaceComponent', () => {
  let component: AddteamspaceComponent;
  let fixture: ComponentFixture<AddteamspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteamspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteamspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
