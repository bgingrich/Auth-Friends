import React from 'react';
import {Route, Redirect} from 'react-router';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

const PrivateRouter = ({component: Component, ...rest}) => (


  <Route 
  {...rest}
  render = {props =>
  localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Redirect to ="/" />
  )
  }
  />
);

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Login} />
      <PrivateRouter path="/FriendsList" component={FriendsList} />
    </div>
  );
}

export default App;