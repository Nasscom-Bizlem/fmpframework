import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTeamspaceComponent } from './customer-teamspace.component';

describe('CustomerTeamspaceComponent', () => {
  let component: CustomerTeamspaceComponent;
  let fixture: ComponentFixture<CustomerTeamspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTeamspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTeamspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
