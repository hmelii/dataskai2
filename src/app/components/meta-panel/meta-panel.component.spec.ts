import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPanelComponent } from './meta-panel.component';

describe('MetaPanelComponent', () => {
  let component: MetaPanelComponent;
  let fixture: ComponentFixture<MetaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
