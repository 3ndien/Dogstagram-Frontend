import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddPost } from '../actions/post.action';
import { IPost } from '../models/post.model';

@Injectable()
export class PostsStateModel {
  posts!: IPost[];
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
  },
})
@Injectable()
export class PostsState {
  @Selector()
  static getPosts(state: PostsStateModel) {
    return state.posts;
  }

  @Action(AddPost)
  addPost(ctx: StateContext<PostsStateModel>, { payload }: AddPost) {
    const state = ctx.getState();
    ctx.setState({
      posts: [...state.posts, payload],
    });
  }
}
