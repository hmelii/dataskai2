import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangsSwitcherComponent } from './langs-switcher.component';

describe('ThemesSwitcherComponent', () => {
  let component: LangsSwitcherComponent;
  let fixture: ComponentFixture<LangsSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangsSwitcherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
