
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewPost {
    title: string;
    content?: Nullable<string>;
    owner?: Nullable<string>;
}

export class UpdatePost {
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
    owner?: Nullable<string>;
}

export class Post {
    id: string;
    title: string;
    content?: Nullable<string>;
    owner?: Nullable<string>;
    createdAt: string;
}

export abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createPost(input?: Nullable<NewPost>): Post | Promise<Post>;

    abstract updatePost(input?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
