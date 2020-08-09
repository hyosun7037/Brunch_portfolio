import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "styles/nav.css";

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

// const NavFooter = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   height: 139px;
//   /* margin: 40px 0 30px;
//   크기 줄였을 때 겹치는 부분 오류 나중에 수정하기 */
// `;

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
    <div className="nav__Wrap">
      <div className="nav__Header">
        <div className="nav__Logo"></div>
        <p className="nav__Text" style={NavText}>
          You can make anything <br />
          by writing
        </p>
        <p className="nav__SubText" style={NavSubText}>
          - C.S.Lewis -
        </p>
        <Link to="/"></Link>
        <NavStart>
          <Link to="/login">브런치 시작하기</Link>
        </NavStart>
      </div>
      <div className="nav__Main">
        <ul className="nav__Contents">
          <NavContentsMenu>
            <Link to="/">브런치 홈</Link>
          </NavContentsMenu>
          <NavContentsMenu>
            <Link to="/now">브런치 나우</Link>
          </NavContentsMenu>
        </ul>
      </div>
      <div className="nav__Footer" style={{ position: "absolute" }}>
        <NavFindById>
          <Link to="/">계정을 잊어버리셨나요?</Link>
        </NavFindById>
      </div>
    </div>
  );
};
export default NavNonmember;
