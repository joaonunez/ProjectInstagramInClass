const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      posts: [],
    },
    actions: {
      getPosts: async () => {
        const response = await fetch("http://localhost:5000/posts")
            const data = await response.json()
            setStore({
                posts: data.data,
            })
        
      },
    },
  };
};

export default getState;
