import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <ReactPlayer style={{ border: "solid black 2px" }}>
          <source src="sample.mp4" type="mp4" />
        </ReactPlayer> */}
        <video controls>
          <source src={"sample.mp4"} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default App;
