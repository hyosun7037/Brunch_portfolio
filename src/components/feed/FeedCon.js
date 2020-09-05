import React from "react";
import {
  ListCommon,
  TitSub,
  DescCommon,
  AppendCommon,
  IcoBy,
  IcoDot,
  LinkThumb,
} from "styles/StyledComponentAll";
import { Link } from "react-router-dom";
import moment from "moment";

const link__category = {
  paddingRight: "5px",
  color: "#00c3bd",
};

const FeedCon = ({ title, content, createDate, coverImg, nickName }) => {
  let codes = `${content}`;
  return (
    <>
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
                style={link__category}
              ></Link>
              <IcoBy>by</IcoBy>
              <Link
                to="/detail"
                className="link__bloger"
                style={{ fontWeight: "300" }}
              >
                {nickName}
              </Link>
              <IcoDot />
              <span className="txt__time">
                {moment(createDate).format("MMM D YYYY")}
              </span>
            </AppendCommon>
          </div>

          <LinkThumb>
            <Link to="/detail">
              <img src={coverImg} alt="이미지" width="120px" height="120px" />
            </Link>
          </LinkThumb>
        </li>
      </ListCommon>
    </>
  );
};

export default FeedCon;
