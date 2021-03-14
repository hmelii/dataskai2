import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFeatureMiningCommentsComponent } from './table-feature-mining-comments.component';

describe('TableFeatureMiningCommentsComponent', () => {
  let component: TableFeatureMiningCommentsComponent;
  let fixture: ComponentFixture<TableFeatureMiningCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFeatureMiningCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFeatureMiningCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
