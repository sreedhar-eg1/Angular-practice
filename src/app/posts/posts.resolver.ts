import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { first, map, mergeMap, Observable, of, tap } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<boolean> {
  private postsService = inject(PostsService);

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.postsService.loaded$.pipe(
    //   mergeMap((loaded) => {
    //     if (loaded) {
    //       return of(true);
    //     }
    //     return this.postsService.getAll().pipe(
    //       map((posts) => {
    //         return !!posts;
    //       })
    //     );
    //   }),
    //   first()
    // );
    return this.postsService.loaded$.pipe(
        tap((loaded) => {
            if (!loaded) {
                 this.postsService.getAll()
            }
        }),
        first()
    )
  }
}
