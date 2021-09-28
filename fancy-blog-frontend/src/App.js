import { Link, Route, Switch } from 'react-router-dom'
import "./App.css"

// Components
import Title from './components/Title'
import Home from './components/Home'
import Comments from './components/Comments';
import Navbar from './components/Navbar/Navbar';
import * as ReactBootStrap from 'react-bootstrap';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="/">Fancy Blog</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/">Random</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/About">About</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
    <br />
      <Switch>
        <Route exact path='/' component={Home} />  
        <Route exact path='/:id' component={Comments} />
      </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
