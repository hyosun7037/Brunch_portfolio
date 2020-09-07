// 작가 페이지 글 목록 배열
// 나중에 DB 넣고 다 수정하기!!!
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ListCommon,
  TitSub,
  DescCommon,
  AppendCommon,
  LinkThumb,
} from "styles/StyledComponentAll";
import moment from "moment";
import Axios from "axios";
import { AUTHOR_POSTS_URL } from "config";

function AuthrorWriting({ content, title, coverImg, createDate }) {
  const [profilePosts, setProfilePosts] = useState([]);

  const ProfilePostsApi = () => {
    Axios.get(`${AUTHOR_POSTS_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    }).then((res) => {
      console.log(res);
      console.log("작가 글 목록::: " + res.data);
      return setProfilePosts(res.data);
    });
  };

  useEffect(() => {
    ProfilePostsApi();
  }, []);

  let codes = `${content}`;
  return (
    <>
      {/* 글 목록 */}
      <ListCommon>
        <li>
          <div className="cont__common">
            <Link to="/detail" className="link__common">
              <TitSub>{title}</TitSub>
              <DescCommon>
                <em className="tit__sub" style={{ fontStyle: "normal" }}></em>
                {/* <IcoBar /> */}
                <span dangerouslySetInnerHTML={{ __html: codes }}></span>
              </DescCommon>
            </Link>
            <AppendCommon>
              <Link
                to="/detail"
                className="link__category"
                style={{
                  paddingRight: "5px",
                  color: "#00c3bd",
                  display: "inline",
                }}
              >
                {/* 감정과 기억의 방 */}
              </Link>
              <span className="txt__time">
                {moment(createDate).format("MMM D YYYY")}
              </span>
            </AppendCommon>
          </div>
          <LinkThumb>
            <Link to="/detail">
              <img
                src={coverImg}
                alt="썸네일 이미지"
                width="120px"
                height="120px"
              />
            </Link>
          </LinkThumb>
        </li>
      </ListCommon>
    </>
  );
}

// AuthrorWriting.propTypes = {
//   id: PropTypes.number.isRequired,
//   userId: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.string.isRequired,
//   content: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default AuthrorWriting;
