import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Joblist from './pages/Joblist';
import JoblistDetail from './pages/JoblistDetail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} key={1} />
      <Route path="/joblist" key={2} component={Joblist} />
      <Route path="/jobdetail" key={3} component={JoblistDetail} />
    </Router>
  );
}

export default App;
