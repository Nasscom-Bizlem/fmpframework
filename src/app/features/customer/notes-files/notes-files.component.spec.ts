import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFilesComponent } from './notes-files.component';

describe('NotesFilesComponent', () => {
  let component: NotesFilesComponent;
  let fixture: ComponentFixture<NotesFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
