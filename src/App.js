import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ScheduleCall from "./ScheduleCall";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/schedule-call" component={ScheduleCall} />
      </Switch>
    </Router>
  );
}

export default App;
