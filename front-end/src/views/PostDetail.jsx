import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/Context";
import Comment from "../components/Comment";

function PostDetail() {
  const { actions, store } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPostById(id);
    actions.getCommentsByPostId(id);
  }, [id]); // Asegúrate de que el efecto dependa del id

  return (
    <>
      {store.post.title ? (
        <article className="container blog-post">
          <h2 className="display-5 link-body-emphasis mb-1">
            {store.post.title}
          </h2>
          <h4 className="link-body-emphasis mb-1">{store.post.subtitle}</h4>
          <p className="blog-post-meta">
            {new Date(store.post.created_at).toDateString()}
          </p>
          <p>{store.post.body}</p>
          <h2>Comments:</h2>
          {store.comments.length ? (
            <div className="row">
              {store.comments.map((comment) => (
                <div key={comment.id} className="col-12">
                  <Comment {...comment} />
                </div>
              ))}
            </div>
          ) : (
            <h6>Sin Comentarios</h6>
          )}
        </article>
      ) : (
        <h1>Post no existe</h1>
      )}
    </>
  );
}

export default PostDetail;
