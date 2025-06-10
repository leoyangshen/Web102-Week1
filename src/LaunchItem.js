// src/LaunchItem.js
import React, { useState } from 'react';

function LaunchItem(props) {
  // Use state to manage the 'rud' status for each launch item
  // Initial state is taken from the 'rud' prop
  const [hasRUD, setHasRUD] = useState(props.rud); // Initial state from prop

  // Event handler function for the button click
  const handleToggleRUD = () => {
    setHasRUD(!hasRUD); // Toggle the boolean state
  };

  // Determine button text and class based on current state
  const buttonText = hasRUD ? 'Had RUD' : 'Successful Launch';
  const buttonClass = hasRUD ? 'rud-button' : 'success-button';

  // Apply a class to the whole item if RUD is true
  const itemClass = `launch-item ${hasRUD ? 'rud' : ''}`;

  return (
    <li className={itemClass}>
      <h3>{props.name}</h3> {/* Display the launch name from props */}
      <button onClick={handleToggleRUD} className={buttonClass}>
        {buttonText}
      </button>
    </li>
  );
}

export default LaunchItem;
