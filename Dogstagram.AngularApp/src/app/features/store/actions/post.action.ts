import { IPost } from '../models/post.model';

export class AddPost {
  static readonly type = '[Post] Add';
  constructor(public payload: IPost) {}
}
