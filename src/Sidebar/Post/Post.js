import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <div className="Post">
            <h1>{props.data.data.title}</h1>
            <img className="Image" src={props.data.data.url}></img>
        </div>
    )
};

export default post;