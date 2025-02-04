import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-link">Buttons</Link>
    <Link to="/switches" className="navbar-link">Switches</Link>
    <Link to="/effects" className="navbar-link">Effects</Link>
  </nav>
);

const UIShowcase = () => {
  const buttonStyles = [
    "button-blue",
    "button-green",
    "button-red",
    "button-gray",
    "button-yellow",
  ];

  return (
    <div className="bg">
      <Navbar />
      <div className="app-container">
        <div className="button-grid">
          {buttonStyles.map((style, index) => (
            <div key={index} className="button-wrapper">
              <button className={style}>Button {index + 1}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SwitchesShowcase = () => {
  const switchStyles = [
    "button-blue",
    "button-green",
    "button-red",
    "button-gray",
    "button-yellow",
  ];

  return (
    <div className="bg">
      <Navbar />
      <div className="app-container">
        <div className="button-grid">
          {switchStyles.map((style, index) => (
            <div key={index} className="button-wrapper">
              <button className={style}>Switch {index + 1}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EffectsShowcase = () => {
  const effectStyles = [
    "button-blue",
    "button-green",
    "button-red",
    "button-gray",
    "button-yellow",
  ];

  return (
    <div className="bg">
      <Navbar />
      <div className="app-container">
        <div className="button-grid">
          {effectStyles.map((style, index) => (
            <div key={index} className="button-wrapper">
              <button className={style}>Effect {index + 1}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UIShowcase />} />
        <Route path="/switches" element={<SwitchesShowcase />} />
        <Route path="/effects" element={<EffectsShowcase />} />
      </Routes>
    </Router>
  );
};

export default App;
