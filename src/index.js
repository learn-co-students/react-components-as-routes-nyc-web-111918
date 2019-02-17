import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >login</NavLink>
  </div>

const Home = () => <h1>Home!</h1>

const About = () => <h1>This is my about component!</h1>


const Login = () =>
  <form>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="password" />
    </div>
    <input type="submit" value="Login" />
  </form>


ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
