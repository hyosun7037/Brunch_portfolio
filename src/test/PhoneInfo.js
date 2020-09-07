import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0,
    },
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!this.state.editing
  //     && !nextState.editing
  //     && nextProps.info === this.props.info) {
  //   return false;
  // }
  // // 나머지 경우엔 리렌더링함
  // return true;
  // }

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    const { name, phone } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
