// importing react to enable jsx and component functionality
import React from 'react'; 
// importing stylesheet for app-wide styles
import './App.css'; 
// importing the nestedbuttons component for use in this file
import NestedButtons from './NestedButtons'; 

function App() {
  // main application layout
  return (
    <div className="App">
      <h1>Event Propagation Assignment</h1>
      <NestedButtons />
    </div>
  );
}

export default App;
