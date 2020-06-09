import React from 'react';
import { Link, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
       <Link to="/login">Login</Link>
       <Link to="/protected">Friends</Link>
       <Link to="/addFriend">Add a Friend</Link>
      </nav>
      <Switch>
      
      </Switch>
    </div>
  );
}

export default App;
