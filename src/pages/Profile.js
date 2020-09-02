// 프로필 페이지
import React, { Component } from "react";
import Header from "components/Header/Header";
// import ProfileImg from "components/NavWriter";
import { Link } from "react-router-dom";
import {
  TitBloger,
  WrapProfile,
  CoverBloger,
  DescBloger,
  BlogCount,
  TxtG,
  NumCount,
  WrapProfileBtn,
  BtnType,
  BtnType2,
  MoreControl,
  CardBanner,
} from "styles/StyledComponentAll";
// import { ProfileImgURL } from "images/ImgAll";
import { USERPROFILE_URL } from "config";
import Axios from "axios";
import styled from "styled-components";

const ProfileImgURL = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  float: right;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProfileInfo: [],
    };
  }

  ProfileInfoApi = () => {
    Axios.get(`${USERPROFILE_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        return this.setState({ dataProfileInfo: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.ProfileInfoApi();
  }
  render() {
    const { dataProfileInfo } = this.state;
    const profileImageText = dataProfileInfo.profileImage;
    const profileNameText = dataProfileInfo.nickName;
    const profileBio = dataProfileInfo.bio;
    return (
      <>
        <Header position="fixed" title="프로필"></Header>
        <header>
          <CoverBloger coverBg="#f8f8f8" coverHeight="100vh">
            <WrapProfile>
              <ProfileImgURL
                style={{ width: "100px", height: "100px" }}
                src={profileImageText}
              />
              <div className="wrap__profile__desc">
                <TitBloger>{profileNameText}</TitBloger>
                <DescBloger>{profileBio}</DescBloger>
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
          </CoverBloger>
        </header>
        <div className="wrap__contents">
          <CardBanner></CardBanner>
        </div>
      </>
    );
  }
}
export default Profile;
