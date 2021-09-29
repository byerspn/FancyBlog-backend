import { useState } from "react";
import { Redirect } from "react-router";
import { APIURL } from "../../config";

// Style
import { Button, FloatingLabel, Form, Container } from "react-bootstrap";

const NewPostForm = ({ posts, setPosts }) => {
  const [newText, setNewText] = useState("");
  const [createId, setCreateId] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      text: newText
    };

    fetch(`${APIURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([...posts, data]);
        setCreateId(data._id);
      })
      .catch((error) => {
        console.error("There was an issue creating a new post: ", error);
      });
  };

  if (createId) {
    return <Redirect to={`/${createId}`} />;
  }

  return (
    <Container fluid>
      <h1 className="mt-1 text-center">Write your post below</h1>
      <form onSubmit={formSubmitHandler}>
        <FloatingLabel className="mb-3" controlId="floatingTextarea" label="Add to the cesspool:">
          <Form.Control as="textarea" style={{ height: "500px" }} onChange={(e) => setNewText(e.target.value)} />
        </FloatingLabel>

        <div className="d-grid gap-2">
          <Button className="mb-3" variant="success" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default NewPostForm;
