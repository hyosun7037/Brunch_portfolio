import React from 'react';
import styled from "styled-components";

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

const CommentArticle = () => {
    return (
        <>
        <span className="wrap__comment__btn">
                <BtnComment>
                  <IcoArticle></IcoArticle>
                  <span>댓글</span>
                  <span className="num__comment"></span>
                </BtnComment>
         </span>
        </>
    );
};

export default CommentArticle;