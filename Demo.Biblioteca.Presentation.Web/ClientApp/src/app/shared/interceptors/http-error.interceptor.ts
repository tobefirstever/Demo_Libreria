import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public _router: Router, public _injector: Injector, public _messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        // Operation failed; error is an HttpErrorResponse
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this._messageService.toastMessage({
              title: 'No tiene acceso a la pantalla solicitada o su sesión ya expiró',
              type: 'error'
            });

            this._router.navigate(['/auth']);
          } else {
            this._messageService.toastMessage({
              title: 'Ocurrió un error durante el proceso, intente nuevamente.',
              type: 'error'
            });
          }
        }
      )
    );
  }
}
