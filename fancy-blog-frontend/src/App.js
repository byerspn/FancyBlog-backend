import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

// Components
import Title from "./components/Title";
import Home from "./components/Home";
import Comments from "./components/Comments";
import NewPostForm from "./components/posts/NewPostForm.js";

// Config
import { APIURL } from "./config";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${APIURL}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      })
      .catch(console.error);
  }, []);

  const addPost = (post) => {
    const updatedPostList = [...posts, post];
    setPosts(updatedPostList);
  };

  return (
    <div>
      <header>
        <Title />
      </header>
      <nav>
        <Link to="/new">Add New Post</Link>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <Home posts={posts} />} />
        <Route path="/new" render={() => <NewPostForm addPost={addPost} />} />
        <Route exact path="/:id" component={Comments} />
      </Switch>
    </div>
  );
}

export default App;
