import './App.css';
import {
  BrowserRouter as Router,Route,Link,
  Switch
} from "react-router-dom";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="head">
        <Link to="/">Home</Link>
      <Link to="projects">Projects</Link>
      <Link to="contact">Contact</Link>

        </div>
          <Switch>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

      </header>

    </div>
    </Router>
  );
}

export default App;
