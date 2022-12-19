import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../core/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //Inject Auth service to the interceptor
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Create headers Object and add Authorization param to it.
    const headers = new HttpHeaders().append('Authorization', `Bearer ${this.authService.getToken()}`);
    //Create a modified request
    const modifiedRequest = request.clone({headers});
    return next.handle(modifiedRequest);
  }
}
