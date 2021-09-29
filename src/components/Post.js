import { Link } from "react-router-dom";

// Components
import Buttons from "./Buttons";

const Post = ({ post, posts, setPosts }) => {

  return (
    <li>
      <p>{post.text}</p>
      <div>
        <Buttons post={post} posts={posts} setPosts={setPosts} />
        <Link to={`/${post._id}`}>Comments</Link>
      </div>
    </li>
  );
};

export default Post;
