import { HttpInterceptorFn } from "@angular/common/http";

export const customHeaderInterceptor: HttpInterceptorFn = (req, next) => {
    const modifiedReq = req.clone({
        setHeaders: {
            'addHeader': 'addedHeader'
        }
    })

    return next(modifiedReq)
}