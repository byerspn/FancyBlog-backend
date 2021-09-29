import { useState } from "react"
import { Redirect } from "react-router";
import { APIURL } from "../config"

const NewComment = ({ post, setPost, setNewComment }) => {

  const [comment, setComment] = useState('');
  const [createdId, setCreatedId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.length === 0) {      
      return false
    };

    const putComment = {
      comments: [...post.comments, comment]
    };

    const url = `${APIURL}/${post._id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(putComment)
    })
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setCreatedId(data._id)})
      .catch((error) => { console.error('There was an issue updating the post: ', error) })
      .then(setNewComment(false));
  };

  if (createdId) {
    return <Redirect to={`/${createdId}`} />;
  };

  return (
    <div>
      <h2>New Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          id="newComment"
          rows="3"
          cols="30"
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default NewComment;