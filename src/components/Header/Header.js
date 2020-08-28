import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import NavWriter from "components/NavWriter";
import NavNonmember from "components/NavNonmem";
import NavWriter from "components/NavWriter";

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
  searchposition,
  SearchHeight,
  searchDisplay,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.Authentication);
    console.log(setToken);
  }, []);

  // 클릭하면 실행 (메뉴 열림)
  const ClickIn = (ref) => {
    setVisible(true); // true로 변경됨!
    console.log(ref.target);
  };

  const clickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
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
            <SideBtn ref={ref} onClick={ClickIn}></SideBtn>
            <Link to="/">
              <Logo backposition={backposition} />
            </Link>
          </div>
          <HeaderTitle>{title}</HeaderTitle>
          <div className="applybtn__search">
            <Link to="/search">
              <SearchBtn
                searchposition={searchposition}
                SearchHeight={SearchHeight}
                searchDisplay={searchDisplay}
              ></SearchBtn>
            </Link>
          </div>
          {/* <button onClick={getToken}>로그인테스트</button> */}
        </div>
      </ServiceHeader>
      {/* {token === "" ? <NavNonmember /> : <NavWriter />} */}
      {token === "" ? <NavWriter /> : <NavNonmember />}
      {/* {visible && <NavWriter/>} */}
      {/* {visible && <NavNonmember />} */}
      {visible && <></>}
      {!visible && <></>}
    </>
  );
};

export { ServiceHeader, Logo, SideBtn };
export default Header;
