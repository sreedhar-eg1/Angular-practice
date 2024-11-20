import { Post } from "../../models/post.model"

export interface PostsState {
    posts: Post[]
}

export const intialState: PostsState = {
    posts: []
}