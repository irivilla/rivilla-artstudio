import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveArt } from './live-art';

describe('LiveArt', () => {
  let component: LiveArt;
  let fixture: ComponentFixture<LiveArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveArt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveArt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
