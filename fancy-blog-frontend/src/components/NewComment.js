import { useState } from "react"
import { APIURL } from "../config"

const NewComment = ({post}) => {

  const [comment, setComment] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {

    if (comment.length === 0) {
      event.preventDefault()
      return false
    }

    const putComment = {
      comments: [...post.comments, comment]
    }

    const url = `${APIURL}/${post._id}`

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(putComment)
    })
      .then(res => res.json())
      .catch(() => setError(true))
  }

  const handleChange = (event) => {
    event.persist()
    setComment(event.target.value)
  }

  if (error) {
    return <div>Error on new comment.</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newComment">New Comment:</label>
      <input 
        value={comment}
        onChange={handleChange}
        id="newComment"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewComment