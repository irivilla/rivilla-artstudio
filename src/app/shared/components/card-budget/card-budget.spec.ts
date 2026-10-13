import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBudget } from './card-budget';

describe('CardBudget', () => {
  let component: CardBudget;
  let fixture: ComponentFixture<CardBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
