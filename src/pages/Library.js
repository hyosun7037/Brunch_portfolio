// 작가의 서재
import React from 'react';
import Header from 'components/Header/Header';
import { Link } from 'react-router-dom';
import {AppendCommon, IcoBy, LinkThumbImg, TitLib, InnerLikeit, IcoLikeitClip, Container, LibraryMenuWrap, TitLibrary, TxtMenu, MenuLibrary, TitLibraryLink, ICoArr, WrapLIst, RecentList, DescCommon } from 'styles/StyledComponentAll';

const Library = () => {
    // 코드 정리하고 나중에 map으로 정리
    // 게시글은 component로 빼기
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
            <div className="wrap_recently library_recently" style={{ marginBottom:'100px' }}>
                <TitLibraryLink>
                    <Link to ="/최근 본 글 상세">
                        최근 본 글
                        <ICoArr />
                    </Link>
                </TitLibraryLink>
                <WrapLIst>
                    {/* 최근 본 글 1-2 */}
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
                    </RecentList>
                    </div>
                    {/* 최근 본 글 3-4 */}
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
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
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
                    </RecentList>
                    </div>
                </WrapLIst>
            </div>
            <div className="wrap__likeit library_likeit" style={{ background:'#f8f8f8' }}>
                <InnerLikeit>
                    <IcoLikeitClip style={{backgroundPosition:'-80px -710px'}}/>
                    <TitLib>
                        <strong>당신이 좋아한 브런치 글을</strong>
                        <br />
                        다시 꺼내 읽어보세요.
                    </TitLib>
                    <h3 className="tit__lib__link">
                            <TitLibraryLink>
                            <Link to="/글 목록">
                                라이킷한 글
                                <ICoArr />
                            </Link>
                            </TitLibraryLink>
                    </h3>
                    <WrapLIst>
                    {/* 최근 본 글 1-2 */}
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
                    </RecentList>
                    </div>
                    {/* 최근 본 글 3-4 */}
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
                            <AppendCommon>
                                <IcoBy IcoByColor="#bfbfbf">by</IcoBy>
                                <Link to="/사용자 아이디" className="link__bloger">용님</Link>
                            </AppendCommon>
                        </div>
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
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
                        <LinkThumbImg>
                            <Link to ="/썸네일 이미지">
                                <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4RlJ/image/TFAW7UfF_3_E3pm8GFv7l5uHOXU.jpg" alt="썸네일 이미지" />
                            </Link>
                        </LinkThumbImg>
                    </RecentList>
                    </div>
                </WrapLIst>
                </InnerLikeit>
            </div>
        </Container>
    );
};

export default Library;