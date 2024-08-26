const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      posts: [],
      post: {},
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
    },
  };
};

export default getState;
