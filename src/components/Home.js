import Post from "./Post.js";

import { Container } from "react-bootstrap";

const Home = ({ posts, setPosts }) => {
  return (
    <Container fluid>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </Container>
  );
};

export default Home;
