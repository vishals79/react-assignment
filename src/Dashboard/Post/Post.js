import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <div className="card border-dark mb-3 Card Post">
            <div className="card-header bg-transparent border-dark">{props.data.data.title}</div>
            <div className="card-body text-success">
                <img className="Image" src={props.data.data.url}></img>
            </div>
            <div className="card-footer bg-transparent border-dark">
                <p>Ups: {props.data.data.ups}</p>
                <p>Downs: {props.data.data.downs}</p>
            </div>
            <div className="card-footer Author">
                <small className="text-muted">{props.data.data.author_fullname}</small>
            </div>
        </div>
    )
};

export default post;