import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTaskNameComponent } from './table-task-name.component';

describe('TableTaskNameComponent', () => {
  let component: TableTaskNameComponent;
  let fixture: ComponentFixture<TableTaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTaskNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
