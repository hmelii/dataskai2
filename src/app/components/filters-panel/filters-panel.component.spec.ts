import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersPanelComponent } from './filters-panel.component';

describe('FiltersPanelComponent', () => {
  let component: FiltersPanelComponent;
  let fixture: ComponentFixture<FiltersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
