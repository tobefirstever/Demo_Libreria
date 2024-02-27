import { Injectable } from '@angular/core';
import swal, { SweetAlertResult } from 'sweetalert2';
import { IMessageParameter } from '../models/message-parameter.model';
import { IConfirmParameter } from '../models/confirm-parameter.model';
import { EnviromentService } from './enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public _enviromentService: EnviromentService) {}

  toastMessage(parameter: IMessageParameter) {      
    swal.fire({
      title: parameter.title,
      type: parameter.type,
      toast: true,
      position: parameter.position ? parameter.position : 'top-end',
      showConfirmButton: false,
      timer: this._enviromentService.timeOutNotifications
    });
  }

  confirmMessage(parameter: IConfirmParameter | string): Promise<SweetAlertResult> {
    return this.baseConfirmMessage(parameter, 'request');
  }

  deleteConfirmMessage(parameter: IConfirmParameter | string): Promise<SweetAlertResult> {
    return this.baseConfirmMessage(parameter, 'delete');
  }

  private baseConfirmMessage(parameter: IConfirmParameter | string, type: 'delete' | 'request'): Promise<SweetAlertResult> {
    let parametersMessage: IConfirmParameter;

    if (typeof parameter === 'string') {
      parametersMessage = {
        title: parameter,
        text: type === 'request' ? '¿Estás seguro de realizar esta operación?' : `¿Estás seguro de eliminar el ${parameter}`,
        type: 'question'
      };
    } else {
      parametersMessage = parameter;
    }

    return swal.fire({
      title: parametersMessage.title,
      text: parametersMessage.text,
      type: parametersMessage.type,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    });
  }

  successSaveMessage() {
    this.showMessage({
      title: 'Guardado!',
      text: 'La operación se realizó satisfactoriamente',
      type: 'success'
    });
  }

  showMessage(parameter: IConfirmParameter) {
    swal.fire(parameter.title, parameter.text, parameter.type);
  }
}
