import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsFilterComponent } from './authors-filter.component';

describe('AuthorsFilterComponent', () => {
  let component: AuthorsFilterComponent;
  let fixture: ComponentFixture<AuthorsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
