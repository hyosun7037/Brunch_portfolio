// 프로필 페이지
import React from "react";
import Header from "components/Header/Header";
// import ProfileImg from "components/NavWriter";
import { Link } from "react-router-dom";
import {
  WrapProfile,
  CoverBloger,
  WrapProfileBtn,
  BtnType,
  BtnType2,
  MoreControl,
  CardBanner,
  TitBlogerTxtArea,
  TitBlogerTxtAreaSmall,
  BtnUpload,
} from "styles/StyledComponentAll";
import { ProfileImgURL } from "images/ImgAll";

const ProfileUpdata = () => {
  return (
    <>
      <Header position="fixed" title="프로필 편집"></Header>
      <header>
        <CoverBloger coverBg="#f8f8f8" coverHeight="100vh">
          <WrapProfile>
            <ProfileImgURL />
            <form
              style={{ position: "relative", cursor: "pointer" }}
              enctype="multipart/form-data"
              encoding="multipart/form-data"
              method="post"
            >
              <BtnUpload>
                <label for="profileImage">이미지 업로드</label>
                <input type="file" name="file" accept="image/*" />
              </BtnUpload>
            </form>
            <div className="wrap__profile__desc">
              {/* 이름 수정 */}
              <TitBlogerTxtArea
                name="username"
                placeholder="이름을 입력해주세요"
                maxlength="30"
              >
                슈필라움
              </TitBlogerTxtArea>
              {/* 소개 수정 */}
              <TitBlogerTxtAreaSmall
                placeholder="소개를 입력해주세요"
                maxlength="100"
              >
                슈필라움의 브런치입니다.
              </TitBlogerTxtAreaSmall>
            </div>
            <WrapProfileBtn>
              <Link to="/profile">
                <BtnType
                  type="button"
                  onClick={() => {
                    alert("편집 중인 내용을 저장하지 않고 나가시겠습니까?");
                  }}
                >
                  취소하기
                </BtnType>
              </Link>
              <Link to="/profile">
                <BtnType2 type="button">저장하기</BtnType2>
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
};
export default ProfileUpdata;
