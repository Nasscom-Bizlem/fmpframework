import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelReconComponent } from './manuel-recon.component';

describe('ManuelReconComponent', () => {
  let component: ManuelReconComponent;
  let fixture: ComponentFixture<ManuelReconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuelReconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuelReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
