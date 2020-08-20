import React from 'react';
import { BtnComment, IcoArticle } from 'styles/StyledComponentAll';

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