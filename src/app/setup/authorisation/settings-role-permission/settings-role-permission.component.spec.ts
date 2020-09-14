import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRolePermissionComponent } from './settings-role-permission.component';

describe('SettingsRolePermissionComponent', () => {
  let component: SettingsRolePermissionComponent;
  let fixture: ComponentFixture<SettingsRolePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRolePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
