import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public urlBaseServicios = 'http://localhost/api/';
  public urlBaseApiSeguridad = '';

  // Whether or not to enable debug mode
  public enableDebug = true;
  public timeOutNotifications = 5000;

  constructor() {}
}