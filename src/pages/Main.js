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
          <div className="intro__brunch">인트로 브런치 텍스트</div>

          {/* 에디터픽 영역*/}
          <h2 className="screen__out">에디터 픽</h2>
          <div className="editor__pic">
            <div className="wrap__slide">
              <ul className="list__slide">
                <li>
                  <div className="wrap__pic"></div>
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

        {/* 푸터 영역 */}
        <footer></footer>
      </div>
      {/*전체영역*/}
    </>
  );
};

export default Main;
