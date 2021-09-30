import { Redirect } from "react-router-dom";

const Random = ({ posts }) => {

  const getRandomPostId = () => {
    let randomIdx = Math.floor(Math.random() * posts.length);
    let randomPost = posts[randomIdx];
    return randomPost._id;
  };

  return (
    <Redirect to={`/${getRandomPostId()}`} />
  );
};

export default Random;