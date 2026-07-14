import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Silhouettes } from './silhouettes';

describe('Silhouettes', () => {
  let component: Silhouettes;
  let fixture: ComponentFixture<Silhouettes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Silhouettes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Silhouettes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
