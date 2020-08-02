import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "../pages/Main";
import '../styles/nav.css'

const NavContentsMenu = styled.li`
  font-size: 15px;
  color: #777;
  height: 13px;
  letter-spacing: 0.8px;
  line-height: 13px;
  padding: 12.5px 0;
  &:hover {
    color: #00c3bd;
    cursor: pointer;
  }
`;


const NavContentMenuLine = styled.li`
  margin:30px auto 32px;
  padding:0;
  display: block;
  width:140px;
  border-bottom:1px solid #f1f1f1;

`;


const NavLogo = styled.div`
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/logo_service2_v1.png");
  background-color: #f8f8f8;
  width: 48px;
  height: 48px;
  margin: 40px auto 9px;
  background-position: -1px 54px;
`;

const ProfileImg = styled(NavLogo)`
  width:60px;
  height:60px;
  background-image:url("data:image/png;base64,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"); /*임시설정, 나중에 수정 예정*/
  border-radius:60px;
  background-position:0;
`;

const RoundBtn = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 16px;
  font-size: 13px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  color: #00c3bd;
  border: 1px solid #00c3bd;
  margin-top: 13px;
  background-color: #fff;
  cursor: pointer;
`;

const RoundSmallBtn = styled(RoundBtn)`
  width:80px;
  height:32px;
  margin-left:4px;
`;

const GrayBtn = styled(RoundSmallBtn)`
  border:1px solid #bbb;
  color:#959595;
`;

const ProfileName = styled.strong`
  width:212px;
  font-size:14px;
  color:#333333;
  white-space:nowrap;
  vertical-align:bottom;
`;

const ProfileUrl = styled.p`
  text-align:center;
  font-size:12px;
  color:#959595;
  font-family:Georgia;
  font-style:italic;
  white-space:nowrap;
  vertical-align:top;
`;


const NavWriter = () => {
  // a 태그 나중에 수정예정
  return (
    <div className="nav__Wrap"> 
        <div className="nav__Header">
            <Route path="/" component={Main} exact={true}>
              <ProfileImg></ProfileImg>
              <ProfileName>써니</ProfileName>
              <ProfileUrl>brunch.co.kr/@haha7037</ProfileUrl>
            </Route>
          <RoundSmallBtn>
            <Route path="/write" component={Main}>글쓰기</Route> 
          </RoundSmallBtn>

          <RoundSmallBtn>
            <Route path="/apply" component={Main}>작가신청</Route>
          </RoundSmallBtn>
        </div>

        <div className="nav__Main">
        <ul className="nav__Contents">
          <NavContentsMenu>
            <Route path="/mybrunch" component={Main}>내 브런치</Route>
          </NavContentsMenu>

          <NavContentsMenu>
            <Route path="/writersbox" component={Main}>작가의 서랍</Route>
          </NavContentsMenu>

          <NavContentMenuLine />


          <NavContentsMenu>
            <Route path="/" component={Main}>브런치 홈</Route>
          </NavContentsMenu>

          <NavContentsMenu>
            <Route path="/brunchnow" component={Main}>브런치 나우</Route>
          </NavContentsMenu>

          <NavContentsMenu>
            <Route path="/" component={Main}>글 읽는 서재
            </Route>
          </NavContentsMenu>

          <NavContentsMenu>
            <Route path="/feed" component={Main}>피드</Route>
          </NavContentsMenu>
        </ul>
        <div className="nav__Footer">
        <GrayBtn>설정</GrayBtn>
        <GrayBtn>로그아웃</GrayBtn>
        </div>
      </div>
    </div>
  );
};
export default NavWriter;
