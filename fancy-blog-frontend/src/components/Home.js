import Post from './Post.js';

const Home = ({ posts, setPosts }) => {

  return (
    <ul>
      {posts.map((post, idx) => (
          <Post key={idx} post={post} setPosts={setPosts} />
      ))}
    </ul>
  );
};

export default Home;