import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';

import NewComment from './NewComment.js'

const Comments = ({match}) => {

  const [error, setError] = useState(false)
  const [post, setPost] = useState(null)
  const [newComment, setNewComment] = useState(false)

  useEffect(() => {
    const url = `${APIURL}/${match.params.id}`
    fetch(url)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(() => {
        setError(true)
      })
  }, [match.params.id])

  const handleComment = () => {
    setNewComment(true)
  }

  if (error) {
    return <div>There was a problem getting the data.</div>
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{post.text}</p>
      <ul>
          {post.comments.map((comment, idx) => (
            <li key={idx}>{comment}</li>
          ))}
      </ul>
      <div>
        <button>likes</button>
        <button>dislikes</button>
        <button onClick={handleComment}>New Comment</button>
        {!newComment ? null : <NewComment post={post} />}
      </div>
    </div>
  )
}

export default Comments