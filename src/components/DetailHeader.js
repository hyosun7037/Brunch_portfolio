import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: ${(props) => props.sideBtnColor || "white"};
  border: none;
  margin-right: 11px;
  cursor: pointer;
  background-position: ${(props) => props.sideBtnposition || "0 -30px"};
`;

const ServiceHeader = styled.div`
  position: ${(props) => props.position || "relative"};
  z-index: ${(props) => props.zIndex || "1"};
  width: 100%;
`;

const WrapCoverType = styled.div`
  position: absolute;
  z-index: 10;
  left: 250px;
  right: 250px;
  color: #fff;
  text-align: center;
  font-weight: 100;
`;

const TxtArticle = styled.span`
  display: inline-block;
  margin-right: 5px;
  margin-top: 1px;
  padding: 0 6px 0 7px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 9px;
  font-size: 11px;
  font-family: "Noto sans KR", sans-serif;
  color: #fff;
  vertical-align: center;
`;

const LikeBtn = styled.span`
  background-image: url("http://t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  background-position: -60px -90px;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  display: inline-block;
`;

const LikeCount = styled.span`
  margin-left: 3px;
  margin-top: -1px;
  color: #fff;
  font-size: 13px;
  vertical-align: text-top;
`;

const CommnetBtn = styled(LikeBtn)`
  background-position: -30px -120px;
`;

const CommnetCount = styled(LikeCount)``;

const TitType = styled.span`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const img__ico__wrap = {
  marginLeft: "15px",
};

const DetailHeader = ({
  position,
  backposition,
  title,
  sideBtnposition,
  sideBtnColor,
  count,
}) => {
  return (
    <ServiceHeader position={position}>
      <div className="header__inner">
        <div clasName="sidebtn__logo">
          <Link to="/nowriter">
            <SideBtn
              sideBtnposition={sideBtnposition}
              sideBtnColor={sideBtnColor}
            ></SideBtn>
          </Link>
          <Link to="/">
            <Logo backposition={backposition} />
          </Link>
        </div>
        <div clasName="applybtn__search">
          <span>{title}</span>
        </div>
        <WrapCoverType>
          <TxtArticle>매거진</TxtArticle>
          <Link to="/" className="link__type">
            <TitType>스물아홉에 쓰는 조금 이른 자서전</TitType>
          </Link>
        </WrapCoverType>
        <div>
          <Link to="/like" className="img__ico__wrap" style={img__ico__wrap}>
            <LikeBtn></LikeBtn>
            <LikeCount>{count}11</LikeCount>
          </Link>
          <Link to="/comment" className="img__ico__wrap" style={img__ico__wrap}>
            <CommnetBtn></CommnetBtn>
            <CommnetCount>{count}11</CommnetCount>
          </Link>
        </div>
      </div>
    </ServiceHeader>
  );
};

export { ServiceHeader, Logo };
export default DetailHeader;
