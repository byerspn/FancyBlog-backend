import { useState, useEffect } from "react";
import { APIURL } from "../config.js";

// Components
import NewComment from "./NewComment.js";
import Buttons from "./Buttons.js";

// Style
import { 
  Button, 
  Card, 
  Container, 
  ButtonToolbar, 
  ButtonGroup, 
  ListGroup, 
  ListGroupItem 
} from "react-bootstrap";

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
        setError(true);
      });
  }, [match.params.id]);

  const handleComment = () => {
    let state = newComment;
    setNewComment(!state);
  };

  if (error) {
    return <div>There was a problem getting the data.</div>;
  };

  if (!post) {
    return (
    <Container fluid>
      <Card className="mt-3 mb-3 shadow">
        <Card.Body>
          <Card.Text className="fs-5" >This post does not exist. It may have been deleted for being nayed too much.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    )
  };

  return (
    <Container fluid>
      <Card className="mt-3 mb-3 shadow">
        <Card.Body>
          <Card.Text className="fs-5" >{post.text}</Card.Text>
          <ButtonToolbar className="d-flex justify-content-around">
            <ButtonGroup>
              <Button 
                variant="outline-info" 
                className="mb-3" 
                onClick= {handleComment}
              >
                New Comment
              </Button>
            </ButtonGroup>
            <Buttons 
              post={post} 
              posts={posts} 
              setPosts={setPosts} 
              setPost={setPost}
            />
          </ButtonToolbar>
          {!newComment ? null : <NewComment post={post} setPost={setPost} setNewComment={setNewComment} />}
          <hr />
          <Card.Title className="text-center">Comments </Card.Title>
          <ListGroup className="list-group-flush">
            {post.comments.map((comment, idx) => (
              <ListGroupItem key={idx}>{comment}</ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">{post.createdAt}</Card.Footer>
      </Card>
    </Container>
  );
};

export default Comments;
