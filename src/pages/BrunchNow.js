import React from "react";
import Header from "../components/Header/Header";
import "../styles/main.css";
import "../index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const now__content = {
  color: "#333",
};

const list__common = {
  width: "700px",
  margin: "0 auto",
  padding: "0px",
};

const list__common__li = {
  width: "100%",
  padding: "25px 0 30px",
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
};

const link__thumb = {
  posiiton: "relative",
  width: "120px",
  height: "120px",
  marginLeft: "40px",
  backgroundPosition: "0 -280px",
  marginTop: "5px",
};



const desc__common = {
  display: "block",
  paddingTop: "5px",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#666666",
  maxHeight: "43px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight:'300'
};

const ico_bar = {
  display: "inline-block",
  width: "1px",
  height: "14px",
  margin: "4px 10px 0 10px",
  backgroundColor: "#bfbfbf",
  verticalAlign: "top",
};

const append__common = {
  width: "100%",
  paddingTop: "18px",
  fontSize: "12px",
  color: "#959595",
  fontFamily: "Noto Sans KR",
};

const link__category = {
  paddingRight: "5px",
  color: "#00c3bd",
};

const IcoBy = styled.span`
  margin-top: 3px;
  width: 14px;
  height: 13px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  padding-right: 3px;
  margin-right: 3px;
`;

const ico__dot = {
  width: "2px",
  height: "2px",
  margin: "8px 6px 11px",
  backgroundColor: "#bfbfbf",
  verticalAlign: "top",
};

const TitSub = styled.strong`
  font-weight:300;
  font-family:'Noto Sans KR';
  display: block;
  font-size:20px;
  line-height:28px;
  white-space:nowrap;
`;


const MyBrunch = () => {
  return (
    <>
      <Header title="브런치 나우" height="100px"></Header>
      <main className="now__content" style={now__content}>
        <article className="now__body">
          <h2 className="screen__out">브런치</h2>
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>{" "}
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>{" "}
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>{" "}
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>{" "}
          {/*글 섹션 하나*/}
          <ul
            className="list__common list__feed list__now"
            style={list__common}
          >
            <li className="list__common__li" style={list__common__li}>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>
                    위로인 줄 알았는데 자랑이었네
                  </TitSub>
                  <span className="desc__common" style={desc__common}>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <span className="ico__bar" style={ico_bar}></span>
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </span>
                </Link>
                <div className="append__common" style={append__common}>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={link__category}
                  >
                    감정과 기억의 방
                  </Link>
                  <IcoBy>by</IcoBy>
                  <Link
                    to="/detail"
                    className="link__bloger"
                    style={{ fontWeight: "300" }}
                  >
                    김안톤
                  </Link>
                  <span className="ico__dot" style={ico__dot}></span>
                  <span className="txt__time">방금</span>
                </div>
              </div>

              <Link to="/detail" className="link__thumb" style={link__thumb}>
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
            </li>
          </ul>
          {/*글 섹션 하나*/}
        </article>
      </main>
    </>
  );
};

export { IcoBy };
export default MyBrunch;