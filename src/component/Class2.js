import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch,
  Redirect
} from "react-router-dom";
class Class2 extends Component {
    render(){
      let thisUrl = this.props.match.url;
        return(
            <Router>
                <div>
                    <MenuLink to="/" label="home"/>
                    <MenuLink to="/about" label="about"/>

                    <Route exact path={thisUrl+"/home"} component={Home}/>
                    <Route path={thisUrl+"/about"} component={About}/>
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
const MenuLink = ({to,label,activeOnlyWhenExact}) => {
    return(
        <Route 
            path={to}
            exact
            children={({match}) => 
                <div>
                    {match?">":""}
                    <Link to={to}>{label}</Link>
                </div>
        }
        />
    )
}
export default Class2;
