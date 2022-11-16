import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import RickRoll from "./components/RickRoll";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <h1>NickMa.in</h1>
      {(!config.path || config.path === "/") && <p className="App-intro">You shouldn't be here yet!</p>}
      {config.path?.includes("route1") && <p>Welcome to Route 1!</p>}
      {config.path?.includes("route2") && <p>Welcome to Route 2!</p>}
      {config.path?.includes("routeRoll") && <RickRoll />}
      <p>This lambda is now serving #{config.counter}.</p>
      <a href={`/`}>Home</a> <a href={`route1`}>Route 1</a> <a href={`route2`}>Route 2</a>{" "}
      <a href={`routeRoll`}>Route Roll</a>
    </div>
  );
}
