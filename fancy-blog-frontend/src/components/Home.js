import Post from './Post.js';

const Home = ({ posts }) => {

  return (
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
};

export default Home;