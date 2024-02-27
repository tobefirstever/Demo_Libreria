import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { IUsuarioLoginRequest } from '../models/usuario-login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  /**
   * Constructor
   * @param {HttpClient} httpClient Instancia para invocación a servicios
   * @param {EnviromentService} _enviromentService Instancia para invocación el uri dependiendo del ambiente
   * @param {HttpClient} _router Instancia para manejo de rutas
   */  
  constructor(
    protected httpClient: HttpClient, 
    private _enviromentService: EnviromentService,
    private _router: Router) { 
    super(httpClient);
  }

  /**
   * Permite autenticarse
   * @param {UsuarioLoginRequest} usuarioLoginRequest Objeto que envía datos para realizar autenticación
   */
  login(usuarioLoginRequest: IUsuarioLoginRequest): Observable<any> {
    const url = `${this._enviromentService.urlBaseServicios}auth`;    
    return this.httpClient.post<any>(url, usuarioLoginRequest, this.httpOptions);
  }  

  guardarStorage(
    id: string,
    token: string,
    userName: string,
    recordar: boolean
  ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);

    if (recordar) {
      localStorage.setItem('usuario', userName);
    } else {
      localStorage.removeItem('usuario');
    }
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  getUsuarioId(): number {
    return parseInt(localStorage.getItem('id'), 10);
  }

  getStoredUser(): string {
    return localStorage.getItem('usuario');
  }

  removeAuthorizationToken() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }

  cerrarSesion() {
    this.removeAuthorizationToken();
    this._router.navigate(['/auth']);
  }
}
