import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public _injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authService = this._injector.get(AuthService);

    // Get the auth token from the service.
    const authToken = authService.getAuthorizationToken();

    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.      
      const authReq = request.clone({
          setHeaders: {
              Authorization: `Bearer ${authToken}`
          }
      });
      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }    

    // send request with header to the next handler.
    return next.handle(request);
  }
}
