import React, { Component } from "react";
import Main from "./components/MainComponent"; //Import the Main component from MainComponent
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//Render the main component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
