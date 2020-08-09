import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

// 작가 프로필 이름
const LinkAuthorName = styled.a`
  display:block;
  font-size:28px;
  overflow:hidden;
  width:588px;
  font-weight:300;
  font-family:'Noto Sans KR';
  white-space:nowrap;
`;

// 작가 프로필 이미지
const LinkAuthorImg = styled.a`
  position:absolute;
  top:-22px;
  right:0;
  img{
    border-radius:100px;
    width:100px;
    height:100px;
  }
`;

// 구독자
const InfoSubs = styled.span`
  span{
    font-size:14px;
    font-family:'Noto Sans KR';
    color:#666;
    font-weight:300;
  }
`;

// 구독하기 버튼
const BtnFollow = styled.button`
  width:80px;
  border:1px solid #00c3bd;
  border-radius:40px;
  font-size:13px;
  font-family:'Noto Sans KR';
  color:#00c3bd;
  background:#fff;
  height:32px;
`;

const AuthorProfile = () => {
    return (
        <>
        <div className="wrap__author" style={{padding:'0 0 80px', backgroundColor:'#fbfbfb', position:'relative', zIndex:'10'}}>
              <div className="inner__author" style={{position:'relative', width:'700px', margin:'0 auto', padding:'31px 0'}}>
                {/* 작가 프로필 */}
                <div className="author__profile">
                  <strong>
                    {/* 작가 프로필 이름 */}
                    <Link to="/profile">
                      <LinkAuthorName>spielraummm</LinkAuthorName>
                      </Link>
                  </strong>
                  {/* 작가 프로필 이미지 */}
                  <Link to="/profile">
                    <LinkAuthorImg>
                      <img src="http://img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg" alt="작가 프로필 이미지" />
                    </LinkAuthorImg>
                    </Link>
                </div>
                {/* 작가 상세 소개 */}
                <div className="author__desc" style={{fontSize:'13px', color:'#666'}}>
                  <Link to="/profile">
                    <div className="author__book" style={{fontFamily:'Noto Sans KR', fontSize:'13px', color:'#959595', fontWeight:'300', display:'inline-block', marginBottom:'20px'}}>
                      <span className="txt__author__book">spielraummm</span>
                    </div>
                    {/* */}
                    <p className="txt__desc" style={{color:'#959595',fontWeight:'300', lineHeight:'2'}}>'달' 입니다. 때로는 삐딱한 시선으로, 때로는 달달한 시선으로 누군가는 공감할 수 있는 삶을 이야기합니다. 책을 읽고 여행을 다니며 떠오르는 단상을 글과 그림으로 옮기기도 합니다</p>
                  </Link>
                </div>
                {/* 구독자 */}
                <div className="wrap__subs" style={{marginTop:'34px', display:'flex', justifyContent:'space-between'}}>
                  <Link to ="/following">
                    <InfoSubs>
                      <span>구독자</span>
                      <span className="num__subs">0</span>
                    </InfoSubs>
                  </Link>
                  {/* 구독하기 버튼 */}
                  <span className="wrap__subs__btn">
                    <BtnFollow>구독하기</BtnFollow>
                  </span>
                </div>
              </div>
            </div>
            
        </>
    );
};

export default AuthorProfile;