
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import {Button} from '../../../shared/components/button/button';


@Component({
  selector: 'app-form-service',
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './form-service.html',
  styleUrl: './form-service.scss'
})
export class FormService {

  formulario: FormGroup;

  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.formSubmitted.emit(this.formulario.value);
    }
  }
}