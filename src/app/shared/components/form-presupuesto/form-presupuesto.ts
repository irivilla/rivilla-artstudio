
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import {Button} from '../button/button';
import { SERVICIOS } from '../../data/servicios.data';
import { Servicio } from '../../models/servicio.model';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { LanguageService } from '../../services/languageService/language-service';
import {TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-form-presupuesto',
  imports: [CommonModule, ReactiveFormsModule, Button, Select, DatePickerModule, FormsModule, TranslateModule],
  templateUrl: './form-presupuesto.html',
  styleUrl: './form-presupuesto.scss'
})
export class FormPresupuesto implements OnInit{

  formulario: FormGroup;
  // Get today's date in dd/mm/aaaa format for default value of the date input
  today = new Date();

  //cuando se pasa el ID d un servicio seleccionado desde el componente padre, se asigna a esta propiedad
  @Input() servicioId?: number;
  servicios: Servicio[] = SERVICIOS;

  mostrarNumeroInvitados: boolean = false;


  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
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

  // Si el componente padre indica un servicio por defecto
  if (this.servicioId) {

    const servicio = this.servicios.find(s => s.id === this.servicioId);

    if (servicio) {

      // Seleccionamos el servicio en el formulario
      this.formulario.patchValue({
        servicio
      });

      // Configuramos el formulario según el servicio
      this.actualizarFormulario(servicio);

    }

  }

  // Escuchamos los cambios del selector de servicios
  this.formulario.get('servicio')?.valueChanges.subscribe((servicio: Servicio) => {

    if (servicio) {
      this.actualizarFormulario(servicio);
    }

  });

}



  onSubmit() {
    if (this.formulario.valid) {
      this.formSubmitted.emit(this.formulario.value);
      console.log('Formulario enviado:', this.formulario.value);
    }
  }
get selectedLang(): string {
  return this.languageService.getCurrentLanguage();
}
  get necesitaInvitados(): boolean {
  return this.servicioId === 1;
}



 private actualizarFormulario(servicio: Servicio): void {

  const invitados = this.formulario.get('numeroInvitados');

  // Reiniciamos el estado del formulario dinámico
  this.mostrarNumeroInvitados = false;

  invitados?.clearValidators();

  // Configuración para servicios que requieren número de invitados
  if (servicio.requiereNumeroInvitados) {

    this.mostrarNumeroInvitados = true;

    invitados?.setValidators([
      Validators.required,
      Validators.min(1)
    ]);

  }

  invitados?.updateValueAndValidity();

}
}