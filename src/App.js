import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIURL } from "./config";

// Components
import Home from "./components/Home";
import Comments from "./components/Comments";
import About from "./components/About";
import Footer from "./components/Footer";
import NewPostForm from "./components/posts/NewPostForm.js";
import Random from "./components/Random";

// Style
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

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
      <main>
        <Navbar 
          className="p-2"
          bg="dark" 
          variant="dark" 
          sticky="top" 
        >
          <LinkContainer to="/">
            <Navbar.Brand 
              className="
                border 
                border-white 
                rounded 
                p-1
                ">
              Ventilation System Anonymous
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
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
        <Container >
          <Switch>
            <Route exact path="/" render={() => 
              <Home 
                posts={posts} 
                setPosts={setPosts} 
              />}
            />
            <Route exact path="/new" render={() =>
                <NewPostForm 
                  posts={posts} 
                  setPosts={setPosts} 
                />} 
            />
            <Route path="/random" render={() => 
              <Random posts={posts} />
            } />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/:id"
              render={({ match }) => 
                <Comments 
                match={match} 
                posts={posts} 
                setPosts={setPosts} 
                />
              }
            />
          </Switch>
      </Container>
      <Footer />     
      </main>      
  );
};

export default App;
