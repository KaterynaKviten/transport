import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLine } from './route-line';

describe('RouteLine', () => {
  let component: RouteLine;
  let fixture: ComponentFixture<RouteLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
