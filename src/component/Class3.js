import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Prompt
} from "react-router-dom";
class Class3 extends Component {
    render(){
        return(
            <Router>
                <div>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>

                    <Route exact path="/" component={Form}/>
                    <Route path="/one" component={One}/>
                    <Route path="/two" component={Two}/>
                </div>
            </Router>
        );
    }
}
const One=()=>(<h2>One</h2>);
const Two=()=>(<h2>Two</h2>);
class Form extends React.Component {
    state = {
        isBlocking:false
    };
    render(){
        const {isBlocking} = this.state;
        return(
            <form 
                onSubmit={event =>{
                    event.preventDefault();
                    event.target.reset();
                    this.setState({
                        isBlocking:false
                    });
                }}
            >
            <Prompt
                when={isBlocking}
                message={location => 
                    `Are you sure you want to go to ${location.pathname}`
                }
            />
            <p>
                Blocking?{""}
                {isBlocking?"yes":"Nope"}
            </p>
            <p>
                <input
                    size="50"
                    placeholder="wirite"
                    onChange={event => {
                        this.setState({
                            isBlocking:event.target.value.length>0
                        });
                    }}
                />
            </p>
            <p>
                <button>submit</button>
            </p>
        </form>
        );
    }
}

export default Class3;