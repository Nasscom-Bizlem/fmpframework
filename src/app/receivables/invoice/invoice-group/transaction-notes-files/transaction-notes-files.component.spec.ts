import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNotesFilesComponent } from './transaction-notes-files.component';

describe('TransactionNotesFilesComponent', () => {
  let component: TransactionNotesFilesComponent;
  let fixture: ComponentFixture<TransactionNotesFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNotesFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNotesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
