import { Link, Redirect } from "react-router-dom";

// Components
import Buttons from "./Buttons";

// Style
import { LinkContainer } from "react-router-bootstrap";
import { 
  Card, 
  Button, 
  ButtonToolbar, 
  ButtonGroup } from "react-bootstrap";

const Post = ({ post, posts, setPosts }) => {

  return (
    <Card className="mt-3 mb-3 shadow">
      <Card.Body>
        <Card.Text className="fs-5" >{post.text}</Card.Text>
        <ButtonToolbar className="d-flex justify-content-around">
          <ButtonGroup>
            <LinkContainer to={`/${post._id}`}>
              <Button 
                variant="outline-info" 
                className="mb-3"
              >
                Comments
              </Button>
            </LinkContainer>
          </ButtonGroup>
          <ButtonGroup>
            <Buttons 
              post={post} 
              posts={posts} 
              setPosts={setPosts} 
            />
          </ButtonGroup>
        </ButtonToolbar>
      </Card.Body>
    </Card>

  );
};

export default Post;
