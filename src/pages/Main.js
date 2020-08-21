// 메인페이지
import React, { Component } from "react";
import "styles/main.css";
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer";
import { TxtBanner } from "images/ImgAll";
import {
  RoundBtnBig,
  RoundBtnBigActive,
  ScreenOut,
} from "styles/StyledComponentAll";
import { POSTS_URL } from "config";
import Axios from "axios";
import EditorPic from "components/Main/EditorPic";

// ScreenOut은 해당 섹션을 구분하기 위함. text-indent로 옆으로 다 빼놓음!
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getApi = () => {
    Axios.get(`${POSTS_URL}`)
      .then((res) => {
        return this.setState({ data: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    const { data } = this.state;
    return (
      <>
        {/*탑배너영역*/}
        <div className="wrap__banner">
          <ul className="list__banner">
            <li className="item__banner">
              <Link to="/">
                <TxtBanner />
              </Link>
              {/* <Link to="/detail">작은 배너</Link> */}
            </li>
          </ul>
        </div>

        <div className="main__container">
          <Header></Header>
          <main>
            {/* 인트로 브런치 텍스트 영역*/}
            <ScreenOut>브런치 본문</ScreenOut>
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
            <ScreenOut>에디터픽</ScreenOut>
            <div className="editor__pic">
              <div className="wrap__slide">
                <ul className="list__slide">
                  {data.map((post) => (
                    <EditorPic
                      key={post.id}
                      userId={post.userId}
                      id={post.id}
                      title={post.title}
                      subTitle={post.subTitle}
                      postType={post.postType}
                      content={post.content}
                    />
                  ))}

                  <li>
                    <div className="wrap__pic wrap__pic2">
                      <div className="item__pic item__pic__type1">
                        <Link to="/detail">
                          <img
                            src="//img1.daumcdn.net/thumb/C320x520.fjpg/?fname=https://t1.daumcdn.net/section/oc/78b1b4e8a4244ff4859dc791900e0d5d"
                            width="100%"
                            height="100%"
                            alt="에디터 픽 사진2"
                          />
                          <div className="append__info">
                            <div className="info__g">
                              <strong className="tit__pic">
                                런치박스 말고
                                <br />
                                도시락
                                <br />
                              </strong>
                              <span className="txt__pic">
                                런치박스 말고 "오늘"
                                <br />
                                "점심시간에 다들 내 런치박스를.."
                                <br />
                              </span>
                              <span className="info__by">
                                <span className="ico__by">by</span>
                                슈필라움
                              </span>
                            </div>
                          </div>
                        </Link>
                        <div className="mask"></div>
                      </div>
                      <div className="item__pic item__pic__type2"></div>
                      <div className="item__pic item__pic__type3"></div>
                    </div>
                  </li>

                  <li>
                    <div className="wrap__pic wrap__pic3">
                      <div className="item__pic item__pic__type1"></div>
                      <div className="item__pic item__pic__type2"></div>
                      <div className="item__pic item__pic__type3"></div>
                      <div className="item__pic item__pic__type4"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="wrap__btn">
                <Link
                  to="/detail"
                  className="btn__scroll btn__brunch btn__prev"
                >
                  <span className="ico__brunch">이전 에디터 보기</span>
                </Link>
                <Link
                  to="/detail"
                  className="btn__scroll btn__brunch btn__next"
                >
                  <span className="ico__brunch">다음 에디터 보기</span>
                </Link>
              </div>
              <div className="wrap__paging">
                <span className="link__page">
                  <ScreenOut>현재페이지</ScreenOut>
                  <span className="img__page txt__page1">01</span>
                </span>
                {/*현재 활성화 페이지*/}
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page2">02</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page3">03</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page4">04</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page5">05</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page6">06</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page7">07</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page8">08</span>
                </Link>
                <Link to="/detail" className="link__page">
                  <span className="img__page txt__page9">09</span>
                </Link>
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
                <div className="keyword__list">
                  <div className="keyword__list__flex">
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                  </div>
                  <div className="keyword__list__flex">
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                  </div>
                  <div className="keyword__list__flex">
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                    <Link
                      to="/keyword_detail"
                      className="keyword__item brunch__keyword__item"
                    >
                      <span className="keyword__item__txt">
                        지구한바퀴
                        <br />
                        세계여행
                      </span>
                    </Link>
                  </div>
                </div>
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
              <RoundBtnBigActive>사랑</RoundBtnBigActive>
              <RoundBtnBig>라이프스타일</RoundBtnBig>
              <RoundBtnBig>여행</RoundBtnBig>
            </div>
            <div className="wrap__writers">
              <ul className="list__writers">
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="list__writers">
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/author" className="link__writers">
                    <img
                      className="img__brunch thumb__img"
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg"
                      alt="이미지"
                    />
                    <strong className="tit__writer">스마일펄</strong>
                    <span className="team__writer">에세이스트</span>
                    <span className="txt__writer">
                      사람 만나기, 독서, 여행에는 돈을 아끼지 말자는 생활 신조를
                      갖고 있습니다. 행복한 삶, 결혼의 현실, 회사 생활, 책에
                      관한 이야기를 씁니다.
                    </span>
                    <div className="writer__keyword__wrap keyword__inside__wrap">
                      <button className="keyword__item" data-keyword="패션">
                        패션
                      </button>
                      <button className="keyword__item" data-keyword="자기계발">
                        자기계발
                      </button>
                      <button className="keyword__item" data-url="/">
                        더보기
                      </button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 중간배너영역 */}
          <div className="ad__banner">
            <Link to="/detail" className=" screen__out">
              중간배너영역
            </Link>
          </div>

          {/* 추천 글 영역 */}
          <div className="rec__articles">
            <h3 className="txt__brunch tit__brunch screen__out">
              RECOMMEND ARTICLES
            </h3>
            <p className="desc__brunch">
              <span className="txt__brunch screen__out">추천글보기</span>
            </p>
            <div className="wrap__slide">
              <ul className="list__slide">
                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>

                <li>
                  <Link to="/detail" className="link__slide">
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
                  </Link>
                </li>
              </ul>
            </div>

            <div className="wrap__btn recommend_articles__btn">
              <Link to="/detail" className="btn__scroll btn__brunch btn__prev">
                <span className="ico__brunch">이전 에디터 보기</span>
              </Link>
              <Link to="/detail" className="btn__scroll btn__brunch btn__next">
                <span className="ico__brunch">다음 에디터 보기</span>
              </Link>
            </div>
          </div>

          {/* 푸터 영역 */}
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Main;
