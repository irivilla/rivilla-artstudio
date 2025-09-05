import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Papeleria } from './papeleria';

describe('Papeleria', () => {
  let component: Papeleria;
  let fixture: ComponentFixture<Papeleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Papeleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Papeleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
