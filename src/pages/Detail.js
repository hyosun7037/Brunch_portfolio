import React from "react";
import "../styles/detail.css";
import DetailHeader from "../components/Header/DetailHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IcoBy } from "./BrunchNow";
import { ScreenOut } from "./Main";

const CoverCellInfo = styled.span`
  position: absolute;
  width: 700px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TxtAuthor = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-right: 5px;
`;

const WrapFrame = styled.div`
  @media only screen and (max-width: 768px) {
    width: unset;
    min-width: 620px;
  }
  margin: 0 40px;
  min-width: 700px;
`;

const Blockquote = styled.blockquote`
  text-align: center;
  background-image: url("http://t1.daumcdn.net/brunch/static/img/help/pc/img_blockquote_type1_small.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  padding: 25px 0 0;
  font-size: 15pt;
  color: #333;
  line-height: 35px;
  margin: 80px auto;
  font-weight: 300;
`;

const ItemTypeTit = styled.p`
  width: 700px;
  min-width: 700px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.8px;
  font-weight: 500;
`;

const ItemTypeText = styled(ItemTypeTit)`
  font-weight: 300;
  margin-bottom: 30px;
`;

const WrapBodyInfo = styled.div`
  width: 700px;
  margin: 80px auto 0 auto;
  display: flex;
  justify-content: space-between;
`;

const WrapKeyword = styled.div`
  overflow: hidden;
  padding-top: 6px;
`;

const ListKeyword = styled.ul`
  display: flex;
  padding: 0;
  a {
    margin-right: 8px;
    font-family: "Noto Sans KR";
    li {
      display: block;
      min-width: 14px;
      height: 26px;
      padding: 0 10px;
      border: 1px solid #ddd;
      border-radius: 15px;
      font-size: 12px;
      line-height: 26px;
      color: #959595;
      text-align: center;
    }
  }
`;

const BtnComment = styled.button`
  margin-left: 8px;
  padding: 10px 20px 8px 19px;
  border: 1px solid #bbb;
  font-size: 13px;
  border-radius: 42px;
  font-family: "Noto Sans KR";
  color: #666;
`;

const IcoArticle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-position: 0 0;
  overflow: hidden;
  background-image: url("http://t1.daumcdn.net/brunch9/static/images/pc/ico_article_181212_rtn.png");
  background-size: 80px 80px;
  line-height: 0;
  text-indent: -9999px;
  vertical-align: top;
`;

// 브런치 댓글창 클릭하면 display 속성 변경시키기
const DetailComment = styled.div`
  display: block;
  padding-top: 44px;
  background-color: #fff;
  width: 700px;
  margin: 0 auto;
  padding: 0 0 80px;
`;

const CommentHead = styled.div`
  width: 700px;
  height: 30px;
  strong {
    font-family: "Noto Sans KR";
    font-weight: 400;
    padding-top: 4px;
    margin-left: -1px;
    span {
      padding-left: 5px;
      color: #00c3bd;
    }
  }
`;

const CommentContent = styled.div`
  width: 700px;
  margin: 0 auto;
  div {
    display: none;
    button {
      width: 100%;
      height: 47px;
      border-top: 1px solid #ddd;
      font-size: 12px;
      line-height: 47px;
      color: #959595;
    }
  }
  ul {
    display: block;
    width: 100%;
    border-top: 1px solid #eee;
  }
`;

const WrapCommentWrite = styled.div`
  display: flex;
  form {
    position: relative;
    border: 1px solid #eee;
    outline: 0;
    width: 624px;
    margin: 0 auto;
    .write__append {
      padding: 14px 19px 0;
      height: 44px;
    }
  }
`;

const LinkProfile = styled.div`
  margin-left: 18px;
  overflow: visible;
  position: relative;
  width: 42px;
  height: 42px;
  img {
    border-radius: 50%;
  }
`;

const Detail = () => {
  return (
    <>
      <DetailHeader
        position="absolute"
        backposition="-100px 0"
        sideBtnColor="rgba(0,0,0,0)"
      />
      <div className="wrap__detail">
        <div className="wrap__article">
          <div className="wrap__cover">
            <div className="cover__item">
              <div className="cover__image"></div>
              <div className="cover__inner"></div>
              <div className="cover__cell">
                <h1 className="cover__title">친구? 그거 꼭 많아야돼?</h1>
                <p className="cover__sub__title">
                  인간이 사용할 수 있는 감정의 양은 정해져 있다고 본다.
                </p>
              </div>
              <CoverCellInfo>
                <IcoBy>by</IcoBy>
                <TxtAuthor>
                  <Link to="/">별작가</Link>
                </TxtAuthor>
                <IcoBy>Aug 05.2020</IcoBy>
              </CoverCellInfo>
            </div>
          </div>
          <WrapFrame>
            <div className="wrap__body text__align__justify__finish__txt">
              <Blockquote>
                모든 관계를 유지하기 위해 애쓰지 말자.
                <br />
                결국 좋은 친구는 끝까지 남으며 인생에 한 두명이면 충분하다.
              </Blockquote>
              <ItemTypeTit>
                <span>어린 시절부터 친구는 많았다.</span>
              </ItemTypeTit>
              <ItemTypeText>
                남녀 가릴 것 없이 주변에는 늘 친구가 많았다. 워낙 노는 걸
                좋아했기도 했고 그 당시에는 사람 자체를 좋아했던 것 같다. 나름
                인기도 많아서 초등학교 때는 학급 회장도 몇 번 했던 것 같다. 밝은
                성격 덕분에 선생님들과의 관계도 좋았다. 부모님의 잦은 갈등
                때문에 우울해질 법도 한데 오히려 게이치 않았던 것 같다. 성인이
                된 지금보다 더 현명했다. 지금 살고 있는 동네에 처음 이사를 왔을
                때는 5살 때였다. 참 신기한 게 꼬마들은 서로 금방 친해진다. 그
                당시 동네에는 이미 노는 무리가 형성되어 있었던 걸로 기억한다.
                정확히 기억은 안 나지만 나는 그 무리와 어렵지 않게 어울렸던 것
                같다. 그들과 아파트 단지 안에 있던 조그마한 놀이터에서 꼼꼬미,
                와리가리 등 추억의 놀이를 했던 기억이 아직도 생생하기 때문이다.
                아쉽지만 그때 같이 놀았던 친구 중에 지금까지 연락하는 친구는
                없다. 그래도 종종 건너 건너 그들의 소식은 듣긴 한다. 정말
                순수했던 나의 소꿉친구들이었다.
              </ItemTypeText>
              <ItemTypeTit>
                <span>그렇게 친구가 많았던 어린 꼬마는</span>
              </ItemTypeTit>
              <ItemTypeText>
                성장하면서 스스로를 가두기 시작했다. 모르겠다. 어느 순간
                주변에는 학업에 집중하지 못하는 무리만 남았던 것 같다. 나는
                모범과 탈선 그 경계에서 아슬아슬하게 줄을 타고 있었다.
                정서적으로 불안했던 가정과 '대학이면 무조건 된다'라는 막연한
                믿음을 주입하는 주변 환경은 이도 저도 아닌 나를 만들었다. 환경
                탓만 하냐라는 말을 할 수도 있겠다. 맞다. 나는 환경을 이겨낼
                만큼의 의지가 없는 존재였다. 정서적인 불안감은 남들에게 보이는
                것에 굉장히 민감하게 만들었고 특정 사람에게 집착하는 일종의
                정신병으로 발전했다. 일찌감치 고등학교 때부터 미용을 배우고
                음악을 하는 친구들을 보며 무모하다는 생각도 했다. 나에게 막연한
                믿음을 주입시키는 꼰대들처럼 말이다. 하지만 속으로는 그들을
                부러워했던 것 같다. 그래서 더 공부에 집중할 수가 없었다. 그리고
                그때 만났던 친구 중에도 지금까지 연락하는 친구는 없다.
              </ItemTypeText>
              <ItemTypeTit>
                <span>지금까지 수많은 친구가 나를 거쳐갔지만</span>
              </ItemTypeTit>
              <ItemTypeText>
                현재 친구라고 부를 수 있는 사람은 몇 안된다. 그래도 절망적이지
                않은 이유는 적어도 두 명의 좋은 친구가 있기 때문이다. 나를 항상
                돕는 친구 말이다. 사실 그들이 나를 돕는 이유는 정확히 모른다.
                그렇다고 직접 나를 왜 돕냐고 물어보는 것도 웃기지 않나. 하지만
                한 가지 확실한 건 그들은 진심이라는 거다. 참다 참다 고민을
                털어놓으면 언제나 해결 방안을 찾아주기 위해 함께 고민하고 내가
                하는 일에 있어서 도움이 필요하면 어떻게든 시간을 내서 도와주려고
                한다. 나는 그들에 대한 고마움을 최근에서야 느끼게 됐다. 나를
                돕는 사람을 항상 의심했었다. 별다른 이익도 없는데 남을 위해 자기
                시간을 희생하는 사람은 거의 없을 거라고 생각했다. 하지만 그들이
                이익을 위해서 돕는다고 하기에는 난 가진 게 없었다. 뛰어난 재능을
                가진 것도 아니고 그렇다고 부자도 아니었다. 그들은 정말 좋은
                친구로서 나를 도왔던 것이었다. 어떠한 대가도 바라지 않고서
                말이다.
              </ItemTypeText>
              <ItemTypeTit>
                <span>친구가 많았던 어린 시절 나는 남을 의식하지 않았다.</span>
              </ItemTypeTit>
              <ItemTypeText>
                그냥 친구는 친구였고 그냥 같이 노는 게 좋았다. 그들에게 어떤
                이익을 바라기에는 나는 너무 어린 꼬마였다. 사춘기 이후 만났던
                친구들은 결부터가 달랐다. 정말 부끄럽지만 소위 잘 나간다고 하는
                친구들과 함께 있는 게 좋았다. 그들이 나의 가치를 올려준다고
                생각했다. 그들과의 관계 유지를 위해 나의 본모습을 감추었다.
                어리석은 짓이었고 사실 잘 어울리지도 못했다.
              </ItemTypeText>
            </div>
            <WrapBodyInfo>
              {/* 브런치 키워드 목록 */}
              <WrapKeyword>
                <ScreenOut>키워드</ScreenOut>
                <ListKeyword>
                  <Link to="/keyword/마음일기" className="link__keyword">
                    <li>마음일기</li>
                  </Link>
                  <Link to="/keyword/수면장애" className="link__keyword">
                    <li>수면장애</li>
                  </Link>
                  <Link to="/keyword/불면" className="link__keyword">
                    <li>불면</li>
                  </Link>
                </ListKeyword>
              </WrapKeyword>
              {/* 댓글버튼 */}
              <span className="wrap__comment__btn">
                <BtnComment>
                  <IcoArticle></IcoArticle>
                  <span>댓글</span>
                  <span className="num__comment"></span>
                </BtnComment>
              </span>
            </WrapBodyInfo>
            {/* 댓글창 클릭하면 display 상태 변경 */}
            <div
              className="article__body__bottom"
              style={{ paddingTop: "82px" }}
            ></div>
            <DetailComment>
              <ScreenOut>댓글</ScreenOut>
              <CommentHead>
                <strong>
                  댓글<span>0</span>
                </strong>
              </CommentHead>
              <CommentContent>
                <div>
                  <button>이전 댓글 보기</button>
                </div>
                <ul></ul>
              </CommentContent>
              <WrapCommentWrite>
                <LinkProfile>
                  <img
                    src="//img1.daumcdn.net/thumb/C42x42.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aFZ0/image/0e47B_A7ISf1x9sYZ8wjsRZJZRA.jpg"
                    alt="프로필 이미지"
                  />
                </LinkProfile>
                <form method="post">
                  <input type="hidden" name="sticker" />
                  <fieldset style={{ border: "none" }}>
                    <div>
                      <span className="wrap__area"></span>
                      <div className="write__append"></div>
                    </div>
                  </fieldset>
                </form>
              </WrapCommentWrite>
            </DetailComment>
          </WrapFrame>
        </div>
      </div>
    </>
  );
};

export default Detail;
