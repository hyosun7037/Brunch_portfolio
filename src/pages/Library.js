// 작가의 서재
import React from 'react';
import Header from 'components/Header/Header';
import { Link } from 'react-router-dom';
import {IcoLikeitClip, Container, LibraryMenuWrap, TitLibrary, TxtMenu, MenuLibrary, TitLibraryLink, ICoArr, WrapLIst, RecentList, DescCommon } from 'styles/StyledComponentAll';

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
                    <div className="flexBox">
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
                            <Link to="/최근 본 글2">
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
                    </div>
                    {/* 최근 본 글 3 */}
                    <div className="flexBox">
                    <RecentList>
                        <div className="cont__common" style={{width:'960px', margin:'0 auto'}}>
                            <Link to="/최근 본 글3">
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
                    {/* 최근 본 글 4 */}
                    <RecentList>
                        <div className="cont__common" style={{width:'960px', margin:'0 auto'}}>
                            <Link to="/최근 본 글4">
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
                    </div>
                </WrapLIst>
            </div>
            <div className="wrap__likeit library_likeit" style={{ position:"relative", width:'960px', margin:"0 auto" }}>
                <div className="inner__likeit">
                    <IcoLikeitClip />
                    <h2 className="tit__lib">
                        <strong>당신이 좋아한 글을</strong>
                        <br />
                        다시 꺼내 읽어보세요.
                    </h2>
                    <h3 className="tit__lib__link">
                        <Link to="/글 목록">
                            라이킷한 글
                            <span className="ico__brunch ico__arr"></span>
                        </Link>
                    </h3>
                    <ul className="list__common list__like">
                        <li className="article__like__list">
                            <Link to ="/사용자 아이디">
                                <img src="이미지 넣기" alt="이미지" />
                            </Link>
                            <div className="cont__common">
                                <Link to="/사용자 아이디" className="link__feed">
                                    <stong className="tit__sub">회사 생활 중간은 가기 위한 필수 습관 세 가지</stong>
                                    <span className="desc__common">
                                        <em className="sub__tit__dividor">
                                            당연한 이야기이지만 생각보다 잘 지켜지지 않는 것들이 있다.
                                        </em>
                                        복싱을 배우러 가면 줄넘기부터 시키고, 주방 일을 시작하면 설거지부터 시작한다.
                                    </span>
                                </Link>
                                <div className="append__common">
                                    <span className="ico__by">by</span>
                                    <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Library;