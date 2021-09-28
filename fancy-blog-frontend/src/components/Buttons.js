import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';

const Buttons = ({ post }) => {

  const [likes, setLikes] = useState(() => post.likes)
  const [dislikes, setDisikes] = useState(() => post.dislikes)
  const [postDeleted, setPostDeleted] = useState(false)

  const likePost = () => {
    let updatedPost = post
    updatedPost.likes++
    fetch(`${APIURL}/${post._id}`, {
      method: 'PUT', // put updates all keys in object
      mode: 'cors', // cors
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(updatedPost)
    })
      .then(response => response.json())
      .then(res => setLikes(res.likes))
      .catch((error) => { console.error('There was an issue updating the post: ', error) })
  }

  const dislikePost = () => {
    if ((post.likes + post.dislikes > 10) && (post.dislikes > post.likes * 2)) {
      fetch(`${APIURL}/${post._id}`, {
        method: 'DELETE', // put updates all keys in object
        mode: 'cors' // cors
      })
        .then(response => response.json())
        .then(res => {
          setPostDeleted(true)
        })
        .catch((error) => { console.error('There was an issue updating the post: ', error) })
    } else {
      let updatedPost = post
      updatedPost.dislikes++
      fetch(`${APIURL}/${post._id}`, {
        method: 'PUT', // put updates all keys in object
        mode: 'cors', // cors
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(updatedPost)
      })
        .then(response => response.json())
        .then(res => setDisikes(res.dislikes))
        .catch((error) => { console.error('There was an issue updating the post: ', error) })
    }
  }

  if (postDeleted) {
    return (
      <Redirect to="/" />
      // <div>
      //   <p>This post has been deleted for having too poor of a <em>like:dislike</em> ratio.</p>
      //   <Link push to="/">Return home</Link>
      // </div>
    )
  }  

  return (
    <div>
      <button onClick={likePost} >Yays: {likes}</button>
      <button onClick={dislikePost} >Nays: {dislikes}</button>
    </div>
  )
}

export default Buttons