import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhatsappDialogComponent } from './edit-whatsapp-dialog.component';

describe('EditWhatsappDialogComponent', () => {
  let component: EditWhatsappDialogComponent;
  let fixture: ComponentFixture<EditWhatsappDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWhatsappDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWhatsappDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
