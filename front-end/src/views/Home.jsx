import React, { act } from "react";
import Jumbotron from "../components/Jumbotron";
import Post from "../components/Post";
import { Context } from "../store/Context";
import { useContext, useEffect } from "react";

export function Home() {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.getPosts();
  }, []);

  return (
    <>
      <Jumbotron />
      {store.posts.length ? (
        store.posts.map((post) => <Post title={post.title} subtitle={post.subtitle} body={post.body} date={post.date} />)
      ) : (
        <h1>Loading</h1>
      )}
      
    </>
  );
}
