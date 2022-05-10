import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
 
  jwtToken: string = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdWtzaGF5IiwidGVuYW50SWQiOiJhYzg1YmM1OC1iYTI0LTRkMWMtYmE5Ny1jZTk0OGY0MTgwMDQiLCJleHAiOjE2NTM4ODM4ODgsImlhdCI6MTY1MjA4Mzg4OCwianRpIjoiQnVzaW5lc3NVc2VyIn0.txpHxRt33fdOX97nbUIJxglGx_4zVlMehgq_BXVcTWq_W65B8bnfkWxSIAk0RkKI0p-buDeg5uqz1dHeco25ow';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: new HttpHeaders({
        'Authorization': this.jwtToken
      })
    });

    return next.handle(request);
  }
}
