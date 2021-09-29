import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIURL } from "./config";

import "./App.css";

// Components
import Home from "./components/Home";
import Comments from "./components/Comments";
import About from "./components/About";
import Footer from "./components/Footer";
import NewPostForm from "./components/posts/NewPostForm.js";

// Style
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${APIURL}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((error) => {
        console.error("There was an issue getting the posts: ", error);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand>Fancy Blog</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/random">
              <Nav.Link>Random</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new">
              <Nav.Link>Add New Post</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" render={() => <Home posts={posts} setPosts={setPosts} />} />
          <Route exact path="/new" render={() => <NewPostForm posts={posts} setPosts={setPosts} />} />
          <Route
            exact
            path="/:id"
            render={({ match }) => <Comments match={match} posts={posts} setPosts={setPosts} />}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
