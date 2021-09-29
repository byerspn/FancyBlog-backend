import { useState } from "react";
import { Redirect } from "react-router-dom";
import { APIURL } from "../config.js";

import { Button, ButtonGroup } from "react-bootstrap";

const Buttons = ({ post, posts, setPosts }) => {
  const [likes, setLikes] = useState(() => post.likes);
  const [dislikes, setDisikes] = useState(() => post.dislikes);
  const [postDeleted, setPostDeleted] = useState(false);

  const likePost = () => {
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
      .then((res) => setLikes(res.likes))
      .catch((error) => {
        console.error("There was an issue updating the post: ", error);
      });
  };

  const dislikePost = () => {
    let newPosts;
    if (post.likes + post.dislikes > 10 && post.dislikes > post.likes * 2) {
      fetch(`${APIURL}/${post._id}`, {
        method: "DELETE", // put updates all keys in object
        mode: "cors" // cors
      })
        .then((response) => response.json())
        .then((res) => {
          newPosts = posts.filter((e) => e._id !== res._id);
          setPostDeleted(true);
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
        .then((res) => setDisikes(res.dislikes))
        .catch((error) => {
          console.error("There was an issue updating the post: ", error);
        });
    }
  };

  if (postDeleted) {
    return (
      <Redirect to="/" />
      // <div>
      //   <p>This post has been deleted for having too poor of a <em>like:dislike</em> ratio.</p>
      //   <Link push to="/">Return home</Link>
      // </div>
    );
  }

  return (
    <div>
      <ButtonGroup className="mb-2">
        <Button variant="primary" onClick={likePost}>{`Yays: ${likes}`}</Button>
        <Button variant="danger" onClick={dislikePost}>{`Nays: ${dislikes}`}</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
