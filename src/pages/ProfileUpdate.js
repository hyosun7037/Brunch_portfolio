import React from "react";
import Header from "components/Header/Header";
import ProfileImg from "components/NavWriter";
import { Link } from "react-router-dom";
import { CoverBloger, WrapProfile, TitBloger, DescBloger, BlogCount, TxtG, NumCount, WrapProfileBtn, BtnType, BtnType2, MoreControl, CardBanner } from "styles/StyledComponentAll";

const Profile = () => {
  return (
    <>
      <Header position="fixed"></Header>
      <header>
        <CoverBloger />
        <WrapProfile>
        <ProfileImg />
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
            <Link to="/profile">
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

export default Profile;
