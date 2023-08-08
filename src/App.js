import React, {useState} from "react";
import axios from "axios";

function App() {
  // const lonLat = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=5b0ea1f33262ab853ddea80cb83bdaa3"
  // const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5b0ea1f33262ab853ddea80cb83bdaa3"

  return (
    <div className="app">
        <div className="container">
          <div className="top">
            <div className="location">
              <p>London</p>
            </div>
            <div className="temp">
              <h2>65 degrees</h2>
            </div>
            <div className="description">
              <p>Cloudy with a chance of code</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">65 degrees</p>
              <p>Feeks Like</p>
            </div>
            <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
            </div>
            <div className="wind">
            <p className="bold">12 MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
