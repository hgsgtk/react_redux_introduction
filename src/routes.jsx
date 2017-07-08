import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Counter from '../containers/Counter';
import SignUp from '../containers/SignUp';
import SignUpChild1 from '../containers/signup/SignUpChild1';
import SignUpChild2 from '../containers/signup/SignUpChild2';
import NotFound from '../containers/NotFound';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Login} />
    <Route path="login" component={Login}/>
    <Route path="signup" component={SignUp}>
      <IndexRoute component={SignUpChild1} />
      <Route path="/signup/child1" component={SignUpChild1}/>
      <Route path="/signup/child2" component={SignUpChild2}/>
    </Route>
    <Route path="home" component={Home} />
    <Route path="counter" component={Counter} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
