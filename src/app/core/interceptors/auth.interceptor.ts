import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpParams,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newReq: HttpRequest<unknown> = request.clone({
      params: (request.params ? request.params : new HttpParams()).set(
        'api-key',
        environment.API_KEY
      ),
    });

    return next.handle(newReq);
  }
}
