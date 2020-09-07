import React from "react";
import { Link } from "react-router-dom";

const WritersInfoFirst = ({ bio, nickName, profileImage, id }) => {
  console.log("작가 pk::: " + id);
  return (
    <div style={{ display: "inline-block" }}>
      <li>
        <Link to="/author" className="link__writers">
          <img
            className="img__brunch thumb__img"
            src={profileImage}
            alt="이미지"
          />
          <strong className="tit__writer">{nickName}</strong>
          {/* <span className="team__writer">칼럼니스트</span> */}
          <span className="txt__writer">{bio}</span>
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
    </div>
  );
};

export default WritersInfoFirst;
