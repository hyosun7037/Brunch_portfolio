import React from "react";
import "../styles/main.css";
// import NavWriter from "../components/NavWriter";

const Main = () => {
  return (
    <>
      {/* <NavWriter></NavWriter> */}
      <div className="wrap__banner">
        <h2 className="screen__out">배너</h2>
        <ul className="list__banner">
          <li className="item__banner">
            <a href="#" className="link__banner">
              <img
                className="txt__banner"
                src="https://t1.daumcdn.net/section/oc/f105e8040e3b46de8492b4815a95092c"
                alt="텍스트배너"
              ></img>
            </a>
            {/* <a href="#">작은 배너</a> */}
          </li>
        </ul>
      </div>
      {/*탑배너영역*/}

      <div className="main__container">
        {/* header 영역, 나중에 컴포넌트로 분리할 예정*/}
        <header>
          <div className="service__header top">
            <div className="header__inner">
              <div clasName="sidebtn__logo">
                <button className="sidebtn"></button>
                <h1 className="logo"> </h1>
              </div>{" "}
              {/*햄버거버튼, 로고*/}
              <div clasName="applybtn__search">
                <button className="applybtn">작가신청</button>
                <button className="search"></button>
              </div>{" "}
              {/*버튼, 검색*/}
            </div>
          </div>
        </header>

        <main>
          {/* 인트로 브런치 텍스트 영역*/}
          <h2 className="screen__out">브런치 본문</h2>
          <div className="intro__brunch">
            <h3 className="tit__brunch">
              글이 작품이 되는 공간, 브런치
              <span className="ico__logo"></span>
            </h3>
            <p className="desc__brunch">
              <span className="part">
                브런치에 담긴 아름다운 작품을 감상해 보세요
              </span>
              <span className="part">그리고 다시 꺼내 보세요</span>
              <span className="part">서랍 속 간직하고 있는 글과 감성을.</span>
            </p>
          </div>

          {/* 에디터픽 영역*/}
          <h2 className="screen__out">에디터 픽</h2>
          <div className="editor__pic">
            <div className="wrap__slide">
              <ul className="list__slide">
                <li>
                  <div className="wrap__pic">
                    <div className="item__pic item__pic__type1"></div>
                    <div className="item__pic item__pic__type2__3">
                      <div className="item__pic item__pic__type2"></div>
                      <div className="item__pic item__pic__type3"></div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="wrap__pic wrap__pic2">
                    <div className="item__pic item__pic__type1"></div>
                    <div className="item__pic item__pic__type2"></div>
                    <div className="item__pic item__pic__type3"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 키워드 영역 */}
          <div className="keywords">
            <h3 className="txt__brunch tit__brunch">BRUNCH KEYWORD</h3>
            <p className="desc__brunch">
              <span className="txt__brunch">
                키워드로 분류된 다양한 글 모음
              </span>
            </p>
            <div className="keyword__list__wrap">
              <div className="keyword__list"></div>
            </div>
          </div>
        </main>

        {/*브런치 추천작가 영역*/}
        <div className="brunch__writers">
          <h3 className="txt__brunch tit__brunch">BRUNCH WRITERS</h3>
          <p className="desc__brunch">
            <span className="txt__brunch">브런치 추천작가</span>
          </p>
          <div className="writer__keyword__wrap">
            <button className="applybtn active">사랑</button>
            <button className="applybtn">라이프스타일</button>
            <button className="applybtn">여행</button>
          </div>
          <div className="wrap__writers">
            <ul className="list__writers">
              <li></li>
            </ul>
          </div>
        </div>

        {/* 중간배너영역 */}
        <div className="ad__banner">
          <a href="#" className=" screen__out">
            중간배너영역
          </a>
        </div>

        {/* 추천 글 영역 */}
        <div className="rec__articles">
          <h3 className="txt__brunch tit__brunch screen__out">
            RECOMMEND ARTICLES
          </h3>
          <p className="desc__brunch">
            <span class="txt__brunch screen__out">추천글보기</span>
          </p>
          <div className="wrap__slide">
            <ul className="list__slide">
              <li>
                <a href="#" className="link__slide">
                  <div className="img__articles">
                    <img
                      src="//img1.daumcdn.net/thumb/C240x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/OLI00wxhmz2MRouvBZYFOQH7sDs.JPG"
                      alt="이미지"
                    ></img>
                  </div>
                  <strong className="tit__subject">
                    한국에서 멀어졌더니 생긴 변화
                  </strong>
                  <p className="desc__subject">
                    어쩌다 보니 한국에서 떨어져 산지 1년 3개월. 지난해 2월쯤만
                    해도 싱가포르라는 나라에 대해 아무런 정보가 없었는데 1년
                    넘게 살다 보니 여기만큼 좋은 곳이 없더라. 싱가포르라는
                    나라가 살기 좋은 것도 있지만 한국에서 멀어짐으로써 오는
                    긍정적인 변화가 많았다는 게 더 솔직할 것 같다. 해외생활에
                    대한 환상을 오롯이 극대화시켜줄 수 있는 지극히 주관적인{" "}
                  </p>
                  <span className="info__by">
                    <span className="ico__by">by</span>
                    써니
                  </span>
                </a>
              </li>

              <li>
                <a href="#" className="link__slide">
                  <div className="img__articles">
                    <img
                      src="//img1.daumcdn.net/thumb/C240x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/OLI00wxhmz2MRouvBZYFOQH7sDs.JPG"
                      alt="이미지"
                    ></img>
                  </div>
                  <strong className="tit__subject">
                    한국에서 멀어졌더니 생긴 변화
                  </strong>
                  <p className="desc__subject">
                    어쩌다 보니 한국에서 떨어져 산지 1년 3개월. 지난해 2월쯤만
                    해도 싱가포르라는 나라에 대해 아무런 정보가 없었는데 1년
                    넘게 살다 보니 여기만큼 좋은 곳이 없더라. 싱가포르라는
                    나라가 살기 좋은 것도 있지만 한국에서 멀어짐으로써 오는
                    긍정적인 변화가 많았다는 게 더 솔직할 것 같다. 해외생활에
                    대한 환상을 오롯이 극대화시켜줄 수 있는 지극히 주관적인{" "}
                  </p>
                  <span className="info__by">
                    <span className="ico__by">by</span>
                    써니
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 푸터 영역 */}
        <footer className="foot__brunch">
          <div className="inner__foot">
            <div className="wrap__info">
              <div className="txt__info">
                <span className="ico__brunch__logo"></span>
                <q className="txt__quo">You can make anything by writing</q>
                <span className="txt__by">C.S.Lewis</span>
              </div>
            </div>
            <div className="wrap__corp"></div>
          </div>
        </footer>
      </div>
      {/*전체영역*/}
    </>
  );
};

export default Main;
