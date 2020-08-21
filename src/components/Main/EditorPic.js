import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EditorPic = ({ title, content, userId }) => {
  return (
    <>
      <li>
        <div className="wrap__pic wrap__pic1">
          <div className="item__pic item__pic__type1">
            <Link to="/detail">
              <img
                src={content}
                width="100%"
                height="100%"
                alt="에디터 픽 사진1"
              />
              <div className="append__info">
                <div className="info__g">
                  <strong className="tit__pic">{title}</strong>
                  <span className="info__by">
                    <span className="ico__by">by</span>
                    {userId}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="item__pic item__pic__type2__3">
            <div className="item__pic item__pic__type2">
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C480x260.fjpg/?fname=https://t1.daumcdn.net/section/oc/2acfb8dcbbbb4b09bae794f3d2328461"
                  width="100%"
                  height="100%"
                  alt="에디터 픽 사진2"
                />
                <div className="append__info">
                  <div className="info__g">
                    <strong className="tit__pic">
                      녹물이 내 몸을 <br />
                      깜싸 안으니
                    </strong>
                    <span className="info__by">
                      <span className="ico__by">by</span>
                      슈필라움
                    </span>
                  </div>
                </div>
              </Link>
              <div className="mask"></div>
            </div>
            <div className="item__pic item__pic__type3">
              <Link to="/detail">
                <img
                  src="//img1.daumcdn.net/thumb/C480x260.fjpg/?fname=https://t1.daumcdn.net/section/oc/864f6a17996542afbf477cb950244ac1"
                  width="100%"
                  height="100%"
                  alt="에디터 픽 사진2"
                />
                <div className="append__info">
                  <div className="info__g">
                    <strong className="tit__pic">
                      빌 게이츠 성공 <br />
                      비밀, 잘 쉬면
                      <br />
                      떼돈 번다
                    </strong>
                    <span className="info__by">
                      <span className="ico__by">by</span>
                      슈필라움
                    </span>
                  </div>
                </div>
              </Link>
              <div className="mask"></div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

EditorPic.prototype = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EditorPic;
