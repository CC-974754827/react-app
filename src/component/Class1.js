import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch,
  Redirect
} from "react-router-dom";
class Class1 extends Component {
    render() {
      let thisUrl = this.props.match.url;
      return (
        <Router>

          <div>
            <li>
              <Link to={thisUrl+"/home"}>Home</Link>
            </li>
            <li>
              <Link to={thisUrl+"/about"}>About</Link>
            </li>
            <li>
              <Link to={thisUrl+"/topics"}>Topics</Link>
            </li>
  
            <Route exact path={`${thisUrl}/home`} component={Home}/>
            <Route path={`${thisUrl}/about`} component={About}/>
            <Route path={`${thisUrl}/topics`} component={Topics}/>
  
            
          </div>
        </Router>
      );
    }
  }
  const Home=()=>(
      <div>
          <h2>Home</h2>
      </div>
  );
  const About=()=>(
      <div>
          <h2>About</h2>
      </div>
  );
  const Topics=({match})=>{
      let thisUrl = match.url;
      return(
        <div>
          <h2>Topics</h2>
          <li>
              <Link to={thisUrl+"/rendering"}>rendering</Link>
          </li>
          <li>
              <Link to={thisUrl+"/components"}>Components</Link>
          </li>
          <li>
              <Link to={"thisUrl+/props"}>Props v. State</Link>
          </li>
  
          <Route path={thisUrl+"/:id"} component={TopicID} />
          <Route exact path={thisUrl+"/"} render={()=><h3>请选择</h3>}/>
      </div>
      )
    };
  const TopicID = ({ match }) => (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
  export default Class1;
  