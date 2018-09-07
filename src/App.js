import React, { Component } from "react";
import "./App.css";
import logo from "./one.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="app-img" src={logo} alt="New file" />
      </div>
    );
  }
}

export default App;
