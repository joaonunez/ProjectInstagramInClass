const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      posts: [],
      post: {},
      comments:[],
    },
    actions: {
      getPosts: async () => {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        setStore({
          posts: data.data,
        });
      },
      getPostById: async (id) => {
        const response = await fetch("http://localhost:5000/post/" + id);
        const data = await response.json();
        setStore({
          post: data.data,
        });
      },
      getCommentsByPostId: async(postId) =>{
        const response = await fetch("http://localhost:5000/comments/" + postId);
        const data = await response.json();
        setStore({
          comments: data.data,
        });
      }
    },
  };
};

export default getState;
