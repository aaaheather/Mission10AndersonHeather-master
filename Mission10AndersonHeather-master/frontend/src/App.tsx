import React from 'react';
import './App.css';
import Heading from './components/Heading';
import BowlerList from './components/BowlerList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <br />
      <BowlerList />
    </div>
  );
}

export default App;
