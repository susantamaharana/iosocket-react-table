import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MuenuBar from './component/menuBar';
import Rrbf from "./component/rrbf";
import Callput from "./component/callput";
import Volcurve from "./component/volcurve";
import Volsmile from "./component/volsmile";
import Heatmaps from "./component/heatmaps";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h2>Single Currency Grid</h2>  
        <MuenuBar />
        <div className="row">
          <Switch>
            <Route path="/" exact component={Rrbf}/>
            <Route path="/callput" component={Callput}/>
            <Route path="/volcurve" component={Volcurve}/>
            <Route path="/volsmile" component={Volsmile}/>
            <Route path="/heatmaps" component={Heatmaps}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}