import React, { Component } from 'react';
import './App.css';
import { 
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Details from './Details.js';
import About from './AboutMe.js';
import NotFound from './NotFound.js';
import Home from './Home.js'


export default class App extends Component {
  render() {
  return (
    <Router>
    <div className='container'>
        <h1>Pokemon Search</h1>
        <Link to="/">go home</Link>
        <Link to="/about-me/a">about me</Link>
        <Switch>
            <Route exact path="/:name?" component={Home} />  
            <Route exact path="/about-me/a" component={About}/>
            <Route exact path="/characters/:pokemonId" component={Details} />
            <Route component={NotFound} />
        </Switch>

    </div>
</Router>
  );
}
}

