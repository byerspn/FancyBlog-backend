import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import { APIURL } from "./config";

import "./App.css"

// Components
// import Title from './components/Title'
import Home from './components/Home'
import Comments from './components/Comments';
import About from './components/About';
import Footer from './components/Footer';
import NewPostForm from "./components/posts/NewPostForm.js";

// Style
import * as ReactBootStrap from 'react-bootstrap';
import "./App.css";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${APIURL}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((error) => { console.error('There was an issue getting the posts: ', error) });
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="/">
              Fancy Blog
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="/">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/about">
                Random
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/About">
                About
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>      
        <Switch>
          <Route 
            exact path="/" 
            render={ () => 
              <Home posts={posts} setPosts={setPosts} />
            }
          />
          <Route 
            exact path="/new" 
            render={ () => 
              <NewPostForm posts={posts} setPosts={setPosts} />
            }
          />
          <Route 
            exact path="/:id" 
            render={ ({ match }) => 
              <Comments 
                match={match} 
                posts={posts} 
                setPosts={setPosts} />
            }
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
