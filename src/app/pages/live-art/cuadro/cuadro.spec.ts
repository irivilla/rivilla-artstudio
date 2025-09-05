import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro } from './cuadro';

describe('Cuadro', () => {
  let component: Cuadro;
  let fixture: ComponentFixture<Cuadro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cuadro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuadro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
