import React from "react";
import "styles/detail.css";
import DetailHeader from "components/Header/DetailHeader";
import { Link } from "react-router-dom";

import WrapArticle from "components/Article/WrapArticle";
import BodyArticle from "components/Article/BodyArticle";
import KeywordArticle from "components/Article/KeywordArticle";
import CommentArticle from "components/Article/CommentArticle";
import AuthorProfile from "components/Article/AuthorProfile";
import { IcoBy, CoverCellInfo,  TxtAuthor, WrapFrame, DetailComment, CommentHead, CommentContent, WrapCommentWrite, LinkProfile, WriteAppend, WrapKeywordArticle, TfArea, BtnDefault, WrapPageArticle, ScreenOut } from "styles/StyledComponentAll";
 
const Detail = () => {
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
                <h1 className="cover__title">친구? 그거 꼭 많아야돼?</h1>
                <p className="cover__sub__title">
                  인간이 사용할 수 있는 감정의 양은 정해져 있다고 본다.
                </p>
              </div>
              <CoverCellInfo>
                <IcoBy>by</IcoBy>
                <TxtAuthor>
                  <Link to="/">별작가</Link>
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
            <DetailComment>
              <ScreenOut>댓글</ScreenOut>
              <CommentHead>
                <strong>
                  댓글<span>0</span>
                </strong>
              </CommentHead>
              <CommentContent>
                <div>
                  <button>이전 댓글 보기</button>
                </div>
                <ul></ul>
              </CommentContent>
              <WrapCommentWrite>
                <LinkProfile>
                  <img
                    src="//img1.daumcdn.net/thumb/C42x42.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg"
                    alt="프로필 이미지"
                  />
                </LinkProfile>
                <form method="post">
                  <input type="hidden" name="sticker" />
                  <fieldset style={{ border: "none" }}>
                    <div>
                      <span className="wrap__area">
                        <TfArea contentEditable>공감과 응원의 댓글은 작가에게 큰 힘이 됩니다.</TfArea>
                        <textarea className="tf__area" style={{display:'none'}}></textarea>
                      </span>
                      <WriteAppend>
                        <div className="wrap__btn" style={{textAlign:'right'}}>
                          <BtnDefault type="submit">확인</BtnDefault>
                        </div>
                      </WriteAppend>
                    </div>
                  </fieldset>
                </form>
              </WrapCommentWrite>
            </DetailComment>
            {/* 프로필*/}
            <AuthorProfile />
            {/* 관련글 */}
            <WrapArticle />
          </WrapFrame>
          {/* 이전글 */}
          <WrapPageArticle>
            <Link to ="/">
              <span>이전글</span>
              <strong>토요일이 주는 가장 큰 보상</strong>
            </Link>
          </WrapPageArticle>
        </div>
      </div>
    </>
  );
};

export default Detail;
