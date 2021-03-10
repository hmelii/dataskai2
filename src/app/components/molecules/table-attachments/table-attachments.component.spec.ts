import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAttachmentsComponent } from './table-attachments.component';

describe('TableFilesComponent', () => {
  let component: TableAttachmentsComponent;
  let fixture: ComponentFixture<TableAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAttachmentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
