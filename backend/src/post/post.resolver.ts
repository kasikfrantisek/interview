import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import {Post, NewPost, UpdatePost } from 'src/graphql';
import {Post as PostModel} from '@prisma/client'


@Resolver('Post')
export class PostResolver {
    constructor(private readonly postService: PostService) {}

    @Query('posts')
    async getAllPosts(): Promise<PostModel[]>{
      return this.postService.posts()
    }
  
    @Query('post')
    async getSinglePost(@Args('id') args: string): Promise<PostModel>{
      return this.postService.post({id: Number(args)})
    }
  
    @Mutation('createPost')
    async create(@Args('input') args: NewPost) {
      return this.postService.createPost(args);
    }
  
    @Mutation('updatePost')
    async update(@Args('input') args: UpdatePost) {
      return this.postService.updatePost(args);
    }
  
    @Mutation('deletePost')
    async deleteSinglePost(@Args('id') id:string): Promise<PostModel>{
      return this.postService.deletePost({id: Number(id)})
    }
}
