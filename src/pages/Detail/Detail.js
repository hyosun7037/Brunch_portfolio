import React from "react";
import "styles/detail.css";
import DetailHeader from "components/Header/DetailHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IcoBy } from "pages/BrunchNow";
import { ScreenOut } from "pages/Main";

import WrapArticle from "components/Article/WrapArticle";
import BodyArticle from "components/Article/BodyArticle";
import KeywordArticle from "components/Article/KeywordArticle";
import CommentArticle from "components/Article/CommentArticle";
import AuthorProfile from "components/Article/AuthorProfile";
 
const CoverCellInfo = styled.span`
  position: absolute;
  width: 700px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TxtAuthor = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 5px;
`;

const WrapFrame = styled.div`
  @media only screen and (max-width: 768px) {
    width: unset;
    min-width: 620px;
  }
  margin: 0 40px;
  min-width: 700px;
  margin-bottom:100px;
`;

// 브런치 댓글창 클릭하면 display 속성 변경시키기
const DetailComment = styled.div`
  display: block;
  padding-top: 44px;
  background-color: #fff;
  width: 700px;
  margin: 0 auto;
  padding: 0 0 80px;
`;

const CommentHead = styled.div`
  width: 700px;
  height: 30px;
  strong {
    font-family: "Noto Sans KR";
    font-weight: 400;
    padding-top: 4px;
    margin-left: -1px;
    span {
      padding-left: 5px;
      color: #00c3bd;
    }
  }
`;

const CommentContent = styled.div`
  width: 700px;
  margin: 0 auto;
  div {
    display: none;
    button {
      width: 100%;
      height: 47px;
      border-top: 1px solid #ddd;
      font-size: 12px;
      line-height: 47px;
      color: #959595;
    }
  }
  ul {
    display: block;
    border-top: 1px solid #eee;
  }
`;

const WrapCommentWrite = styled.div`
  display: flex;
  form {
    position: relative;
    border: 1px solid #eee;
    outline: 0;
    width: 624px;
    margin: 0 auto;
    .write__append {
      padding: 14px 19px 0;
      height: 44px;
    }
  }
`;

const LinkProfile = styled.div`
  margin-left: 18px;
  overflow: visible;
  position: relative;
  width: 42px;
  height: 42px;
  img {
    border-radius: 50%;
  }
`;

const WriteAppend = styled.div`
  padding:14px 0px 0px;
`;

const WrapKeywordArticle = styled.div`
  margin:0 auto;
  width:700px;
  display:flex;
  justify-content:space-between;
`;

// 댓글 작성영역
const TfArea = styled.div`
  width:590px;
  min-height:45px;
  border:none;
  line-height:22px;
  color:#666;
  background:0 0;
  white-space:pre-wrap;
  outline:transparent dotted;
  z-index:1;
  font-family:'Noto Sans KR';
  font-weight:300;
  font-size:13px;
  padding-top:5px;
`;

const BtnDefault = styled.button`
  width:56px;
  height:30px;
  margin-left:5px;
  border:1px solid #bbb;
  border-radius:32px;
  font-size:12px;
  line-height:28px;
  color:#666;
`;


// 이전글
const WrapPageArticle = styled.div`
  position:fixed;
  z-index:100;
  bottom:0;
  width:100%;
  height:59px;
  border-top:1px solid #eee;
  background:#fff;
  a{
    padding:0 30px;
    display: flex;
    span{
      margin-right:13px;
      font-size:12px;
      line-height:60px;
      font-family:'Noto Sans KR';
      color:#959595;
    }
    strong{
      font-weight:300;
      font-size:15px;
      line-height:60px;
      font-weight:'Noto Sans KR', sans-serif;
      max-width:350px;
      display:inline-block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font-style:normal;
    }
  }
`;

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
