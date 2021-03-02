import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColSwitcherComponent } from './table-col-switcher.component';

describe('TableColSwitcherComponent', () => {
  let component: TableColSwitcherComponent;
  let fixture: ComponentFixture<TableColSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
