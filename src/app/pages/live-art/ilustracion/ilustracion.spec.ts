import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ilustracion } from './ilustracion';

describe('Ilustracion', () => {
  let component: Ilustracion;
  let fixture: ComponentFixture<Ilustracion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ilustracion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ilustracion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
