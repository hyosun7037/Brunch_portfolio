import React, { Component } from "react";
import Header from "components/Header/Header";
import { ScreenOut } from "styles/StyledComponentAll";
import Axios from "axios";
import { POSTLIST_URL } from "config";
import FeedCon from "components/feed/FeedCon";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedListData: [],
    };
  }

  // feedApi로 수정!!
  feedDataURL = () => {
    Axios.get(`${POSTLIST_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        return this.setState({ feedListData: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.feedDataURL();
  }

  render() {
    const { feedListData } = this.state;
    const feedListDataSlice = feedListData.slice(8, 16);
    return (
      <div>
        {/* 나중에 피드, 작가 Tab으로 수정할 예정 */}
        <Header title="피드" height="100px" />
        <main className="now__content" style={{ color: "#333" }}>
          <article className="now__body">
            <ScreenOut>브런치</ScreenOut>
            {feedListDataSlice.map((feed) => (
              <FeedCon
                key={feed.id}
                id={feed.id}
                userId={feed.userId}
                title={feed.title}
                subTitle={feed.subTitle}
                content={feed.content}
                createDate={feed.createDate}
                coverImg={feed.coverImg}
                nickName={feed.nickName}
              />
            ))}
          </article>
        </main>
      </div>
    );
  }
}

export default Feed;
