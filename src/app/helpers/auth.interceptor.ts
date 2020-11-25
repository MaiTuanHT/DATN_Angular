import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authReq = request;
    const token = this.tokenStorageService.getToken();
    // console.log(this.tokenStorageService.getToken());
    if (token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
