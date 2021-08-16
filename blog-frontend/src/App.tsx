import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/post/Post';
import Edit from './components/post/Edit';
import Create from './components/post/Create';
import { Auth0Context, Auth0Provider, useAuth0 } from './context/auth0-context';
import PrivateRoute from './components/pages/PrivateRoute';

function App(): JSX.Element {
  return (
    <div className="App" >
      <Navbar />
      <div className={'container'}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/post/:postID"} component={Post} />
          <PrivateRoute>
            <Route path={"/edit/:postID"} component={Edit} />
            <Route path={"/create"} component={Create} />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}
export default App;