
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import {Button} from '../../../shared/components/button/button';
import { SERVICIOS } from '../../../shared/data/servicios.data';
import { Servicio } from '../../../shared/models/servicio.model';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';


@Component({
  selector: 'app-form-service',
  imports: [CommonModule, ReactiveFormsModule, Button, Select, DatePickerModule, FormsModule],
  templateUrl: './form-service.html',
  styleUrl: './form-service.scss'
})
export class FormService implements OnInit{

  formulario: FormGroup;
  // Get today's date in dd/mm/aaaa format for default value of the date input
  today = new Date();

  //cuando se pasa el ID d un servicio seleccionado desde el componente padre, se asigna a esta propiedad
  @Input() servicioId?: number;
  servicios: Servicio[] = SERVICIOS;



  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      servicio: [null, Validators.required],
      fecha: [this.today, Validators.required],
      lugar: ['', Validators.required],
      mensaje: [''],
      numeroInvitados: ['100', [Validators.pattern('^[0-9]+$'), Validators.min(1)]] // Default value set to 100
    });
  }

 ngOnInit(): void {
    if (this.servicioId) {
      const servicio = this.servicios.find(s => s.id === this.servicioId);
      if (servicio) {
        this.formulario.patchValue({
          servicio:  this.servicioId
        });
      }
    }
  if (this.servicioId === 1) {

      this.formulario.get('numeroInvitados')?.setValidators([
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.min(1)
      ]);

      this.formulario.get('numeroInvitados')?.updateValueAndValidity();

    }

  }



  onSubmit() {
    if (this.formulario.valid) {
      this.formSubmitted.emit(this.formulario.value);
    }
  }

  get necesitaInvitados(): boolean {
  return this.servicioId === 1;
}
}