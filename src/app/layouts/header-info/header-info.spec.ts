import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfo } from './header-info';

describe('HeaderInfo', () => {
  let component: HeaderInfo;
  let fixture: ComponentFixture<HeaderInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
