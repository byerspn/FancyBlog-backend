import { APIURL } from "../config.js";

// Style
import { Button, ButtonGroup } from "react-bootstrap";

const Buttons = ({ post, posts, setPost, setPosts }) => {

  const likePost = () => {
    if (post.comments[0] === "The comments were deleted too.") {
      return;
    };
    let newPosts
    let updatedPost = post;
    updatedPost.likes++;
    fetch(`${APIURL}/${post._id}`, {
      method: "PUT", // put updates all keys in object
      mode: "cors", // cors
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(updatedPost)
    })
      .then((response) => response.json())
      .then((res) => {
        newPosts = [...posts]
        let idx = newPosts.indexOf(post)
        newPosts.splice(idx, 1, res)
      })
      .catch((error) => {
        console.error("There was an issue updating the post: ", error);
      })
      .then(() => setPosts(newPosts))
  };

  const dislikePost = () => {
    if (post.comments[0] === "The comments were deleted too.") {
      return;
    };
    let newPosts;    
    if (post.likes + post.dislikes > 10 && post.dislikes > post.likes * 2) {
      fetch(`${APIURL}/${post._id}`, {
        method: "DELETE", // put updates all keys in object
        mode: "cors" // cors
      })
        .then((response) => response.json())
        .then((res) => {
          newPosts = posts.filter((e) => e._id !== res._id);
          setPost({
            text: 'This post was deleted for being nayed too much.', 
            comments: ['The comments were deleted too.'],
            likes: 0,
            dislikes: 0
          });
        })
        .catch((error) => {
          console.error("There was an issue updating the post: ", error);
        })
        .then(() => setPosts(newPosts));
    } else {
      let updatedPost = post;
      updatedPost.dislikes++;
      fetch(`${APIURL}/${post._id}`, {
        method: "PUT", // put updates all keys in object
        mode: "cors", // cors
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(updatedPost)
      })
        .then((response) => response.json())
        .then((res) => {
          newPosts = [...posts]
          let idx = newPosts.indexOf(post)          
          newPosts.splice(idx, 1, res)
        })
        .catch((error) => {
          console.error("There was an issue updating the post: ", error);
        })
        .then(() => setPosts(newPosts))
    };
  };

  return (
    <div>
      <ButtonGroup className="mb-3">
        <Button variant="primary" onClick={likePost}>{`Yays: ${post.likes}`}</Button>
        <Button variant="danger" onClick={dislikePost}>{`Nays: ${post.dislikes}`}</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
