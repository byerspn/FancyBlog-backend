import { Link, Route, Switch } from 'react-router-dom'
import "./App.css"

// Components
import Title from './components/Title'
import Home from './components/Home'
import Comments from './components/Comments';
import * as ReactBootStrap from 'react-bootstrap';
import About from './components/About';
import Footer from './components/Footer';
import { useState, useEffect } from "react";


// parker
import NewPostForm from "./components/posts/NewPostForm.js";

// parker
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

  console.log(posts);

  return (
    <div className="page-container">
    <div className="content-wrap">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="/">Fancy Blog</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/about">Random</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/About">About</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
    <br />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new" render={() => <NewPostForm addPost={addPost} />} />
        <Route exact path="/:id" component={Comments} />
        <Route exact path="/about" component={About} />
      </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
