import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import NavWriter from "components/NavWriter";
import NavNonmember from "components/NavNonmem";
import NavWriter from "components/NavWriter";
import { RoundBtn } from "./WriteHeader";

// import NavWriter from "components/NavWriter";

const SearchBtn = styled.button`
  margin: 0 0 0 16px;
  display: ${(props) => props.searchDisplay || "inline-block"};
  width: 22px;
  height: ${(props) => props.SearchHeight || "19px"};
  background-position: ${(props) => props.searchposition || "-30px 0"};
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
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

const Header = ({
  position,
  backposition,
  title,
  height,
  menuBtn,
  searchposition,
  SearchHeight,
  searchDisplay,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  let loggedIn = localStorage.Authentication;

  // 클릭하면 실행 (메뉴 열림)
  const ClickIn = () => {
    setVisible(true); // true로 변경됨!
  };

  // 해당영역 외부 클릭시 Nav 창이 닫힘
  const clickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      console.log("clickOutside::: 작동");
      console.log("ref.current :::" + ref.current);
      setVisible(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    alert("작가님, 안녕히 가세요:)");
    console.log("로그아웃됨");
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
    return () => {
      document.removeEventListener("click", clickOutside, true);
    };
  });

  return (
    <>
      <ServiceHeader position={position} height={height}>
        <div className="header__inner">
          <div className="sidebtn__logo">
            <SideBtn onClick={ClickIn} ref={ref}></SideBtn>
            <Link to="/">
              <Logo backposition={backposition} />
            </Link>
          </div>
          <HeaderTitle>{title}</HeaderTitle>
          <div className="applybtn__search">
            <Link to="/search">
              {loggedIn === undefined ? (
                <></>
              ) : (
                <Link to="/login">
                  <RoundBtn onClick={logout}>로그아웃</RoundBtn>
                </Link>
              )}
              <SearchBtn
                searchposition={searchposition}
                SearchHeight={SearchHeight}
                searchDisplay={searchDisplay}
              ></SearchBtn>
            </Link>
          </div>
        </div>
      </ServiceHeader>
      {/* 이중 삼항 연산자 때문에 로그아웃 구현이 안됨 오류 해결하기! */}
      {loggedIn === undefined ? (
        visible ? (
          <NavNonmember />
        ) : (
          <></>
        )
      ) : visible ? (
        <NavWriter />
      ) : (
        <></>
      )}

      {/* {loggedIn === undefined ? <NavNonmember /> : <NavWriter> */}
    </>
  );
};

export { ServiceHeader, Logo, SideBtn };
export default Header;
