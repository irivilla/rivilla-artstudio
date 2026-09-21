import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  //alertas popup 
  constructor(private translate: TranslateService) {}

  //alerta normal
  showAlert(
    position: SweetAlertPosition,
    icon: SweetAlertIcon,
    title: string,
    timer: number = 1500
  ) {

    const titleTranslate = this.translate.instant(title);

    return Swal.fire({
      position,
      icon,
      title: titleTranslate,
      showConfirmButton: false,
      timer
    });
  }

  //alerta con datos
  showAlertWithData(
    position: SweetAlertPosition,
    icon: SweetAlertIcon,
    title: string,
    data: any,
    timer: number = 1500
  ) {

    const titleTranslate = this.translate.instant(title, data);

    return Swal.fire({
      position,
      icon,
      title: titleTranslate,
      showConfirmButton: false,
      timer
    });
  }
}
