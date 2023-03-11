import React, { useState } from 'react'
import { Post } from '../pages/PostListPage'
import { DELETE_POST, GET_POSTS } from '../queries'
import { useMutation } from '@apollo/client'
import FormComponent from './FormComponent'
import {Link} from "react-router-dom"

function PostComponent({data} : {data:Post}) {
    const [edit, setEdit] = useState(false)
    const [erasePost] = useMutation(DELETE_POST,{refetchQueries:[{query: GET_POSTS}]})

    const deletePost = (id:number) => {
        erasePost({variables: {id: String(id)}})
    }

  if(edit) return (
    <>
    {edit && <FormComponent edit={true} fn={() => setEdit(!edit)} data={data} />}
    </>
  )

  return (
    <div>
        <h1>{data.title}</h1>
        <p>Created by: {data.owner}</p>
        <p>Content: {data.content}</p>
        <button onClick={() => deletePost(data.id)}>Delete</button>
        <button onClick={() => setEdit(!edit)}>Edit Post</button>
        <Link to={`/post/${data.id}`}>Detail</Link>
    </div>
  )
}

export default PostComponent