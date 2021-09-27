import { useState, useEffect } from 'react'
import { APIURL } from '../config.js'

import Post from './Post.js'


const Home = () => {

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${APIURL}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)})
      .catch(() => setError(true))
  }, [])

  if (error) {
    return <div>There was an error getting the data.</div>
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Home
