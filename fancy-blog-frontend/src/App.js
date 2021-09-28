import { Link, Route, Switch } from 'react-router-dom'

// Components
import Title from './components/Title'
import Home from './components/Home'
import Comments from './components/Comments';

function App() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <nav></nav>
      <Switch>
        <Route exact path='/' component={Home} />  
        <Route exact path='/:id' component={Comments} />
      </Switch>
    </div>
  );
}

export default App;
