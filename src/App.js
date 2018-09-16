import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './component/Class1';
import Class2 from './component/Class2';
import Class3 from './component/Class3';
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/class1">class1</Link>|
          <Link to="/class2">class2</Link>|
          <Link to="/class3">Class3</Link>|
          <Link to="/NoMatch">NoMatch</Link>|
          <Switch>  
            <Route path="/class1" component={Class1}/>
            <Route path="/class2" component={Class2}/>
            <Route path="/class3" component={Class3}/>
            <Route component={NoMatch}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}
const NoMatch = ()=>(
  <h2>404</h2>
);
export default App;
