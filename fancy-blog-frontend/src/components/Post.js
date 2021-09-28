import { Link } from "react-router-dom";

import Buttons from "./Buttons";

const Post = ({ post, setPosts }) => {

  return (
    <li>
      <p>{post.text}</p>
      <div>
        <Buttons post={post} setPosts={setPosts} />
        <Link to={`/${post._id}`}>Comments</Link>
      </div>
    </li>
  );
};

export default Post;
