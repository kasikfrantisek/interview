import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { CREATE_POST, GET_POSTS, UPDATE_POST } from '../queries';
import { Post } from '../pages/PostListPage';

type Inputs = {
    title: string,
    content: string,
    owner: string
}

function FormComponent({fn, edit, data} : {fn:Function, edit:boolean, data:Post | null}) {

    const [createPost] = useMutation(CREATE_POST, {refetchQueries:[{query: GET_POSTS}]})
    const [updatePost] = useMutation(UPDATE_POST, {refetchQueries:[{query: GET_POSTS}]})

    const {register, handleSubmit} = useForm<Inputs>()
    const send:SubmitHandler<Inputs> = (inputs) => {
        const {title, content, owner} = inputs;
        if(edit){
            const id = data?.id
            const input = {title, content, owner, id }
            updatePost({variables: {input}})
        } else {
            const input = {title, content, owner }
            createPost({variables: {input}})
        }
        fn()
    }
  return (
    <form onSubmit={handleSubmit(send)}>
        <label>Title:</label>
        <input type='string' defaultValue={edit ? data?.title : ''} required {...register('title')} />
        <label>Owner: </label>
        <input type='string' defaultValue={edit ? data?.owner : ''} required {...register('owner')} />
        <label>Content:</label>
        <textarea required defaultValue={edit ? data?.content : ''} {...register('content')} />
        <button type='submit' >{edit ? 'Edit' : 'Add'}</button>
        <button onClick={() => fn()}>X</button>
    </form>
  )
}

export default FormComponent