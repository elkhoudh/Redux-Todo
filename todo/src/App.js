import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Modal />
      </div>
    );
  }
}

export default App;
