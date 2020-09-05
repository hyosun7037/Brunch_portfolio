import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavWriter from "components/NavWriter";

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
  const [visible, setVisible] = useState(false);
  const menuToggle = useRef(null);
  const ref = useRef(null);

  // 클릭하면 실행 (메뉴 열림)
  const ClickIn = (ref) => {
    setVisible(true); // true로 변경됨!
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
      <ServiceHeader position={position}>
        <div className="header__inner">
          <div className="sidebtn__logo">
            <SideBtn ref={ref} onClick={ClickIn}></SideBtn>
            <Link to="/">
              <Logo backposition={backposition} />
            </Link>
          </div>
          <div className="applybtn__search">
            <span>{title}</span>
            {/* <RoundBtn style={{marginRight:"10px"}}>저장</RoundBtn> */}
          </div>
        </div>
      </ServiceHeader>
      {visible && <NavWriter ref={menuToggle} />}
      {!visible && <></>}
    </>
  );
};

export { RoundBtn };
export default Header;
