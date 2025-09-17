import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormService } from './form-service';

describe('FormService', () => {
  let component: FormService;
  let fixture: ComponentFixture<FormService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
