import React from "react";

function Comment(props){
    return(
        <>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
            <p>{props.created_at}</p>
        </>
    );
}

export default Comment;