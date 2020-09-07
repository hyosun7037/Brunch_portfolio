// 작가페이지
import React, { useState, useRef, useEffect } from "react";
import Header from "components/Header/Header";
import { Link } from "react-router-dom";

// import AuthorInfo from 'components/authorContents/AuthorInfo';
import AuthrorWriting from "components/authorContents/AuthrorWriting";
import {
  WrapProfile,
  TabContents,
  ScreenOut,
  CoverBloger,
  ProfileImg,
  TitBloger,
  AuthorName,
  TxtInfo,
  BlogCount,
  TxtG,
  NumCount,
  BtnType,
} from "styles/StyledComponentAll";
import AuthorInfo from "components/authorContents/AuthorInfo";
import Axios from "axios";
import { AUTHOR_URL } from "config";
import { AUTHOR_POSTS_URL } from "config";
import { USERPROFILE_URL } from "config";
import { COMMENT_URL } from "config";
const active = {
  color: "#333",
  borderColor: "#333",
};

const Author = () => {
  // console.log("작가페이지pk id ::: " + id);
  const [visible, setVisible] = useState(false);
  const ref1 = useRef(null); // 작가소개
  const ref2 = useRef(null); // 글
  const [profile, setProfile] = useState([]);
  const [follow, setFollow] = useState([]);
  const [profilePosts, setProfilePosts] = useState([]);

  const ClickIn = (ref1) => {
    setVisible(false); // true로 변경됨!
    console.log(ref1.target);
  };

  const ClickIn2 = (ref2) => {
    setVisible(true); // true로 변경됨!
    console.log(ref2.target);
  };

  // 나중에 작가 pk 붙이기
  // const ProfileInfoApi = () => {
  //   Axios.get(`${USERPROFILE_URL}`, {
  //     headers: {
  //       Authorization: localStorage.getItem("Authentication"),
  //     },
  //   })
  //     .then((res) => {
  //       return setDataProfileInfo({ dataProfileInfo: res.data });

  //     })
  //     .catch((res) => console.log(res));
  // };

  // 작가
  const ProfileInfoApi = () => {
    Axios.get(`${AUTHOR_URL}/110`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    }).then((res) => {
      console.log(res);
      console.log("작가 프로필 정보::: " + res.data.user.nickName);
      return setProfile(res.data.user), setFollow(res.data);
    });
  };

  const ProfilePostsApi = () => {
    Axios.get(`${AUTHOR_POSTS_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    }).then((res) => {
      console.log(res);
      console.log("작가 글 목록::: " + res.data);
      return setProfilePosts(res.data);
    });
  };

  useEffect(() => {
    ProfileInfoApi();
    ProfilePostsApi();
    document.addEventListener("click", active);
    return () => {
      document.removeEventListener("click", active);
    };
  }, []);

  return (
    <div>
      <Header position="fixed" />
      <input className="profileId" type="hidden" value="작가이름" />
      <input className="profileUserId" type="hidden" value="작가 userId" />
      <input className="profileUserName" type="hidden" value="작가 userName" />
      <nav>
        <CoverBloger coverHeight="200px" />
        <WrapProfile>
          <ProfileImg>
            <img src={profile.profileImage} alt="프로필 이미지" />
          </ProfileImg>
          <div className="wrap__profile__desc">
            <TitBloger>{profile.nickName}</TitBloger>
            {/* 소속, 작가이름 */}
            <AuthorName>
              <ScreenOut>소속</ScreenOut>
              <TxtInfo>{profile.nickName}</TxtInfo>
            </AuthorName>
            {/* 구독자, 관심작가, 구독하기 */}
            <dd
              className="blog__count has__keyword"
              style={{
                margin: "0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BlogCount>
                <dd style={{ margin: "0" }}>
                  <TxtG>구독자</TxtG>
                  <NumCount>{follow.followerCount}</NumCount>
                </dd>
                <dd>
                  <Link to="/" className="link__count">
                    <TxtG>관심작가</TxtG>
                    <NumCount>{follow.followingCount}</NumCount>
                  </Link>
                </dd>
              </BlogCount>
              <BtnType type="button">구독하기</BtnType>
            </dd>
          </div>
        </WrapProfile>
        {/* 작가프로필 하위메뉴 */}
        <TabContents>
          <ScreenOut>작가프로필 하위메뉴</ScreenOut>
          <ul className="list__Tab">
            <li>
              <button onClick={ClickIn} ref={ref1}>
                <span>작가소개</span>
              </button>
            </li>
            <li>
              <button onClick={ClickIn2} ref={ref2}>
                <span>글 {profilePosts.length}</span>
              </button>
            </li>
          </ul>
        </TabContents>
      </nav>
      {!visible && <AuthorInfo />}
      {/* {visible && <AuthrorWriting />} */}
      {visible && <AuthrorWriting />}
    </div>
  );
};

export default Author;
