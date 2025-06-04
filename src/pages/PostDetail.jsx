import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

export default function PostDetail() {
  const { id } = useParams();
  const { posts } = usePosts();

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post non trovato.</p>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
