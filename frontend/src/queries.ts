import { gql } from '@apollo/client';

export const GET_POSTS = gql`{
      posts{
        id
        title
        content
        owner
        createdAt
      }
  
  }`;

export const GET_POST = gql`
    query GetPost($id: ID!){
        post(id: $id){
            title
            owner
            content
        }
    }
`

export const CREATE_POST = gql`
  mutation CreatePost($input: NewPost) {
    createPost(input: $input) {
        title
    }
  }
`;

export const DELETE_POST = gql`
    mutation DeletePost($id: ID!){
        deletePost(id: $id){
            title
        }
    }
`

export const UPDATE_POST = gql`
    mutation UpdatePost($input: UpdatePost) {
        updatePost(input:$input){
            title
        }
    }
`