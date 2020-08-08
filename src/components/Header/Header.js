import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, Redirect, Route } from "react-router-dom";
import NavWriter from "../NavWriter";
import { Drawer, Button } from "antd";

const SearchBtn = styled.button`
  margin: 0 0 0 16px;
  display: inline-block;
  width: 22px;
  height: 19px;
  background-position: ${(props) => props.searchposition || "-30px 0"};
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const RoundBtn = styled.button`
  border-radius: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin-right: 11px;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  font-weight: 300;
  font-family: "Noto Sans KR";
  font-size: 17px;
`;

const ServiceHeader = styled.div`
  position: ${(props) => props.position || "relative"};
  z-index: ${(props) => props.zIndex || "1"};
  width: 100%;
  height: ${(props) => props.height || "inherit"};
`;

const Header = ({ position, backposition, title, height, searchposition }) => {
  const [visible, setVisible] = useState(false);
  const toggle = useRef(null);
  const menuToggle = useRef(null);

  // const [state, setState] = useState({visible:false});

  const ClickIn = () => {
    setVisible(!visible);
  };

  const ClickOut = (ref) => {
    useEffect(() => {
      const clickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log(e.target);
          console.log(ref.current);
          // ref.current = menuToggle;
          // ref.current = menuToggle;
          setVisible(!visible);
        }
      };
      document.addEventListener("mousedown", clickOutside);
      return () => {
        document.removeEventListener("mousedown", clickOutside);
      };
    }, [ref]);
  };

  ClickOut(toggle);

  return (
    <>
      <ServiceHeader position={position} height={height}>
        <div className="header__inner">
          <div clasName="sidebtn__logo">
            <Link to="/">
              <SideBtn ref={toggle} onClick={ClickIn}></SideBtn>
            </Link>
            <Link to="/">
              <Logo backposition={backposition} />
            </Link>
          </div>
          <HeaderTitle>{title}</HeaderTitle>
          <div className="applybtn__search">
            <Link to="/search">
              <SearchBtn searchposition={searchposition}></SearchBtn>
            </Link>
          </div>
        </div>
      </ServiceHeader>
      {visible && <NavWriter ref={menuToggle} />}
    </>
  );
};

// export {ServiceHeader, Logo, RoundBtn, SearchBtn };
export default Header;
