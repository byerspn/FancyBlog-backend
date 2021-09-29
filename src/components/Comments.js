import { useState, useEffect } from "react";
import { APIURL } from "../config.js";

// Components
import NewComment from "./NewComment.js";
import Buttons from "./Buttons.js";

import { Button, Card, Container } from "react-bootstrap";

const Comments = ({ match, posts, setPosts }) => {
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    console.log(match.params.id)
    const url = `${APIURL}/${match.params.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch(() => {
        setError(true);
      });
  }, [match.params.id]);

  const handleComment = () => {
    let state = newComment;
    setNewComment(!state);
  };

  if (error) {
    return <div>There was a problem getting the data.</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Card className="mt-3 mb-3">
        <Card.Body>
          <p style={{ fontSize: "19px" }}>{post.text}</p>

          <div>
            <Buttons post={post} posts={posts} setPosts={setPosts} />
            <Button variant="outline-info" className="mb-3" onClick={handleComment}>
              New Comment
            </Button>
            {!newComment ? null : <NewComment post={post} setPost={setPost} setNewComment={setNewComment} />}
          </div>
          <hr />

          <p style={{ fontSize: "19px" }}>Comments: </p>
          <ol>
            {post.comments.map((comment, idx) => (
              <li key={idx}>{comment}</li>
            ))}
          </ol>
        </Card.Body>
        <Card.Footer>{post.createdAt}</Card.Footer>
      </Card>
    </Container>
  );
};

export default Comments;
