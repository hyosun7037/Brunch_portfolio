import React, { Component } from "react";

class Upload extends Component {
  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
      </div>
    );
  }
}

export default Upload;
