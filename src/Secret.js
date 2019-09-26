import React, { Component } from "react";

class Secret extends Component {
  render() {
    return (
      <div>
        <p>Secret</p>
        <iframe
          title="awesome gif"
          src="https://giphy.com/embed/NdKVEei95yvIY"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Secret;
