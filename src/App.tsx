import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";
import RickRoll from "./components/rickRoll";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      {!config.path && <p className="App-intro">You shouldn't be here yet!</p>}
      {config.path?.includes("route1") && <p>Welcome to Route 1!</p>}
      {config.path?.includes("route2") && <p>Welcome to Route 2!</p>}
      {config.path?.includes("routeRoll") && <RickRoll />}
      <p>This lambda is now serving #{config.counter}.</p>
      <a href={``}>Home</a> <a href={`route1`}>Route 1</a> <a href={`route2`}>Route 2</a>{" "}
      <a href={`routeRoll`}>Route Roll</a>
    </div>
  );
}
