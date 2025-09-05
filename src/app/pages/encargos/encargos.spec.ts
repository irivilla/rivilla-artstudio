import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encargos } from './encargos';

describe('Encargos', () => {
  let component: Encargos;
  let fixture: ComponentFixture<Encargos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encargos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encargos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
