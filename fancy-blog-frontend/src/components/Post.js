import { Link } from "react-router-dom";

import Buttons from "./Buttons";

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.text}</p>
      <div>
        <Buttons post={post} />
        <Link to={`/${post._id}`}>Comments</Link>
      </div>
    </div>
  );
};

export default Post;
