// 브런치 나우 페이지
import React from "react";
import Header from "components/Header/Header";
import "styles/main.css";
import "index.css";
import { Link } from "react-router-dom";
import { ScreenOut, ListCommon, LinkThumb, DescCommon, IcoBar, AppendCommon, IcoBy, IcoDot, TitSub } from "styles/StyledComponentAll";

const link__category = {
  paddingRight: "5px",
  color: "#00c3bd",
};

const MyBrunch = () => {
  return (
    <>
      <Header title="브런치 나우" height="100px"></Header>
      <main className="now__content" style={{color: "#333"}}>
        <article className="now__body">
          <ScreenOut>브런치</ScreenOut>
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
                  <Link
                    to="/detail"
                    className="link__category"
                    style={{paddingRight: "5px", color: "#00c3bd",}}
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>

              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>{" "}
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>

              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>{" "}
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>{" "}
          {/*글 섹션 하나*/}
          <ListCommon>
            <li>
              <div className="cont__common">
                <Link to="/detail" className="link__common">
                  <TitSub>위로인 줄 알았는데 자랑이었네</TitSub>
                  <DescCommon>
                    <em className="tit__sub" style={{ fontStyle: "normal" }}>
                      성장하는 중.. 아마도?
                    </em>
                    <IcoBar />
                    <span>
                      2년 만에 풋살동호회에서 공을 찼다.축구를 시작한 이후
                      치아를 하얗게 드러내고 배를 잡으며 공을 차본 적이 있었나
                      싶을 정도로 즐거웠다. 종아리가 뻐근해질 때쯤 시원한 맥주
                      한잔 생각이 간절했고, 대충 땀만 닦은 채 동호회 사람들과
                      근처 맥주집으로 이동했다.모임에 처음 참여한 나를 향해
                      이런저런 질문이 쏟아졌다. 가벼운 호구조사를 마치고 연거푸
                      서너 잔을
                    </span>
                  </DescCommon>
                </Link>
                <AppendCommon>
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
                  <IcoDot />
                  <span className="txt__time">방금</span>
                </AppendCommon>
              </div>
              <LinkThumb>
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/WVdVmwZtnU821Rzf_JFmlB8osGc.JPG"
                  alt="이미지"
                />
              </Link>
              </LinkThumb>
            </li>
          </ListCommon>
          {/*글 섹션 하나*/}
        </article>
      </main>
    </>
  );
};

export default MyBrunch;
