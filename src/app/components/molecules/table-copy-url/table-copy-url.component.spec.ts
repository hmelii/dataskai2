import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCopyUrlComponent } from './table-copy-url.component';

describe('CopyLinkComponent', () => {
  let component: TableCopyUrlComponent;
  let fixture: ComponentFixture<TableCopyUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCopyUrlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCopyUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
