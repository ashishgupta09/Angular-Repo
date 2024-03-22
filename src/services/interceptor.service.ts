import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifedReq = req.clone({ headers: req.headers.append('auth', 'abcxy') });
    return next.handle(modifedReq).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log('Interceptor Called!');
        console.log(event.body);
      }
    }))
  }
}

