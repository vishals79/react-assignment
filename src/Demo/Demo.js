import React from 'react';
const demo = (props) => {
    return (
        <div>
            <p> Demo Name: {props.demoName}, Demo Type: {props.demoType}</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.change} value={props.demoName}></input>
        </div>
    )
};

export default demo;