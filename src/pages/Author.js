// 작가페이지
import React from 'react';
import Header from 'components/Header/Header';
import { Link } from 'react-router-dom';

// import AuthorInfo from 'components/authorContents/AuthorInfo';
import AuthrorWriting from 'components/authorContents/AuthrorWriting';
import { WrapProfile, TabContents, ScreenOut, CoverBloger, ProfileImg, TitBloger, AuthorName, TxtInfo, BlogCount, TxtG, NumCount, BtnType} from 'styles/StyledComponentAll';


const on = {
    borderColor:'#333',
    color:'#333'
}

const Author = () => {
    return (
        <div>
            <Header position="fixed" />
            <input className="profileId" type="hidden" value="작가이름"/>
            <input className="profileUserId" type="hidden" value="작가 userId" />
            <input className="profileUserName" type="hidden" value="작가 userName" />
            <nav>
                <CoverBloger coverHeight="200px"/>
                <WrapProfile>
                    <ProfileImg>
                        <img src="//img1.daumcdn.net/thumb/C100x100.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg" alt="프로필 이미지" />
                    </ProfileImg>
                    <div className="wrap__profile__desc">
                        <TitBloger>슈필라움</TitBloger>
                        {/* 소속, 작가이름 */}
                        <AuthorName>
                            <ScreenOut>소속</ScreenOut>
                            <TxtInfo>슈필라움</TxtInfo>
                        </AuthorName>
                        {/* 구독자, 관심작가, 구독하기 */}
                        <dd className="blog__count has__keyword" style={{margin:'0', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
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
                            <BtnType type="button">구독하기</BtnType>
                        </dd>
                    </div>
                </WrapProfile>
                {/* 작가프로필 하위메뉴 */}
                <TabContents>
                    <ScreenOut>작가프로필 하위메뉴</ScreenOut>
                    <ul className="list__Tab">
                        <li className="on">
                            <Link to="/info" className="link__tab" style={on}>
                                <span className="txt__tab">작가소개</span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/info" className="link__tab">
                                <span className="txt__tab">글 10</span>
                            </Link> 
                        </li>
                    </ul>
                </TabContents>
            </nav>
            {/* <AuthorInfo /> */}
            <AuthrorWriting />
        </div>
    );
};

export default Author;