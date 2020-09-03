// 브런치 나우 페이지
import React, { Component } from "react";
import Header from "components/Header/Header";
import "styles/main.css";
import "index.css";
import { ScreenOut } from "styles/StyledComponentAll";
import Now from "components/Now";
import Axios from "axios";
import { POSTLIST_URL } from "config";

class MyBrunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowData: [],
    };
  }

  nowDataURL = () => {
    Axios.get(`${POSTLIST_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        return this.setState({ nowData: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.nowDataURL();
  }

  render() {
    const { nowData } = this.state;
    return (
      <>
        <Header title="브런치 나우" height="100px"></Header>
        <main className="now__content" style={{ color: "#333" }}>
          <article className="now__body">
            <ScreenOut>브런치</ScreenOut>
            {nowData.map((now) => (
              <Now
                key={now.id}
                id={now.id}
                userId={now.userId}
                title={now.title}
                subTitle={now.subTitle}
                content={now.content}
                createDate={now.createDate}
                coverImg={now.coverImg}
                nickName={now.nickName}
              />
            ))}
          </article>
        </main>
      </>
    );
  }
}

export default MyBrunch;
