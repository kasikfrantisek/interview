import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries';
import PostComponent from '../components/PostComponent';
import FormComponent from '../components/FormComponent';

export interface Post {
  id: number;
  title: string;
  content: string;
  owner: string;
  cratedAt: string
}

interface PostData {
  posts: Post[];
}

function PostListPage(){
  const { loading, error, data } = useQuery<PostData>(GET_POSTS);
  const [form, setForm] = useState<boolean>(false)
  const formRender = () => setForm(!form)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    <h2>Interview solution - Post app</h2>
      {!form && <button onClick={() => formRender()}>Add new</button>}
      {form && <FormComponent fn={formRender} edit={false} data={null}/>}
    <ul>
      {data?.posts.map(post => (
        
        <PostComponent data={post} key={post.id} />
        ))}
    </ul>
    </>
  )
};

export default PostListPage;
