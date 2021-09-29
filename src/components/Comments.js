import { useState, useEffect } from 'react';
import { APIURL } from '../config.js';

// Components
import NewComment from './NewComment.js';
import Buttons from './Buttons.js';

const Comments = ({ match, posts, setPosts }) => {

  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    const url = `${APIURL}/${match.params.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch(() => {
        setError(true)
      })
  }, [match.params.id]);

  const handleComment = () => {
    let state = newComment
    setNewComment(!state);
  };

  if (error) {
    return <div>There was a problem getting the data.</div>;
  };

  if (!post) {
    return <div>Loading...</div>;
  };

  return (
    <div>
      <p>{post.text}</p>
      <ul>
        {post.comments.map((comment, idx) => (
          <li key={idx}>{comment}</li>
        ))}
      </ul>
      <div>
        <Buttons post={post} posts={posts} setPosts={setPosts} />
        <button onClick={handleComment}>New Comment</button>
        {!newComment ? null : <NewComment post={post} setPost={setPost} setNewComment={setNewComment} />}
      </div>
    </div>
  );
};

export default Comments;
