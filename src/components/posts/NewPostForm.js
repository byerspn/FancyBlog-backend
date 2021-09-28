import { useState } from "react";
import { useHistory } from "react-router";
import { APIURL } from "../../config";

function NewPostForm({ addPost }) {
  const [text, setText] = useState("");

  // const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      text
    };
    addPost(newPost);

    fetch(`${APIURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    }).then(() => {
      console.log("New post added");
    });

    // history.push("/");
  };

  return (
    <div>
      <h2>Write your post below</h2>
      <form onSubmit={formSubmitHandler}>
        <textarea type="text" id="new-post" rows="4" onChange={(e) => setText(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPostForm;
