import React from "react";
import { Context } from "../store/Context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
function PostDetail() {
  const { actions, store } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.getPostById(id);
  }, []);

  return (
    <>
      {store.post.title ? 
      <article className="container blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">
            {store.post.title}
        </h2>
        <h4 className="link-body-emphasis mb-1">
            {store.post.subtitle}
        </h4>
        <p className="blog-post-meta">
          
          {new Date(store.post.created_at).toDateString()}
        </p>
        <p className="blog-post-meta">
          
          {store.post.body}
        </p>
        <p>
            
        </p>
      </article>: <h1>Post no existe</h1>}
    </>
  );
}

export default PostDetail;