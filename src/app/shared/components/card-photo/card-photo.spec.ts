import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhoto } from './card-photo';

describe('CardPhoto', () => {
  let component: CardPhoto;
  let fixture: ComponentFixture<CardPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPhoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
