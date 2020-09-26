import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVerisonComponent } from './save-verison.component';

describe('SaveVerisonComponent', () => {
  let component: SaveVerisonComponent;
  let fixture: ComponentFixture<SaveVerisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveVerisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveVerisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
