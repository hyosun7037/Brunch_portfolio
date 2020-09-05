import React, { Component } from "react";
import {
  WrapCommentWrite,
  LinkProfile,
  Line,
  CommentCon,
  CommentConSmall,
} from "styles/StyledComponentAll";
import { COMMENT_URL } from "config";
import Axios from "axios";

class FeedCommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComments: [],
    };
  }
  CommentApi = () => {
    Axios.get(`${COMMENT_URL}/1`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        return this.setState({ dataComments: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.CommentApi();
  }

  render() {
    const { dataComments } = this.state;
    const commentsContent = dataComments.content;
    const commentsNickName = dataComments.nickName;
    console.log("dataComments:::" + dataComments);
    console.log("commentsContent:::" + commentsContent);
    return (
      <>
        <WrapCommentWrite style={{ margin: "20px 0" }}>
          <LinkProfile>
            <img
              src="https://img1.daumcdn.net/thumb/C100x100.fpng/?fname=https://t1.daumcdn.net/brunch/static/img/help/pc/ico_profile_100_01.png"
              alt="프로필 이미지"
              width="42px"
              heigtht="42px"
            />
          </LinkProfile>

          <form method="post" style={{ border: "none", marginTop: "10px" }}>
            <input type="hidden" name="sticker" />
            <CommentConSmall>{commentsNickName}</CommentConSmall>
            <CommentCon>{commentsContent}</CommentCon>
          </form>
        </WrapCommentWrite>
        <Line />
      </>
    );
  }
}

export default FeedCommentList;
