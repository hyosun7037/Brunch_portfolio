import React, { Component } from "react";
import "styles/detail.css";
import DetailHeader from "components/Header/DetailHeader";
import { Link } from "react-router-dom";
import WrapArticle from "components/Article/WrapArticle";
import BodyArticle from "components/Article/BodyArticle";
import KeywordArticle from "components/Article/KeywordArticle";
import CommentArticle from "components/Article/CommentArticle";
import AuthorProfile from "components/Article/AuthorProfile";
import {
  IcoBy,
  CoverCellInfo,
  TxtAuthor,
  WrapFrame,
  WrapKeywordArticle,
  WrapPageArticle,
  ListRelativeArticle,
} from "styles/StyledComponentAll";
import Comment from "components/detail/Comment";
import Axios from "axios";
import { POSTLIST_URL } from "config";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPostList: [],
    };
  }

  // postlist data - get
  postListApi = () => {
    Axios.get(`${POSTLIST_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        console.log(localStorage.getItem("Email"));
        return this.setState({ dataPostList: res.data });
      })
      .catch((res) => console.log(res));
  };
  // 포스트 리스트 호출
  componentDidMount() {
    this.postListApi();
  }
  render() {
    const { dataPostList } = this.state;
    const slicePostList1 = dataPostList.slice(7, 13);
    return (
      <>
        <DetailHeader
          position="absolute"
          backposition="-100px 0"
          sideBtnColor="rgba(0,0,0,0)"
        />
        <div className="wrap__detail">
          <div className="wrap__article">
            <div className="wrap__cover">
              <div className="cover__item">
                <div className="cover__image"></div>
                <div className="cover__inner"></div>
                <div className="cover__cell">
                  <h1 className="cover__title">
                    대한민국 평범한 모범생의 비애
                  </h1>
                  <p className="cover__sub__title">
                    지금부터라도 나만의 가사를 써보기로 했다
                  </p>
                </div>
                <CoverCellInfo>
                  <IcoBy>by</IcoBy>
                  <TxtAuthor>
                    <Link to="/">바람</Link>
                  </TxtAuthor>
                  <IcoBy>Aug 05.2020</IcoBy>
                </CoverCellInfo>
              </div>
            </div>
            <WrapFrame>
              {/* 글 내용 */}
              <BodyArticle />
              {/* 키워드, 댓글창 */}
              <WrapKeywordArticle>
                {/* 키워드 */}
                <KeywordArticle />
                {/* 댓글버튼 */}
                <CommentArticle />
              </WrapKeywordArticle>
              {/* 댓글창 클릭하면 display 상태 변경 */}
              <div
                className="article__body__bottom"
                style={{ paddingTop: "82px" }}
              ></div>
              {/* 댓글창 */}
              <Comment />
              {/* 프로필*/}
              <AuthorProfile />
              {/* 관련글 */}
              <ListRelativeArticle>
                {slicePostList1.map((post) => (
                  <WrapArticle
                    key={post.id}
                    id={post.id}
                    coverImg={post.coverImg}
                    nickName={post.nickName}
                    title={post.title}
                    subTitle={post.subTitle}
                    content={post.content}
                  />
                ))}
              </ListRelativeArticle>
            </WrapFrame>
            {/* 이전글 */}
            <WrapPageArticle>
              <Link to="/">
                <span>이전글</span>
                <strong>토요일이 주는 가장 큰 보상</strong>
              </Link>
            </WrapPageArticle>
          </div>
        </div>
      </>
    );
  }
}
export default Detail;
