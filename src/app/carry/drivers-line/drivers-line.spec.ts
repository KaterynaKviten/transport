import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversLine } from './drivers-line';

describe('DriversLine', () => {
  let component: DriversLine;
  let fixture: ComponentFixture<DriversLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
