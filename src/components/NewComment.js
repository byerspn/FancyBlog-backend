import { useState } from "react";
import { Redirect } from "react-router";
import { APIURL } from "../config";

import { Button, FloatingLabel, Form, Container } from "react-bootstrap";

const NewComment = ({ post, setPost, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [createdId, setCreatedId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.length === 0) {
      return false;
    };

    const putComment = {
      comments: [...post.comments, comment]
    };

    const url = `${APIURL}/${post._id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(putComment)
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setCreatedId(data._id);
      })
      .catch((error) => {
        console.error("There was an issue updating the post: ", error);
      })
      .then(setNewComment(false));
  };

  if (createdId) {
    return <Redirect to={`/${createdId}`} />;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FloatingLabel className="mb-3" controlId="floatingTextarea" label="Add to the discussion:">
          <Form.Control as="textarea" style={{ height: "100px" }} onChange={(e) => setComment(e.target.value)} />
        </FloatingLabel>
        <Container className="d-flex justify-content-end">
          <Button 
            className="mb-1" 
            variant="success" 
            type="submit"
          >
            Submit
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default NewComment;
