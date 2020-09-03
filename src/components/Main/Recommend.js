import React from "react";
import { Link } from "react-router-dom";

const Recommend = ({ coverImg, nickName, title, content }) => {
  return (
    <div>
      <li>
        <Link to="/detail" className="link__slide">
          <div className="img__articles">
            <img src={coverImg} alt="이미지" width="240px"></img>
          </div>
          <strong className="tit__subject">{title}</strong>
          <p className="desc__subject">{content}</p>
          <span className="info__by">
            <span className="ico__by">by</span>
            {nickName}
          </span>
        </Link>
      </li>
    </div>
  );
};

export default Recommend;
