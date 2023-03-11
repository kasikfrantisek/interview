import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {Post, Prisma} from '@prisma/client';
import { NewPost, UpdatePost } from 'src/graphql';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService){}

    async post(
        postWhereUniqueInput: Prisma.PostWhereUniqueInput,
      ): Promise<Post | null> {
        return this.prisma.post.findUnique({
          where: postWhereUniqueInput,
        });
      }
    
      async posts(): Promise<Post[]> {
        return this.prisma.post.findMany();
      }

      async createPost(input: NewPost): Promise<Post> {
        return this.prisma.post.create({
          data: input
        });
      }
    
      async updatePost(params: UpdatePost): Promise<Post> {
        const { id, title, owner, content } = params;
        return this.prisma.post.update({
          where: {
            id: parseInt(id),
          },
          data: {
            ...(owner && { owner }),
            ...(title && { title }),
            ...(content && { content }),
          },
        });
      }
    
      async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
        return this.prisma.post.delete({
          where,
        });
      }
}
