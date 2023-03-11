import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { DELETE_POST, GET_POST, GET_POSTS } from '../queries'
import FormComponent from '../components/FormComponent'
import { useParams } from 'react-router-dom';



function PostPage() {

    const {id} = useParams();

    const [edit, setEdit] = useState(false)
    const [erasePost] = useMutation(DELETE_POST,{
      refetchQueries:[{query: GET_POSTS}],
    })

    const {loading, error, data} = useQuery(GET_POST, {
      variables: {id},
    })

    const deletePost = (id:number) => {
        erasePost({variables: {id: String(id)}})
    }

  if(loading) return <p>Loading...</p>
  if(error) return <p>SOmething went wrong</p>

  if(edit) return (
    <>
    {edit && <FormComponent edit={true} fn={() => setEdit(!edit)} data={null} />}
    </>
  )

  return (
    <div>
        <h1>{data.title}</h1>
        <p>Created by: {data.owner}</p>
        <p>Content: {data.content}</p>
        <button onClick={() => deletePost(data.id)}>Delete</button>
        <button onClick={() => setEdit(!edit)}>Edit Post</button>
    </div>
  )
}

export default PostPage