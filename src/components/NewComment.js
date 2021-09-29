import { useState } from "react"
import { APIURL } from "../config"

const NewComment = ({ post }) => {

  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {

    if (comment.length === 0) {
      event.preventDefault()
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
      .catch((error) => { console.error('There was an issue updating the post: ', error) })
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