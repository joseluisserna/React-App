import React, { Component } from "react";
import Main from "./components/MainComponent"; //Import the Main component from MainComponent
import "./App.css";
//Render the main component
class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
