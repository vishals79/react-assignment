import React from 'react'
import Post from '../Post/Post'
import { AST_PropAccess } from 'terser';

const postsList = (props) => {
    return (
        <Post data={props.data}></Post>
    )
};

export default postsList;