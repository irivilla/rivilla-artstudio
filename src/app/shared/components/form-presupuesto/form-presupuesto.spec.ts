import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPresupuesto } from './form-presupuesto';

describe('FormPresupuesto', () => {
  let component: FormPresupuesto;
  let fixture: ComponentFixture<FormPresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPresupuesto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPresupuesto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
