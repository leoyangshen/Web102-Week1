// src/App.js
import React from 'react';
import LaunchItem from './LaunchItem'; // Import the child component
import './App.css'; // Import the CSS file

function App() {
  // Our "data" - an array of rocket launch objects with RUD status
  const rocketLaunches = [
    { id: 1, name: 'Falcon 9 Flight 1', rud: false },
    { id: 2, name: 'Starship SN8 Test Flight', rud: true }, // Infamous RUD!
    { id: 3, name: 'Soyuz MS-17', rud: false },
    { id: 4, name: 'Ariane 5 VA257', rud: false },
    { id: 5, name: 'Starship IFT-1', rud: true }, // Another well-known RUD
    { id: 6, name: 'New Shepard NS-19', rud: false },
    { id: 7, name: "Starship SN2 Test Flight", rud: true },
    { id: 8, name: "Starship SN5 Test Flight", rud: false },
    { id: 9, name: "Starship SN7 Test Flight", rud: true },
    { id: 10, name: "Starship SN9 Test Flight", rud: true },
  ];

  return (
    <div className="App">
      <h1>Rocket Launch Tracker</h1>
      <ul className="launch-list">
        {/* Map over the rocketLaunches array to render a LaunchItem for each */}
        {rocketLaunches.map(launch => (
          <LaunchItem
            key={launch.id} /* Unique key prop is crucial */
            name={launch.name} /* Passing launch name as a prop */
            rud={launch.rud} /* Passing initial RUD status as a prop */
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
