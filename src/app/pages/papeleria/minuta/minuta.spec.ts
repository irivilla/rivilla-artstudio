import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minuta } from './minuta';

describe('Minuta', () => {
  let component: Minuta;
  let fixture: ComponentFixture<Minuta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minuta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minuta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
