import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Papel } from './papel';

describe('Papel', () => {
  let component: Papel;
  let fixture: ComponentFixture<Papel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Papel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Papel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
