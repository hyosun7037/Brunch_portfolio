import React from "react";
import {
  WrapCommentWrite,
  LinkProfile,
  Line,
  CommentCon,
  CommentConSmall,
} from "styles/StyledComponentAll";

const FeedCommentList = ({ comment, profileNameText, profileImageText }) => {
  return (
    <>
      <WrapCommentWrite style={{ margin: "20px 0" }}>
        <LinkProfile>
          <img
            src="https://img1.daumcdn.net/thumb/C100x100.fpng/?fname=https://t1.daumcdn.net/brunch/static/img/help/pc/ico_profile_100_01.png"
            alt="프로필 이미지"
            width="42px"
            heigtht="42px"
          />
        </LinkProfile>

        <form method="post" style={{ border: "none", marginTop: "10px" }}>
          <input type="hidden" name="sticker" />
          <CommentConSmall>sunny</CommentConSmall>
          <CommentCon>{comment}</CommentCon>
        </form>
      </WrapCommentWrite>
      <Line />
    </>
  );
};

export default FeedCommentList;
