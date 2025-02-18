import { HttpInterceptorFn } from "@angular/common/http";

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Login Interceptor');
    
    const modifiedReq = req.clone({
        setHeaders: {
            'token': 'tokensgfdjsgnsbgsjhsgdhjde'
        }
    })

    return next(modifiedReq)
}