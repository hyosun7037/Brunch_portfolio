import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FootBrunch = styled.div`
  width: 100%;
  height: 320px;
  background-color: #101010;
  padding-top: 48px;
`;

const InnerFoot = styled.div`
  position: relative;
  width: 960px;
  margin: 0 auto;
`;

const WrapCorp = styled.div`
  padding-top: 23px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
`;

const IcoBrunchLogo = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  margin-bottom: 22px;
  background-position: -320px -70px;
  background-image: url("http://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v8_181004_v2.png");
`;

const TxtQuo = styled.q`
  width: 184px;
  height: 37px;
  margin: 0 0 4px;
  background-position: 0 -319px;
  text-indent: -9999px;
  display: block;
  margin: 2px 88px 0 0;
  background-image: url("http://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v5_181004_v2.png");
`;

const TxtBy = styled.span`
  width: 68px;
  height: 16px;
  margin: 10px 0;
  background-position: -190px -320px;
  display: block;
  font-size: 11px;
  opacity: 0.8;
  background-image: url("http://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v5_181004_v2.png");
`;

const ListInfoUl = styled.ul`
  padding: 0;
  font-weight: 300;
  font-size: 13px;
  color: #d9d9d9;
  width: 200px;
`;

const ListInfoLi = styled.li`
  width: 159px;
  margin-bottom: 16px;
  line-height: 16px;
`;

const txt__copyright = {
  margin: "2px 0 0 -1px",
};

const ico__brunch = {
  width: "20px",
  height: "22px",
  backgroundPosition: "-260px -100px",
};

const link__corp = {
  fontSize: "11px",
  fontStyle: "italic",
  fontFamily: "Georgia,sans-serif",
  color: "#fff",
  opacity: ".5",
  textDecoration: "none",
};

const ico__ios = {
  backgroundPosition: "-290px -100px",
  width: "22px",
  height: "20px",
};

const Footer = () => {
  return (
    <FootBrunch>
      <InnerFoot>
        <div
          className="wrap__info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "35px",
          }}
        >
          <div className="txt__info">
            <IcoBrunchLogo />
            <TxtQuo>You can make anything by writing</TxtQuo>
            <TxtBy>C.S.Lewis</TxtBy>
          </div>
          <div className="wrap__list" style={{ display: "flex" }}>
            <ListInfoUl>
              <ListInfoLi>브런치 이용안내</ListInfoLi>
              <ListInfoLi>작가신청</ListInfoLi>
              <ListInfoLi>작가 지원 프로젝트</ListInfoLi>
              <ListInfoLi>제휴제안</ListInfoLi>
              <ListInfoLi>고객센터</ListInfoLi>
            </ListInfoUl>
            <ListInfoUl>
              <ListInfoLi>이용약관</ListInfoLi>
              <ListInfoLi>브런치 개인정보 처리방침</ListInfoLi>
              <ListInfoLi>카카오 개인정보 처리방침</ListInfoLi>
              <ListInfoLi>청소년 보호정책</ListInfoLi>
              <ListInfoLi>운영정책</ListInfoLi>
            </ListInfoUl>
            <ListInfoUl>
              <ListInfoLi>브런치팀</ListInfoLi>
              <ListInfoLi>브런치 카카오톡 채널</ListInfoLi>
              <ListInfoLi>카카오 인스타그램</ListInfoLi>
              <ListInfoLi>브런치 페이스북</ListInfoLi>
            </ListInfoUl>
          </div>
        </div>
        <WrapCorp>
          <small className="txt__copyright" style={txt__copyright}>
            <Link to="/" className="link__corp" style={link__corp}>
              @ kakao
            </Link>
          </small>
          <div>
            <ul className="list__download" style={{ display: "flex" }}>
              <li className="link__info">
                <Link to="/">
                  <span
                    className="ico__brunch ico__android"
                    style={ico__brunch}
                  >
                    안드로이드 앱 다운로드
                  </span>
                </Link>
              </li>
              <li className="link__info" style={{ marginLeft: "25px" }}>
                <Link to="/">
                  <span className="ico__brunch ico__ios" style={ico__ios}>
                    아이폰 앱 다운로드
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </WrapCorp>
      </InnerFoot>
    </FootBrunch>
  );
};

export default Footer;
