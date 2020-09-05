import React from "react";
import { Link } from "react-router-dom";
import {
  IcoBy,
  ScreenOut,
  WrapRelatedDesc,
  InfoAuthor,
} from "styles/StyledComponentAll";

const WrapArticle = ({ coverImg, nickName, title, content }) => {
  console.log(coverImg);
  return (
    <>
      <ScreenOut>추천 브런치</ScreenOut>
      <li>
        <Link to="/">
          <p style={{ backgroundImage: `url:(${coverImg})` }}>
            <img
              src={coverImg}
              alt="커버 이미지"
              width="300px"
              height="170px"
            />
          </p>
          <strong>{title}</strong>
          <WrapRelatedDesc>
            <span>{content}</span>
          </WrapRelatedDesc>
          <InfoAuthor>
            <IcoBy>by</IcoBy>
            <span>{nickName}</span>
          </InfoAuthor>
        </Link>
      </li>
    </>
  );
};

export default WrapArticle;
