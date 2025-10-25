import { useState } from "react";
import uberMap from "./assets/uber-map.png";
import "./App.css";
import Button from "./components/button";
import TripPopover from "./components/trip-popover";

function App() {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  return (
    <main>
      <img id="map" src={uberMap} alt="map" />
      <Button
        id="toggle-button"
        onClick={() => setShowPopover((prev) => !prev)}
      >
        Toggle trip found
      </Button>
      {showPopover && (
        <TripPopover
          id="trip-popover"
          onDismiss={() => setShowPopover(false)}
        />
      )}
    </main>
  );
}

export default App;
