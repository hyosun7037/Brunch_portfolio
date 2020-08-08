import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const NavContentsMenu = styled.li`
  font-size: 15px;
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

const NavContentMenuLine = styled.li`
  margin: 30px auto 32px;
  padding: 0;
  display: block;
  width: 140px;
  border-bottom: 1px solid #f1f1f1;
`;

const NavLogo = styled.div`
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/logo_service2_v1.png");
  background-color: #f8f8f8;
  width: 48px;
  height: 48px;
  margin: 40px auto 9px;
  background-position: -1px 54px;
`;

const ProfileImg = styled(NavLogo)`
  width: 60px;
  height: 60px;
  background-image: url("//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg"); /*임시설정, 나중에 수정 예정*/
  border-radius: 60px;
  background-position: 0;
`;

const RoundBtn = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 16px;
  font-size: 13px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  color: #00c3bd;
  border: 1px solid #00c3bd;
  margin-top: 24px;
  background-color: #fff;
  cursor: pointer;
`;

const RoundSmallBtn = styled(RoundBtn)`
  width: 80px;
  height: 32px;
  margin-left: 4px;
`;

const GrayBtn = styled(RoundSmallBtn)`
  border: 1px solid #bbb;
  color: #959595;
`;

const ProfileName = styled.strong`
  width: 212px;
  font-size: 14px;
  color: #333333;
  white-space: nowrap;
  vertical-align: bottom;
`;

const ProfileUrl = styled.p`
  text-align: center;
  font-size: 12px;
  color: #959595;
  font-family: Georgia;
  font-style: italic;
  white-space: nowrap;
  vertical-align: top;
`;

const NavWriter = () => {
  // a 태그 나중에 수정예정
  return (
    <div className="nav__Wrap">
      <div className="nav__Header">
        <Link to="/profile">
          <ProfileImg></ProfileImg>
          <ProfileName>써니</ProfileName>
          <ProfileUrl>brunch.co.kr/@haha7037</ProfileUrl>
        </Link>
        <Link to="/write">
          <RoundSmallBtn>글쓰기</RoundSmallBtn>
        </Link>
        {/* <RoundSmallBtn>작가신청</RoundSmallBtn> */}
      </div>

      <div className="nav__Main">
        <ul className="nav__Contents">
          <Link to="/">
            <NavContentsMenu>내 브런치</NavContentsMenu>
          </Link>
          <Link to="/">
            <NavContentsMenu>작가의 서랍</NavContentsMenu>
          </Link>
          <NavContentMenuLine /> {/*중간라인, 나중에 수정할 예정*/}
          <Link to="/">
            <NavContentsMenu>브런치 홈</NavContentsMenu>
          </Link>
          <Link to="/now">
            <NavContentsMenu>브런치 나우</NavContentsMenu>
          </Link>
          <Link to="/">
            <NavContentsMenu>글 읽는 서재</NavContentsMenu>
          </Link>
          <Link to="/">
            <NavContentsMenu>피드</NavContentsMenu>
          </Link>
        </ul>
        <div className="nav__Footer">
          <GrayBtn>설정</GrayBtn>
          <Link to="/login">
            <GrayBtn>로그아웃</GrayBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { ProfileName };
export default NavWriter;
