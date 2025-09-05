import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingPlan } from './seating-plan';

describe('SeatingPlan', () => {
  let component: SeatingPlan;
  let fixture: ComponentFixture<SeatingPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatingPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatingPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
