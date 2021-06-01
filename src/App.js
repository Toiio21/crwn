import React from 'react';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import { Route, Switch } from 'react-router';

const HatsPage = () => {
  return <div>HATS PAGE</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
