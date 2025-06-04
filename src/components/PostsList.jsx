import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = usePosts();

  return (
    <div className="row">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
