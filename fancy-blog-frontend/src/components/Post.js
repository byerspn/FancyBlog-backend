import { Link } from 'react-router-dom'

const Post = ({post}) => {

  console.log(post)

  return (
    <div>
      <p>{post.text}</p>
      <div>
        <button>Likes</button>
        <button>Disikes</button>
        <Link to={`/${post._id}`}>Comments</Link>
      </div>
    </div>
  )
}

export default Post