// 작가 페이지 글 목록 배열
// 나중에 DB 넣고 다 수정하기!!!
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListCommon, TitSub, DescCommon, IcoBar, AppendCommon, IcoBy, IcoDot, LinkThumb } from "styles/StyledComponentAll";

function AuthrorWriting({content, title, subTitle, postType}) {
  return (
    <>
        {/* 글 목록 */}
        <ListCommon>
        <li>
          <div className="cont__common">
            <Link to="/detail" className="link__common">
              <TitSub>{title}</TitSub>
              <DescCommon>
                <em className="tit__sub" style={{ fontStyle: "normal" }}>
                  {postType}
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
                style={{paddingRight: "5px", color: "#00c3bd", display:'inline'}}
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
                <img src={content} alt=""/>
          </Link>
          </LinkThumb>
        </li>
      </ListCommon>
    </>
  );
}

AuthrorWriting.propTypes = {
    id: PropTypes.number.isRequired,
    userId:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default AuthrorWriting;