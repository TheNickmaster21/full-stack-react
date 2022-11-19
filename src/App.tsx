import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import RickRoll from "./components/RickRoll";

const Links = () => (
  <div>
    <p className="social-link">
      <a href="https://twitter.com/TheNickmaster21">@TheNickmaster21 on Twitter</a>
    </p>

    <p className="social-link">
      <a href="https://www.roblox.com/users/1209469/profile/">TheNickmaster21 on Roblox</a>
    </p>
  </div>
);

export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <h1>NickMa.in</h1>
      {(!config.path || config.path === "/") && <p className="App-intro">You shouldn't be here yet!</p>}
      {config.path?.includes("links") && <Links />}
      {config.path?.includes("routeRoll") && <RickRoll />}
      <a href={`/`}>Home</a> <a href={`links`}>Links</a> <a href={`routeRoll`}>Route Roll</a>
      <p className="footer">This lambda is now serving #{config.counter}.</p>
    </div>
  );
}
