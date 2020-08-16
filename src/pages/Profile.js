// 프로필 페이지
import React from "react";
import Header from "components/Header/Header";
// import ProfileImg from "components/NavWriter";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoverBloger = styled.div`
  height:${(props) => props.coverHeight || "320px"};
  background-color: ${(props) => props.coverBg || "#f8f8f8"};
`;

const WrapProfile = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto 94px;
  padding: 35px 0 0;
`;


const TitBloger = styled.strong`
  display: block;
  padding-right: 170px;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
`;

const DescBloger = styled.pre`
  font-size: 13px;
  line-height: 20px;
  color: #959595;
  word-break: break-word;
  white-space: pre-line;
  margin-bottom: -1px;
  font-family: "Noto sans KR";
  margin: 0;
`;

const BlogCount = styled.dl`
  display: flex;
  overflow: hidden;
  padding: 22px 200px 0 0;
  font-size: 12px;
  color: #959595;
`;

const TxtG = styled.em`
  display: block;
  font-style: normal;
  font-weight: normal;
`;

const NumCount = styled.span`
  margin-top: -2px;
  font-weight: 300;
  font-size: 20px;
  color: #959595;
`;

const WrapProfileBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 2px;
  height: 36px;
  padding-right: 19px;
`;

const BtnType = styled.button`
  width: 100px;
  margin-left: 8px;
  padding: 0;
  display: inline-block;
  min-width: 80px;
  height: 32px;
  border: 1px solid #00c3bd;
  border-radius: 20px;
  font-size: 13px;
  line-height: 32px;
  color: #00c3bd;
  background-color: #fff;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;

const BtnType2 = styled(BtnType)`
  background-color: #00c3bd;
  color: #fff;
`;

const MoreControl = styled.div`
  position: absolute;
  top: 0;
  right: -12px;
`;

const CardBanner = styled.div`
  overflow:hidden;
  width:700px;
  height:100px;
  margin:0 auto;
`;

const ProfileImg = styled.div`
  overflow: hidden;
  position: absolute;
  top: -50px;
  right: 0;
  width: 100px;
  height: 100px;
  background-position: -250px -80px;
  border-radius: 100px;
`;

const Profile = () => {
  return (
    <>
      <Header position="fixed" title="프로필"></Header>
      <header>
        <CoverBloger coverBg="#f8f8f8" coverHeight="320px" />
        <WrapProfile>
        <ProfileImg >
          <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg" alt="프로필 이미지" />
        </ProfileImg>
          <div className="wrap__profile__desc">
            <TitBloger>써니</TitBloger>
            <DescBloger>써니의 브런치입니다.</DescBloger>
            <BlogCount>
              <dd style={{ margin: "0" }}>
                <TxtG>구독자</TxtG>
                <NumCount>0</NumCount>
              </dd>
              <dd>
                <Link to="/" className="link__count">
                  <TxtG>관심작가</TxtG>
                  <NumCount>0</NumCount>
                </Link>
              </dd>
            </BlogCount>
          </div>
          <WrapProfileBtn>
            <Link to="/write">
              <BtnType type="button">글쓰기</BtnType>
            </Link>
            <Link to="/profile_update">
              <BtnType2 type="button">프로필 편집</BtnType2>
            </Link>
            <MoreControl></MoreControl>
          </WrapProfileBtn>
        </WrapProfile>
      </header>
      <div className="wrap__contents">
        <CardBanner>
        </CardBanner>
      </div>
    </>
  );
};

export {CoverBloger, ProfileImg, BlogCount, TxtG, NumCount, BtnType};
export default Profile;
