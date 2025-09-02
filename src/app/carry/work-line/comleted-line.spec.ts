import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComletedLine } from './work-line';

describe('ComletedLine', () => {
  let component: ComletedLine;
  let fixture: ComponentFixture<ComletedLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComletedLine],
    }).compileComponents();

    fixture = TestBed.createComponent(ComletedLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
