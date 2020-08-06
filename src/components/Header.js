import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Search = styled.button`
  margin: 0 0 0 16px;
  display: inline-block;
  width: 22px;
  height: 19px;
  background-position: -30px 0px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  border: none;
  background-color: white;
  margin-top: 5px;
`;

const RoundBtn = styled.button`
  border-radius: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  background-color: #fff;
  cursor: pointer;
  width: 64px;
  height: 28px;
  border: 1px solid #959595;
  font-family: "Noto Sans Light", sans-serif;
  margin-top: -5px;
  color: #959595;
  font-size: 12px;
  text-align: center;
`;

const Logo = styled.h1`
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/logo_service2_v1.png");
  display: inline-block;
  width: 72px;
  height: 22px;
  margin: 0;
  padding: 0;
  background-position: ${(props) => props.backposition || "0 0"};
`;

const SideBtn = styled.button`
  background-image: url("http://t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  background-repeat: no-repeat;
  width: 27px;
  height: 20px;
  background-color: white;
  border: none;
  margin-right: 11px;
  cursor: pointer;
`;

const ServiceHeader = styled.div`
  position: ${(props) => props.position || "relative"};
  z-index: ${(props) => props.zIndex || "1"};
  width: 100%;
`;

const Header = ({ position, backposition, title }) => {
  return (
    <ServiceHeader position={position}>
      <div className="header__inner">
        <div clasName="sidebtn__logo">
          <Link to="/nowriter">
            <SideBtn></SideBtn>
          </Link>
          <Link to="/">
            <Logo backposition={backposition} />
          </Link>
        </div>
        <div clasName="applybtn__search">
          <span>{title}</span>
          <RoundBtn>시작하기</RoundBtn>
          <Search></Search>
        </div>
      </div>
    </ServiceHeader>
  );
};

export { ServiceHeader, Logo };
export default Header;
