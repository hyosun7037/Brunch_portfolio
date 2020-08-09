import React from 'react';
import styled from "styled-components";
import { ScreenOut } from 'pages/Main';
import { Link } from 'react-router-dom';
import { IcoBy } from "pages/BrunchNow";

// 관련글 Wrapper
const Wrap = styled.div`
  max-width:'1020px';
  margin:'0 auto';
  &::before{
    position:absolute;
    left:0;
    width:100%;
    height:75px;
    background:#fbfbfb;
    content:'';  
  }
`;

// 관련글 
const ListRelativeArticle = styled.ul`
  display: flex;
  position: relative;
  margin:0 auto;
  max-width:1020px;
  
  li{
    width:300px;
    margin:0 20px 35px;
    p{
      width:100%;
      height:170px;
      background-size:cover;
      background-position:50% 50%;
      background-image:url('//img1.daumcdn.net/thumb/C270x320.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/16iq/image/oFp1jZBJKKtPaY5g_DZ59MzMUc4.jpg');
    }
    strong{
      display:block;
      overflow:hidden;
      max-height:62px;
      margin-top:26px;
      font-weight:400;
      font-size:24px;
      line-height:32px;
      font-family:"Nanum Myeongjo", serif;
      word-break:break-all;
      letter-spacing:-1.2px;
    }
  }
`;

// 관련글 상세
const WrapRelatedDesc = styled.span`
  display:-webkit-box;
  overflow:hidden;
  max-height:66px;
  margin-top:8px;
  font-size:13px;
  font-family:'Noto Sans KR', sans-serif;
  text-overflow:ellipsis;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
    span{
      display:inline;
      position:relative;
      line-height:24px;
      font-family:'Noto Sans Light', sans-serif;
      color:#959595;
    }
`;


// 작가이름
const InfoAuthor = styled.span`
  display:inline-block;
  margin-top:15px;
  span{
    color:#959595;
    font-size:13px;
    font-family:'Noto Sans KR', sans-serif;
    margin-top:15px;
  }
`;

const WrapArticle = () => {
    return (
        <Wrap>
        <ScreenOut>추천 브런치</ScreenOut>
        <ListRelativeArticle>
          {/* 관련글 1 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
          {/* 관련글 2 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
          {/* 관련글 3 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
        </ListRelativeArticle>
        <ListRelativeArticle>
          {/* 관련글 1 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
          {/* 관련글 2 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
          {/* 관련글 3 */}
          <li>
            <Link to="/">
              <p></p>
              <strong>강아지와 산책하다 멘붕이 되었다.</strong>
              <WrapRelatedDesc>
                <span>
                이상과 현실의 거리   독일에서 강아지랑 공원 산책을 하다 보면 자주 이런 장면을 목격하게 된다. 사람은 자전거를 타고 늘씬하고 느름 하게 생긴 강아지 들은 멋지게 달려서 서로의 템포를 맞추며 산책을 다니는 모습 말이다. 그렇다고 무슨 달리기 선수들 트레이닝하듯 자전거는 쌩쌩 달리고 강아지는 헉헉 거리며 냅다 뛰기만 하는 것이 아니다. 중간중간에 타이밍 좋
                </span>
              </WrapRelatedDesc>
              <InfoAuthor>
                <IcoBy>by</IcoBy>
                <span>슈필라움</span>
              </InfoAuthor>
            </Link>
          </li>
        </ListRelativeArticle>
        </Wrap>
    );
};

export default WrapArticle;