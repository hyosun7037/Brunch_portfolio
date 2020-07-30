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
  overflow: hidden;
`;

const NavContents = styled.div`
  height: 373px;
  padding-top: 28px;
  overflow-y: auto;
`;

const NavMain = styled.div`
  height: 612px;
  margin-bottom: 37px;
`;

const NavFooter = styled.div`
  height: 139px;
  margin: 40px 0 30px;
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
  color: #00c3bd;
  border: 1px solid #00c3bd;
  margin-top: 13px;
  background-color: #fff;
`;

const NavNonmember = () => {
  // a 태그 나중에 수정예정
  return (
    <NavWrap>
      <NavMain>
        <NavHeader>
          <NavLogo></NavLogo>
          <p className="NavText1">text</p>
          <p>text</p>
          <Route path="/" component={Main} exact={true}></Route>
          <NavStart>브런치 시작하기</NavStart>
        </NavHeader>
        <NavContents></NavContents>
      </NavMain>
      <NavFooter></NavFooter>
    </NavWrap>
  );
};

export default NavNonmember;
