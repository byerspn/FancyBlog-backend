import { Link } from "react-router-dom";

// Components
import Buttons from "./Buttons";

import { Card } from "react-bootstrap";

const Post = ({ post, posts, setPosts }) => {
  return (
    <Card className="text-center mt-3 mb-3">
      <Card.Body>
        <p style={{ fontSize: "19px" }}>{post.text}</p>
        <Buttons post={post} posts={posts} setPosts={setPosts} />
        <Link to={`/${post._id}`}>Comments</Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
