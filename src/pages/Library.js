// 작가의 서재
import React from 'react';
import Header from 'components/Header/Header';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
  &::before{
    position:absolute;
    top:0;
    z-index:100;
    display:block;
    width:50px;
    height:129px;
    left:50%;
    margin-left:-522px;
    content:'';
    background-image:url("http://img1.daumcdn.net/thumb/C108x270/?fname=http://t1.daumcdn.net/brunch9/static/images/pcrtn/bg_library.png");
    background-size:cover;
    }
`;

const LibraryMenuWrap = styled.div`
    position:relative;
    width:960px;
    margin:0 auto;
    padding-bottom:25px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

const TitLibrary = styled.h2`
    margin-left:20px;
    font-size:28px;
    font-weight:400;
    letter-spacing:-1.8px;
    line-height:36px;
    color:#888;
    font-family:'Nanum Myeongo', serif;
`;

const TxtMenu = styled.span`
  color:#666;
  font-size:14px;
  font-family:'Noto Sans KR', sans-serif;
`;

const MenuLibrary = styled.div`
  ul{
      display:flex;
      justify-content: space-around;
      align-items:center;
      font-family:'Noto Sans KR', sans-serif;
      li{
        margin-right:10px;
        font-weight:200;
      }
  }
`;

const TitLibraryLink = styled.h3`
    display:block;
    width:960px;
    height:30px;
    margin:0 auto;
    font-size:14px;
    color:#222;
    font-family:'Noto Sans KR', sans-serif;
    font-weight:300;
    a{
        display:inline-block;
        height:100%;
        padding:6px 20px 0 0 ;
        letter-spacing:-.3px;
        box-sizing:border-box;
    }
`;

const ICoArr = styled.span`
    display:inline-block;
    width:7px;
    height:12px;
    margin:4px 0 0 6px;
    background-position:-130px -710px;
    background-image:url('http://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v1_191224.png');
`;

const WrapLIst = styled.ul`
    display:flex;
    width:960px;
    margin:0 auto;
    padding-left:0;
    font-family:'Noto Sans KR', sans-serif;
    color:#333;
    font-weight:300;
`;

const RecentList = styled.li`
    display:flex;
    width:450px;
    margin-right: ${(props) => props.RecentListMarginR || "0px"};
    padding:19px 0 20px 0;
    overflow:hidden;
    border-bottom:1px solid #eee;
    font-family:'Noto Sans KR', sans-serif;
    strong{
        font-weight:400;
        display:block;
        font-size:16px;
        line-height:30px;
        letter-spacing:-1px;
    }
`;


const DescCommon = styled.span`
    max-height:41px;
    padding-top:1px;
    line-height:20px;
    font-size:13px;
    color:#666;
    height:41px;
`;

const Library = () => {
    return (
        <Container>
            <Header />
            <div className="wrap_library_menu library_menu_bar">
                {/* 메인 */}
                <LibraryMenuWrap>
                    <TitLibrary>
                        <strong>글 읽는 서재에서</strong>
                        <br />
                        작품을 언제든 이어 읽을 수 있어요!
                    </TitLibrary>
                    {/* 최근 본 글, 라이킷한 글 메뉴 */}
                    <MenuLibrary>
                        <ul>
                            <li>
                                <Link to="/최근 본 글">
                                    <TxtMenu>최근 본 글</TxtMenu>
                                </Link>
                            </li>
                            <li>
                                <Link to="/라이킷한 글">
                                    <TxtMenu>라이킷한 글</TxtMenu>
                                </Link>
                            </li>
                        </ul>
                    </MenuLibrary>
                </LibraryMenuWrap>
            </div>
            {/* 최근 본 글 내용 */}
            <div className="wrap_recently library_recently">
                <TitLibraryLink>
                    <Link to ="/최근 본 글 상세">
                        최근 본 글
                        <ICoArr />
                    </Link>
                </TitLibraryLink>
                <WrapLIst>
                    {/* 최근 본 글 1 */}
                    <RecentList RecentListMarginR="60px">
                        <div className="cont__common" style={{width:'960px', margin:'0 auto'}}>
                            <Link to="/최근 본 글1">
                                <strong className="tit__subject">자기소개서</strong>
                                <DescCommon>
                                    <em className="sub__tit__div">
                                        셀린을 소개합니다.
                                    </em>
                                    날 한 단어로 정의하면 뭘까? 뜬금없이 물어도 답해 줄 것 같은 사람들에게 물었다.        
                                     강물, 귀욤, 나비, 담담, 사랑스러움, 섹시2, 시크, 열정2, 온화, 자유로운 영혼2, 화끈, calm, caring person, discreet, dreamer.         
                                     내가 따뜻하고(온화, caring person) 차분하며(강물, 담담,                                      
                                </DescCommon>
                            </Link>
                            {/* 여기부터 html 구조짜기!! */}
                            <div className="append__common"></div>
                        </div>
                    </RecentList>
                    {/* 최근 본 글 2 */}
                    <RecentList>
                        <div className="cont__common" style={{width:'960px', margin:'0 auto'}}>
                            <Link to="/최근 본 글1">
                                <strong className="tit__subject">자기소개서</strong>
                                <DescCommon>
                                    <em className="sub__tit__div">
                                        셀린을 소개합니다.
                                    </em>
                                    날 한 단어로 정의하면 뭘까? 뜬금없이 물어도 답해 줄 것 같은 사람들에게 물었다.        
                                     강물, 귀욤, 나비, 담담, 사랑스러움, 섹시2, 시크, 열정2, 온화, 자유로운 영혼2, 화끈, calm, caring person, discreet, dreamer.         
                                     내가 따뜻하고(온화, caring person) 차분하며(강물, 담담,                                      
                                </DescCommon>
                            </Link>
                            {/* 여기부터 html 구조짜기!! */}
                            <div className="append__common"></div>
                        </div>
                    </RecentList>
                </WrapLIst>
            </div>
            <div className="wrap_likeit library_likeit"></div>
        </Container>
    );
};

export default Library;