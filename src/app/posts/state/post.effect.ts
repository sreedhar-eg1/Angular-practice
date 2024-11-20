import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../../services/posts.service";
import { loadPost, loadPostSuccess } from "./post.action";
import { map, mergeMap } from "rxjs";

@Injectable()
export class PostsEffect {
    constructor(private action$: Actions, private postsServce: PostsService) {}

    loadPosts$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadPost),
            mergeMap((action) => {
                console.log(action)
                return this.postsServce.getPosts().pipe(
                    map((post) => {
                        return loadPostSuccess({post})
                    })
                )
            })
        )
    })
}