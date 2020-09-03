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
import Axios from "axios";
import EditorPic, { EditorPic2, EditorPic1 } from "components/Main/EditorPic";
import { VIEWTAG_URL } from "config";
import Tag from "components/Main/Tag";
// import { VIEWPOSTS_URL } from "config";
import { POSTLIST_URL } from "config";
import { USER_URL } from "config";
import WritersInfoFirst from "components/Main/WritersInfoFirst";
import Recommend from "components/Main/Recommend";

// ScreenOut은 해당 섹션을 구분하기 위함. text-indent로 옆으로 다 빼놓음!
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPost: [],
      dataTag: [],
      dataPostList: [],
      dataUser: [],
    };
  }
  nextClick = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left -= 400)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  prevClick = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left += 400)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  one = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left = NaN)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  two = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left -= 400)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  three = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left -= 800)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  four = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left -= 1200)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  five = () => {
    this.next.setAttribute("style", [
      `left: ${(this.next.style.left -= 1600)}px;transition:transform .3s ease-in-out`,
    ]);
  };

  numBtn = () => {
    const num = document.querySelector(".img__page");
    console.log("num 클래스 선택" + num);
    num.setAttribute("style", `background-position-y: -10px`);
  };

  // postlist data - get
  postListApi = () => {
    Axios.get(`${POSTLIST_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        console.log(localStorage.getItem("Email"));
        return this.setState({ dataPostList: res.data });
      })
      .catch((res) => console.log(res));
  };
  // post data
  // postsApi = () => {
  //   Axios.get(`${VIEWPOSTS_URL}`)
  //     .then((res) => {
  //       return this.setState({ dataPost: res.data });
  //     })
  //     .catch((res) => console.log(res));
  // };

  // tag data
  tagApi = () => {
    Axios.get(`${VIEWTAG_URL}`)
      .then((res) => {
        return this.setState({ dataTag: res.data });
      })
      .catch((res) => console.log(res));
  };

  userApi = () => {
    Axios.get(`${USER_URL}`)
      .then((res) => {
        return this.setState({ dataUser: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    // this.postsApi();
    this.tagApi();
    this.postListApi();
    this.userApi();
  }

  writersBtn1 = () => {
    const active = { display: "inline-block" };
    document.addEventListener("click", active);
    console.log("1번탭 클릭됨!!");
  };

  writersBtn2 = () => {
    console.log("2번탭 클릭됨!!");
  };

  writersBtn3 = () => {
    console.log("3번탭 클릭됨!!");
  };

  render() {
    // const { dataPost } = this.state;
    const { dataPostList } = this.state;
    const { dataUser } = this.state;
    const { dataTag } = this.state;

    const slicePostList1 = dataPostList.slice(0, 6);
    const slicePostList2 = dataPostList.slice(7, 13);

    const slice1 = dataUser.slice(0, 6);
    const slice2 = dataUser.slice(7, 13);
    const slice3 = dataUser.slice(14, 20);

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
            {/* 데이터 다 맞게 넣으면 형태도 같이 수정하기 */}
            <ScreenOut>에디터픽</ScreenOut>
            <div className="editor__pic">
              <div className="wrap__slide">
                <ul className="list__slide" ref={(ref) => (this.next = ref)}>
                  {dataPostList.map((post) => (
                    <EditorPic
                      key={post.id}
                      id={post.id}
                      coverImg={post.coverImg}
                      nickName={post.nickName}
                      title={post.title}
                      subTitle={post.subTitle}
                      content={post.content}
                    />
                  ))}
                  {/* {slicePostList2.map((post) => (
                    <EditorPic2
                      key={post.id}
                      id={post.id}
                      coverImg={post.coverImg}
                      nickName={post.nickName}
                      title={post.title}
                      subTitle={post.subTitle}
                      content={post.content}
                    />
                  ))} */}
                  {/* <li>
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
                */}
                </ul>
              </div>
              <div className="wrap__btn">
                <Link
                  to=""
                  className="btn__scroll btn__brunch btn__prev"
                  onClick={this.prevClick}
                >
                  <span className="ico__brunch">이전 에디터 보기</span>
                </Link>
                <Link
                  to=""
                  className="btn__scroll btn__brunch btn__next"
                  onClick={this.nextClick}
                >
                  <span className="ico__brunch">다음 에디터 보기</span>
                </Link>
              </div>
              <div className="wrap__paging">
                <button className="link__page" onClick={this.one}>
                  <span className="link__page">
                    <ScreenOut>현재페이지</ScreenOut>
                    <span className="img__page txt__page1">01</span>
                  </span>
                </button>
                {/*현재 활성화 페이지*/}
                <button className="link__page" onClick={this.two}>
                  <span className="img__page txt__page2">02</span>
                </button>
                <button className="link__page" onClick={this.three}>
                  <span className="img__page txt__page3">03</span>
                </button>
                <button className="link__page" onClick={this.four}>
                  <span className="img__page txt__page4">04</span>
                </button>
                <button className="link__page" onClick={this.five}>
                  <span className="img__page txt__page5">05</span>
                </button>
                <button className="link__page">
                  <span className="img__page txt__page6">06</span>
                </button>
                <button className="link__page">
                  <span className="img__page txt__page7">07</span>
                </button>
                <button className="link__page">
                  <span className="img__page txt__page8">08</span>
                </button>
                <button className="link__page">
                  <span className="img__page txt__page9">09</span>
                </button>
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
                  <div className="keyword__list__grid">
                    {/* DB <br> 파싱 - 좀더 생각해보기 */}
                    {/* {data.replace('\n', '<br>')}
                  {data.split('\n').map(line => {
                    return (<span>{line}<br/></span>)
                  })} */}
                    {dataTag.map((tag) => (
                      <Tag
                        key={tag.id}
                        id={tag.id}
                        postId={tag.postId}
                        tag={tag.tag}
                        userId={tag.userId}
                      />
                    ))}
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
              <RoundBtnBigActive
                onClick={this.writersBtn1}
                ref1={(ref1) => (this.button = ref1)}
              >
                인기작가
              </RoundBtnBigActive>
              <RoundBtnBig
                onClick={this.writersBtn2}
                ref2={(ref2) => (this.button = ref2)}
              >
                추천작가
              </RoundBtnBig>
            </div>
            <div className="wrap__writers">
              <ul className="list__writers">
                {slice1.map((user) => (
                  <WritersInfoFirst
                    key={user.id}
                    id={user.id}
                    bio={user.bio}
                    nickName={user.nickName}
                    profileImage={user.profileImage}
                  />
                ))}
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
                {dataPostList.map((post) => (
                  <Recommend
                    key={post.id}
                    id={post.id}
                    coverImg={post.coverImg}
                    nickName={post.nickName}
                    title={post.title}
                    subTitle={post.subTitle}
                    content={post.content}
                  />
                ))}
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
