import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';



const App = () => {
  return (
    <div>
      <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
