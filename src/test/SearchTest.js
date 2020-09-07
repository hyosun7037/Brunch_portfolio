import React, { Component } from "react";
import PhoneInfoList from "./PhoneInfoList";

class SearchTest extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "테스트1",
        phone: "010-0000-5678",
      },
      {
        id: 1,
        name: "테스트2",
        phone: "010-0000-1234",
      },
    ],
    keyword: "",
  };
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info) =>
        (info.name.indexOf(keyword) && info.phone.indexOf(keyword)) !== -1
    );
    return (
      <div>
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList data={filteredList} />
      </div>
    );
  }
}

export default SearchTest;
