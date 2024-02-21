// importing react to create a component
import React from 'react';

// event handler for the outer button click
const handleOuterClick = () => {
  alert('Outer button clicked!');
};

// event handler for the inner button click
const handleInnerClick = (e) => {
  // stopping the event from propagating to avoid triggering the outer button's handler
  e.stopPropagation();
  alert('Inner button clicked!');
};

// defining the nestedbuttons functional component
const NestedButtons = () => {
  // rendering the component
  return (
    <div style={{ textAlign: 'center' }}> {/* centering buttons */}
      {/* Outer button with its click event handler, separated from the Inner button */}
      <button onClick={handleOuterClick} style={{ margin: '10px' }}>
        Outer Button
      </button>
      
      {/* Inner button with its click event handler */}
      <button onClick={handleInnerClick} style={{ margin: '10px' }}>
        Inner Button
      </button>
    </div>
  );
};

// exporting the nestedbuttons component for use in other parts of the app
export default NestedButtons;
