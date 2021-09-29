import { useState } from "react";
import { Redirect } from "react-router";
import { APIURL } from "../../config";

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
      .then(res => res.json())
      .then(data => {
        setPosts([...posts, data])
        setCreateId(data._id)
      })
      .catch((error) => { console.error('There was an issue creating a new post: ', error) });
  };

  if (createId) {
    return <Redirect to={`/${createId}`} />;
  };

  return (
    <div>
      <h2>Write your post below</h2>
      <form onSubmit={formSubmitHandler}>
        <textarea type="text" id="new-post" rows="4" onChange={(e) => setNewText(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
