import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConditionalRouting from './components/conditionalRouting'
import Home from './components/home'
import AppHeader from './components/util/appHeader'
function App() {
  return (
    <div className="App">
      <AppHeader /> 
      <div className="flex justify-between px-4 text-2xl absolute w-screen">
        <button onClick={() => window.history.back()}> <i className="fa fa-arrow-left" aria-hidden="true" /></button>
        <button onClick={() => window.history.forward()}> <i className="fa fa-arrow-right " aria-hidden="true" /></button>
      </div>
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <ConditionalRouting />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
