import React from 'react';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/Homepage/HomePage';

function App() {
  return (
    <>
    <div className="">
      <Navigation/>
    </div>

    <div>
      <HomePage/>
    </div>
    
    </>
  );
}

export default App;
