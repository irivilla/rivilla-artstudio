
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
import { PresupuestoService } from '../../services/presupuestoService/presupuesto-service';


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
  mostrarNumeroCopias: boolean = false;
  requireLugar: boolean = false;
  isValid: boolean = true;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private languageService: LanguageService, private presupuestoService: PresupuestoService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      servicio: [null, Validators.required],
      fecha: [this.today, Validators.required],
      lugar: ['', Validators.required],
      mensaje: [''],
      numeroInvitados: ['100', [Validators.pattern('^[0-9]+$'), Validators.min(1), Validators.required]], // Default value set to 100
      numeroCopias: ['15', [Validators.pattern('^[0-9]+$'), Validators.min(15), Validators.required]] // Default value set to 1
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



  onSubmit(): void {
    this.isSubmitted = true;

  if (this.formulario.invalid) {
    // controlar errores 
    this.isValid = false;
    this.formulario.markAllAsTouched();
    console.error('Formulario inválido', this.formulario.errors);
    return;
  }else{
    this.isValid = true;
    console.log('Formulario válido', this.formulario.value);
    this.presupuestoService.enviar(this.formulario.value).subscribe({

      next: (respuesta) => {
        console.log('Respuesta API:', respuesta);
      },

      error: (error) => {
        console.error(error);
      }

    });
  }

}

  get selectedLang(): string {
    return this.languageService.getCurrentLanguage();
  }
    get necesitaInvitados(): boolean {
    return this.servicioId === 1;
  }

  //cuando se selecciona un servicio
 private actualizarFormulario(servicio: Servicio): void {

  const invitados = this.formulario.get('numeroInvitados');
  const copias = this.formulario.get('numeroCopias');
  const lugar = this.formulario.get('lugar');

  // Reiniciamos el estado del formulario dinámico
  this.mostrarNumeroInvitados = false;
  this.mostrarNumeroCopias = false;
  this.requireLugar = true;

  invitados?.clearValidators();
  copias?.clearValidators();
  lugar?.clearValidators();

  // Configuración para servicios que requieren número de invitados
  if (servicio.requiereNumeroInvitados) {

    this.mostrarNumeroInvitados = true;

    invitados?.setValidators([
      Validators.required,
      Validators.min(1)
    ]);

  }

  // Configuración para servicios que requieren número de copias
  if (servicio.requiereNumeroCopias) {
    //no necesita lugar de evento, para que no de error de validacion

    this.mostrarNumeroCopias = true;
    copias?.setValidators([
      Validators.required,
      Validators.min(15)
    ]);
  }

  if (servicio.requiereLugar) {
    this.requireLugar = true;
    lugar?.setValidators([
      Validators.required
    ]);
  }else{
    this.requireLugar = false;
    this.formulario.get('lugar')?.setValue('-'); //no es necesario
  }




  invitados?.updateValueAndValidity();

}

  public clear(): void {
    //     Reset the form to its initial state, including the default value for numeroInvitados and pristine state for the form controls  


    this.formulario.reset({
      nombre: '',
      email: '',
      telefono: '',
      servicio: null,
      fecha: this.today,
      lugar: '',
      mensaje: '',
      numeroInvitados: '100', // Reset to default value
      numeroCopias: '15' // Reset to default value
    });

      this.formulario.markAsPristine();
      this.formulario.markAsUntouched();
      

  this.isSubmitted = false;
   this.mostrarNumeroInvitados = false;
  this.mostrarNumeroCopias= false;
  this.requireLugar = false;
  }


  //para validar errores en html
  get form() {
  return this.formulario.controls;
}
  
}