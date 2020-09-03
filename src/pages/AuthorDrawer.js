// 작가의 서랍 페이지
import React, { Component } from "react";
import Header from "components/Header/Header";
import { Link } from "react-router-dom";
import AuthrorWriting from "components/authorContents/AuthrorWriting";
import { Wrapper } from "styles/StyledComponentAll";
import { DrawerBanner } from "images/ImgAll";
import Axios from "axios";
import { DRAWER_URL } from "config";

class AuthorDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writerList: [],
    };
  }

  drawerURL = () => {
    Axios.get(`${DRAWER_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        return this.setState({ writerList: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.drawerURL();
  }

  render() {
    const { writerList } = this.state;
    console.log(writerList);
    return (
      <div>
        <Header searchDisplay="none" />
        {/* 작가의 서랍 배너 */}
        <Wrapper>
          <Link
            to="/"
            style={{
              display: "block",
              marginTop: "50px",
              borderBottom: "1px solid #eee",
            }}
          >
            <DrawerBanner />
          </Link>
        </Wrapper>
        {/* 목록뿌리기 */}
        {writerList.map((writer) => (
          <AuthrorWriting
            key={writer.id}
            id={writer.id}
            userId={writer.userId}
            title={writer.title}
            subTitle={writer.subTitle}
            content={writer.content}
            createDate={writer.createDate}
            coverImg={writer.coverImg}
          />
        ))}
      </div>
    );
  }
}
export default AuthorDrawer;
