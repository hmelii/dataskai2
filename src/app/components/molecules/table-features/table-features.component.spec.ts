import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFeaturesComponent } from './table-features.component';

describe('TableFeaturesComponent', () => {
  let component: TableFeaturesComponent;
  let fixture: ComponentFixture<TableFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
