import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGroupsComponent } from './settings-groups.component';

describe('SettingsGroupsComponent', () => {
  let component: SettingsGroupsComponent;
  let fixture: ComponentFixture<SettingsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
