import React, { Component } from "react";
import "../style.css";

import Header from "./Header";
import MemeGen from "./MemeGen";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGen />
      </div>
    );
  }
}

export default App;
