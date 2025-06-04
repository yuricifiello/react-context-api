import { Link } from "react-router-dom";

export default function PostsCard({ post }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <Link to={`/posts/${post.id}`} className="btn btn-primary">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
