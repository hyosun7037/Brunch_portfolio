import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "../pages/Main";

const NavWrap = styled.div`
  width: 260px;
  height: 100%;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #ddd;
  background-color: #fff;
`;

const NavHeader = styled.div`
  position: relative;
  height: 239px;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
  overflow-y: hidden;
`;

const NavContents = styled.ul`
  height: 373px;
  padding-top: 28px;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  overflow: auto;
`;

const NavContentsMenu = styled.li`
  font-size: 14px;
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

const NavMain = styled.div`
  height: 612px;
  margin-bottom: 37px;
`;

const NavFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 139px;
  /* margin: 40px 0 30px; 
  크기 줄였을 때 겹치는 부분 오류 나중에 수정하기 */
`;

const NavLogo = styled.div`
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/logo_service2_v1.png");
  background-color: #f8f8f8;
  width: 48px;
  height: 48px;
  margin: 40px auto 9px;
  background-position: -1px 54px;
`;

const NavStart = styled.button`
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

const NavFindById = styled.a`
  font-size: 13px;
  color: #959595;
  border-bottom: 1px solid #bbb;
  cursor: pointer;
`;

const NavText = {
  lineHeight: "1.35",
  fontSize: "13px",
  fontStyle: "italic",
  color: "#666",
  marginBottom: "5px",
};

const NavSubText = {
  fontSize: "10px",
  fontStyle: "italic",
  letterSpacing: "0.3px",
  color: "#959595",
};

const NavNonmember = () => {
  // a 태그 나중에 수정예정
  return (
    <NavWrap>
      <NavMain>
        <NavHeader>
          <NavLogo></NavLogo>
          <p className="NavText" style={NavText}>
            You can make anything <br />
            by writing
          </p>
          <p className="NavSubText" style={NavSubText}>
            - C.S.Lewis -
          </p>
          <Route path="/" component={Main} exact={true}></Route>
          <NavStart>
            <Route path="/" component={Main}>
              브런치 시작하기
            </Route>
          </NavStart>
        </NavHeader>
        <NavContents>
          <NavContentsMenu>
            <Route path="/" component={Main}>
              브런치 홈
            </Route>
          </NavContentsMenu>
          <NavContentsMenu>
            <Route path="/" component={Main}>
              브런치 나우
            </Route>
          </NavContentsMenu>
          <NavContentsMenu>
            <Route path="/" component={Main}>
              브런치 책방
            </Route>
          </NavContentsMenu>
        </NavContents>
      </NavMain>
      <NavFooter>
        <NavFindById>
          <Route path="/" component={Main} exact={true}>
            계정을 잊어버리셨나요?
          </Route>
        </NavFindById>
      </NavFooter>
    </NavWrap>
  );
};
export default NavNonmember;
