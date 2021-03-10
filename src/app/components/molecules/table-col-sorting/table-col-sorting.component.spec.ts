import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColSortingComponent } from './table-col-sorting.component';

describe('TableColSortingComponent', () => {
  let component: TableColSortingComponent;
  let fixture: ComponentFixture<TableColSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
