import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { Observable } from 'rxjs';
import { IJsonResult } from 'src/app/shared/models/json-result.model';
import { INlogResponse } from '../models/nlog-response';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class NlogService extends BaseService {

  private _controller: string = 'nLog';

  /**
   * Constructor
   * @param {HttpClient} httpClient Instancia para invocación a servicios
   * @param {EnviromentService} _enviromentService Instancia para invocación el uri dependiendo del ambiente
   * @param {HttpClient} _router Instancia para manejo de rutas
   */  
  constructor(
    protected httpClient: HttpClient, 
    private _enviromentService: EnviromentService,
    private _paginationService: PaginationService) { 
    super(httpClient);
  }

  getAll(): Observable<IJsonResult<INlogResponse[]>> {
    const url = `${this._enviromentService.urlBaseServicios}` +
    `${this._controller}`;
    return this.httpClient.get<IJsonResult<INlogResponse[]>>(url);
  }  

  getAllPaging(): Observable<IJsonResult<INlogResponse[]>> {
    const url = `${this._enviromentService.urlBaseServicios}` +
    `${this._controller}` +
    `/${this._paginationService.pageNumber}/${this._paginationService.pageSize}`;
    return this.httpClient.get<IJsonResult<INlogResponse[]>>(url);
  }   
}
