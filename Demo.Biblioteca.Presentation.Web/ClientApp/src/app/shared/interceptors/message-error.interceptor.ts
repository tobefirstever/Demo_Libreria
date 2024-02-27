import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Injectable()
export class MessageErrorInterceptor implements HttpInterceptor {
  constructor(public _router: Router, public _messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse && event.ok) {
            if (event.body.valid === false) {
              this._messageService.toastMessage({
                title: event.body.message,
                type: 'error'
              });
            }
          }
        },
        // Operation failed; error is an HttpErrorResponse
        () => {}
      )
    );
  }
}
