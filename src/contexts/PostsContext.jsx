import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Errore fetch posts:", err));
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
