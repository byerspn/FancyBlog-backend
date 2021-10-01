import Post from "./Post.js";


// Style
import { Container } from "react-bootstrap";

const Home = ({ posts, setPosts }) => {
  return (
    <Container className="mb-5">
      {posts.map((post, idx) => (
        <Post key={idx} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </Container>
  );
};

export default Home;
