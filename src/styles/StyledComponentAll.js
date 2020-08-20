import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트 공통영역
const ScreenOut = styled.h2`
  margin: 0;
  text-indent: -9999px;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
`;

const RoundBtnBig = styled.button`
  display: inline-block;
  margin: 0 2px;
  border-radius: 25px;
  padding: 7px 16px 6px;
  border: 1px solid #eee;
  background: #fff;
  font-size: 15px;
  line-height: 15px;
  font-family: "Noto Sans KR";
  color: #959595;
  cursor: pointer;
`;

const RoundBtnBigActive = styled(RoundBtnBig)`
  color: #00c6bd;
  border: 1px solid #00c6bd;
`;
export { ScreenOut, RoundBtnBig, RoundBtnBigActive };

//// page

// Author.js
const WrapProfile = styled.div`
  position:relative;
  width:700px;
  margin:0 auto 94px;
  padding:35px 0 0 ;
  font-weight:300;
`;

const TitBloger = styled.strong`
  display:block;
  padding-right:170px;
  font-weight:300;
  font-size:28px;
  line-height:34px;
`;

const AuthorName = styled.span`
  display: block;
  padding-top:5px;
  font-size:13px;
  line-height:20px;
  color:#959595;
`;

const TxtInfo = styled.span`
  font-size:13px;
  line-height:20px;
  color:#959595;
`;

const TabContents = styled.div`
  position:relative;
  width:700px;
  margin:0 auto;
  ul{
      height:58px;
      border-top:1px solid #eee;
      display: flex;
      padding:0;
      li{
          width:50%;
          button{
              display:block;
              width:100%;
              height:24px;
              margin-top:-1px;
              padding:16px 0 17px;
              /* border-top:1px solid transparent; */
              /* border-top: ${(props) => props.TabContentsBt || "1px solid transparent"}; */
              border-top: ${(props) => props.TabContentsBt || "1px solid #f8f8f8"};
              font-size:16px;
              text-align:center;
              text-decoration:none;
              outline:none;
              border-left:0;
              border-right:0;
              border-bottom:0;
              cursor:pointer;
              &:hover{
                border-top:1px solid #333;
                color:#333;
              }
              &:active{
                border-top:1px solid #333;
                color:#333;
              }
              span{
                  display:inline-block;
                  position:relative;
                  padding:0 7px;
                  line-height:1.5;
              }
          }
      }
  }
`;

export {WrapProfile, TitBloger, AuthorName, TxtInfo, TabContents}


// AuthorDrawer.js
const Wrapper = styled.div`
  width:700px;
  margin:0 auto;
  img{
      width:100%;
  }
`;

const DrawerBtn = styled.button`
  outline:none;
  border:none;
  color:#666;
  font-size:17px;
  letter-spacing:-1px;
  white-space:nowrap;
  margin-right:10px;
`;

export{Wrapper,DrawerBtn}


// BrunchNow.js
const ListCommon = styled.ul`
  width:700px;
  margin:0 auto;
  padding:0px;
  li{
    width:100%;
    padding:25px 0 30px;
    border-bottom:1px solid #eee;
    display: flex;
    justify-content:space-between;
  }
`;

const LinkThumb = styled.a`
  position:relative;
  width:120px;
  height:120px;
  margin-left:40px;
  background-position:0 -280px;
  margin-top:5px;
`;


const DescCommon = styled.span`
  display:block;
  padding-top:5px;
  font-size:14px;
  line-height:22px;
  color:#666;
  max-height:43px;
  overflow:hidden;
  text-overflow:ellipsis;
  font-weight:300;
`;


const IcoBar = styled.span`
  display:inline-block;
  width:1px;
  height:14px;
  margin:4px 10px 0 10px;
  background-color:#bfbfbf;
  vertical-align:top;
`;

const AppendCommon = styled.div`
  width:100%;
  padding-top:18px;
  font-size:12px;
  color:#959595;
  font-family:'Noto Sans KR';
`;


const IcoBy = styled.span`
  margin-top: 3px;
  width: 14px;
  height: 13px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  color: ${(props) => props.IcoByColor || "rgba(255, 255, 255, 0.5)"};
  font-size: 12px;
  padding-right: 3px;
  margin-right: 3px;
`;

const IcoDot = styled.span`
  width:2px;
  height:2px;
  margin:8px 6px 11px;
  background-color:#bfbfbf;
  vertical-align:top;
`;


const TitSub = styled.strong`
  font-weight: 300;
  font-family: "Noto Sans KR";
  display: block;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
`;

export {ListCommon, LinkThumb, DescCommon, IcoBar, AppendCommon, IcoBy, IcoDot, TitSub}

// Library.js
const Container = styled.div`
  &::before{
    position:absolute;
    top:0;
    z-index:100;
    display:block;
    width:50px;
    height:129px;
    left:50%;
    margin-left:-522px;
    content:'';
    background-image:url("http://img1.daumcdn.net/thumb/C108x270/?fname=http://t1.daumcdn.net/brunch9/static/images/pcrtn/bg_library.png");
    background-size:cover;
    }
`;

const LibraryMenuWrap = styled.div`
    position:relative;
    width:960px;
    margin:0 auto;
    padding-bottom:25px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

const TitLibrary = styled.h2`
    margin-left:20px;
    font-size:28px;
    font-weight:400;
    letter-spacing:-1.8px;
    line-height:36px;
    color:#888;
    font-family:'Nanum Myeongo', serif;
`;

const TxtMenu = styled.span`
  color:#666;
  font-size:14px;
  font-family:'Noto Sans KR', sans-serif;
`;

const MenuLibrary = styled.div`
  ul{
      display:flex;
      justify-content: space-around;
      align-items:center;
      font-family:'Noto Sans KR', sans-serif;
      li{
        margin-right:10px;
        font-weight:200;
      }
  }
`;

const TitLibraryLink = styled.h3`
    display:block;
    width:960px;
    height:30px;
    margin:0 auto;
    font-size:14px;
    color:#222;
    font-family:'Noto Sans KR', sans-serif;
    font-weight:300;
    a{
        display:inline-block;
        height:100%;
        padding:6px 20px 0 0 ;
        letter-spacing:-.3px;
        box-sizing:border-box;
    }
`;

const ICoArr = styled.span`
    display:inline-block;
    width:7px;
    height:12px;
    margin:4px 0 0 6px;
    background-position:-130px -710px;
    background-image:url('http://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v1_191224.png');
`;

const WrapLIst = styled.ul`
    display:flex;
    justify-content:space-between;
    width:960px;
    margin:0 auto;
    padding-left:0;
    font-family:'Noto Sans KR', sans-serif;
    color:#333;
    font-weight:300;
`;

const RecentList = styled.li`
    display:flex;
    width:450px;
    height:104px;
    margin-right: ${(props) => props.RecentListMarginR || "0px"};
    padding:19px 0 20px 0;
    overflow:hidden;
    border-bottom:1px solid #eee;
    font-family:'Noto Sans KR', sans-serif;
    strong{
        font-weight:400;
        display:block;
        font-size:16px;
        line-height:30px;
        letter-spacing:-1px;
    }
`;

const InnerLikeit = styled.div`
  margin:0 auto;
  width:960px;
  position:relative;
  padding:31px 0 40px;
`;

const IcoLikeitClip = styled.span`
  position:absolute;
  top:-8px;
  right:0;
  width:46px;
  height:38px;
  background-position:-80px -710px;
  display:inline-block;
  overflow: hidden;
  background:url("http://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v1_191224.png");
  line-height:0;
  vertical-align:top;
`;

const TitLib = styled.h2`
  font-size:28px;
  font-weight:400;
  letter-spacing:-.8px;
  color:#333;
  font-family:'Nanum Myeongjo',serif;
`;

const LinkThumbImg = styled.a`
  display:inline-block;
  width:100px;
  height:100px;
  margin:5px 0 0 30px;
`;

export {LinkThumbImg, TitLib, InnerLikeit, IcoLikeitClip, Container, LibraryMenuWrap, TitLibrary, TxtMenu, MenuLibrary, TitLibraryLink, ICoArr, WrapLIst, RecentList }


// Profile.js
const CoverBloger = styled.div`
  height:${(props) => props.coverHeight || "320px"};
  background-color: ${(props) => props.coverBg || "#f8f8f8"};
`;

const DescBloger = styled.pre`
  font-size: 13px;
  line-height: 20px;
  color: #959595;
  word-break: break-word;
  white-space: pre-line;
  margin-bottom: -1px;
  font-family: "Noto sans KR";
  margin: 0;
`;

const BlogCount = styled.dl`
  display: flex;
  overflow: hidden;
  padding: 22px 200px 0 0;
  font-size: 12px;
  color: #959595;
`;

const TxtG = styled.em`
  display: block;
  font-style: normal;
  font-weight: normal;
`;

const NumCount = styled.span`
  margin-top: -2px;
  font-weight: 300;
  font-size: 20px;
  color: #959595;
`;

const WrapProfileBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 2px;
  height: 36px;
  padding-right: 19px;
`;

const BtnType = styled.button`
  width: 100px;
  margin-left: 8px;
  padding: 0;
  display: inline-block;
  min-width: 80px;
  height: 32px;
  border: 1px solid #00c3bd;
  border-radius: 20px;
  font-size: 13px;
  line-height: 32px;
  color: #00c3bd;
  background-color: #fff;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const BtnType2 = styled(BtnType)`
  background-color: #00c3bd;
  color: #fff;
`;

const MoreControl = styled.div`
  position: absolute;
  top: 0;
  right: -12px;
`;

const CardBanner = styled.div`
  overflow:hidden;
  width:700px;
  height:100px;
  margin:0 auto;
`;

const ProfileImg = styled.div`
  overflow: hidden;
  position: absolute;
  top: -50px;
  right: 0;
  width: 100px;
  height: 100px;
  background-position: -250px -80px;
  border-radius: 100px;
`;
export { CoverBloger, DescBloger, BlogCount, TxtG, NumCount, WrapProfileBtn, BtnType, BtnType2, MoreControl, CardBanner, ProfileImg }


// Search.js
const Box = styled.div`
  width: 940px;
  padding: 275px 0 227px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: "Noto Sans KR";
  margin: 0 auto;
`;

const BoxInner = styled.div`
  height: 440px;
  width: 940px;
  margin: 0 auto;
`;

const WrapSerach = styled.div`
  padding: 0;
  border-bottom: 1px solid #333;
`;

const TxtSearch = styled.input`
  font-size: 30px;
  letter-spacing: -1px;
  border: 0;
  font-family: "Noto Sans KR";
  outline: 0;
  color: #333;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const SearchForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSearch = styled.button`
  background-image: url("//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  background-color: rgba(0, 0, 0, 0);
  background-position: -30px 0;
  border: none;
  display: block;
  width: 22px;
  height: 22px;
`;

const IcoSearch = styled.span`
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const SuggestGuide = styled.div`
  width: 949px;
  margin: 65px auto 0;
  text-align: center;
`;

const MoveUp = styled.div`
  transition: opacity 0.2s ease-out 0s, transform 0.5s ease-out 0s;
`;

const WrapList = styled.div`
  overflow: hidden;
  width: 940px;
  margin: 45px auto 0;
`;

const DescG = styled.p`
  padding: 0 0 12px;
  font-size: 28px;
  color: #333;
  font-weight: 300;
  b {
    color: #00c6bd;
    font-weight: 300;
  }
`;

const RecKeyword = styled.button`
  display: inline-block;
  margin: 0 4px;
  padding: 4px 14px;
  font-size: 15px;
  color: #00c6bd;
  border: 1px solid #56ddd5;
  border-radius: 24px;
  line-height: 22px;
  background-color: #fff;
  font-weight: 600;
`;

const ThumbImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
`;

const TitWriter = styled.strong`
  display: block;
  padding: 15px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  text-align: center;
  font-family: "Noto Sans KR";
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
`;

const TxtWriter = styled.span`
  width: 140px;
  padding: 3px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  text-align: center;
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RecList = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    width: 140px;
    height: 198px;
    vertical-align: top;
    text-align: center;
    font-family: "Noto Sans KR";
  }
`;
export { Box, BoxInner, WrapSerach, TxtSearch, SearchForm, ButtonSearch, IcoSearch, SuggestGuide, MoveUp, WrapList, DescG, RecKeyword, ThumbImg, TitWriter, TxtWriter, RecList}


// Detail.js
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
export { CoverCellInfo,  TxtAuthor, WrapFrame, DetailComment, CommentHead, CommentContent, WrapCommentWrite, LinkProfile, WriteAppend, WrapKeywordArticle, TfArea, BtnDefault, WrapPageArticle }

// component

// AuthorProfile.js

// 작가 프로필 이름
const LinkAuthorName = styled.a`
  display:block;
  font-size:28px;
  overflow:hidden;
  width:588px;
  font-weight:300;
  font-family:'Noto Sans KR';
  white-space:nowrap;
`;

// 작가 프로필 이미지
const LinkAuthorImg = styled.a`
  position:absolute;
  top:-22px;
  right:0;
  img{
    border-radius:100px;
    width:100px;
    height:100px;
  }
`;

// 구독자
const InfoSubs = styled.span`
  span{
    font-size:14px;
    font-family:'Noto Sans KR';
    color:#666;
    font-weight:300;
  }
`;

// 구독하기 버튼
const BtnFollow = styled.button`
  width:80px;
  border:1px solid #00c3bd;
  border-radius:40px;
  font-size:13px;
  font-family:'Noto Sans KR';
  color:#00c3bd;
  background:#fff;
  height:32px;
`;
export { LinkAuthorName,  LinkAuthorImg, InfoSubs, BtnFollow }

// BodyArticle.js
const Blockquote = styled.blockquote`
  text-align: center;
  background-image: url("http://t1.daumcdn.net/brunch/static/img/help/pc/img_blockquote_type1_small.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  padding: 25px 0 0;
  font-size: 15pt;
  color: #333;
  line-height: 35px;
  margin: 80px auto;
  font-weight: 300;
`;

const ItemTypeTit = styled.p`
  width: 700px;
  min-width: 700px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.8px;
  font-weight: 500;
`;

const ItemTypeText = styled(ItemTypeTit)`
  font-weight: 300;
  margin-bottom: 30px;
`;
export { Blockquote,  ItemTypeTit, ItemTypeText }


// CommentArticle.js
const BtnComment = styled.button`
  margin-left: 8px;
  padding: 10px 20px 8px 19px;
  border: 1px solid #bbb;
  font-size: 13px;
  border-radius: 42px;
  font-family: "Noto Sans KR";
  color: #666;
`;

const IcoArticle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-position: 0 0;
  overflow: hidden;
  background-image: url("http://t1.daumcdn.net/brunch9/static/images/pc/ico_article_181212_rtn.png");
  background-size: 80px 80px;
  line-height: 0;
  text-indent: -9999px;
  vertical-align: top;
`;
export { BtnComment, IcoArticle }

// KeywordArticle.js
const WrapKeyword = styled.div`
  overflow: hidden;
  padding-top: 6px;
`;

const ListKeyword = styled.ul`
  display: flex;
  padding: 0;
  a {
    margin-right: 8px;
    font-family: "Noto Sans KR";
    li {
      display: block;
      min-width: 14px;
      height: 26px;
      padding: 0 10px;
      border: 1px solid #ddd;
      border-radius: 15px;
      font-size: 12px;
      line-height: 26px;
      color: #959595;
      text-align: center;
    }
  }
`;
export { WrapKeyword, ListKeyword }

// WrapArticle.js
// 관련글 Wrapper
const Wrap = styled.div`
  max-width:'1020px';
  margin:'0 auto';
  &::before{
    position:absolute;
    left:0;
    width:100%;
    height:75px;
    background:#fbfbfb;
    content:'';  
  }
`;

// 관련글 
const ListRelativeArticle = styled.ul`
  display: flex;
  position: relative;
  margin:0 auto;
  max-width:1020px;
  
  li{
    width:300px;
    margin:0 20px 35px;
    p{
      width:100%;
      height:170px;
      background-size:cover;
      background-position:50% 50%;
      background-image:url('//img1.daumcdn.net/thumb/C270x320.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/16iq/image/oFp1jZBJKKtPaY5g_DZ59MzMUc4.jpg');
    }
    strong{
      display:block;
      overflow:hidden;
      max-height:62px;
      margin-top:26px;
      font-weight:400;
      font-size:24px;
      line-height:32px;
      font-family:"Nanum Myeongjo", serif;
      word-break:break-all;
      letter-spacing:-1.2px;
    }
  }
`;

// 관련글 상세
const WrapRelatedDesc = styled.span`
  display:-webkit-box;
  overflow:hidden;
  max-height:66px;
  margin-top:8px;
  font-size:13px;
  font-family:'Noto Sans KR', sans-serif;
  text-overflow:ellipsis;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
    span{
      display:inline;
      position:relative;
      line-height:24px;
      font-family:'Noto Sans Light', sans-serif;
      color:#959595;
    }
`;


// 작가이름
const InfoAuthor = styled.span`
  display:inline-block;
  margin-top:15px;
  span{
    color:#959595;
    font-size:13px;
    font-family:'Noto Sans KR', sans-serif;
    margin-top:15px;
  }
`;

export { Wrap, ListRelativeArticle, WrapRelatedDesc, InfoAuthor }

// AuthorInfo.js
// 각 소개 단락
const AuthorIntro = styled.div`
  padding-top:34px;
  width:700px;
  margin:0 auto;
`;

// 타이틀
const TitIntro = styled.strong`
  display: block;
  font-weight:400;
  font-size:12px;
`;

// 내용
const DescIntro = styled.p`
  padding-top:22px;
  font-weight:200;
  font-size:13px;
  line-height:24px;
  color:#666;
`;

// 소개 태그
const ListTag = styled.ul`
  overflow:hidden;
  padding-top:13px;
  padding-left:0px;
  display:flex;
  justify-content:flex-start;
    li{
        margin-right:8px;
        a{
            display:inline-block;
            padding:4px 10px;
            border:1px solid #ddd;
            border-radius:20px;
            font-size:12px;
            color:#959595;
            letter-spacing:-1px;
        }
    }
`;
export { AuthorIntro, TitIntro, DescIntro, ListTag }
