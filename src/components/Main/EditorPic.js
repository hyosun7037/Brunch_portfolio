import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import Slider from "react-slick";

const EditorPic = ({ title, nickName, coverImg }) => {
  console.log(title);
  console.log(nickName);
  console.log(coverImg);
  // console.log(content);
  // console.log(`"${content}"`);

  return (
    <li>
        <div className="wrap__pic wrap__pic1">
          <div className="item__pic item__pic__type1">
            <Link to="/detail">
              <img
                src={coverImg}
                width="100%"
                height="100%"
                alt="에디터 픽 사진1"
              />
              <div className="append__info">
                <div className="info__g">
                  <strong className="tit__pic">{title}</strong>
                  <span className="info__by">
                    <span className="ico__by">by</span>
                    {nickName}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="item__pic item__pic__type2__3">
            <div className="item__pic item__pic__type2">
              <Link to="/detail">
                <img
                  src="//t1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/-r8-wkOF4lUCOF_EeI7DBYdVl6U.jpg"
                  width="100%"
                  height="100%"
                  alt="에디터 픽 사진2"
                />
                <div className="append__info">
                  <div className="info__g">
                    <strong className="tit__pic">{title}</strong>
                    <span className="info__by">
                      <span className="ico__by">by</span>
                      {nickName}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="mask"></div>
            </div>
            <div className="item__pic item__pic__type3">
              <Link to="/detail">
                <img
                  src="https://t1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9iZH/image/c5F_wI2mV-Tmpl-PknxP2KylqGE.PNG"
                  width="100%"
                  height="100%"
                  alt="에디터 픽 사진2"
                />
                <div className="append__info">
                  <div className="info__g">
                    <strong className="tit__pic">
                      {title}
                    </strong>
                    <span className="info__by">
                      <span className="ico__by">by</span>
                      {nickName}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="mask"></div>
            </div>
          </div> */}
        </div>
    </li>
  );
};

EditorPic.prototype = {
  id: PropTypes.number.isRequired,
  // userId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default EditorPic;

