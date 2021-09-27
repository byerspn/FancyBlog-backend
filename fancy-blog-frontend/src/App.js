import { Link, Route, Switch } from 'react-router-dom'

// Components
import Title from './components/Title';


function App() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <nav></nav>
      <Switch>
        <Route exact path='/' component={null} />  
      </Switch>
    </div>
  );
}

export default App;
