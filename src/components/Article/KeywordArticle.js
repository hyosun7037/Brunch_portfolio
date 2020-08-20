import React from 'react';
import { Link } from 'react-router-dom';
import { WrapKeyword, ScreenOut, ListKeyword } from 'styles/StyledComponentAll';

const KeywordArticle = () => {
    return (
        <>
        {/* 브런치 키워드 목록 */}
        <WrapKeyword>
        <ScreenOut>키워드</ScreenOut>
        <ListKeyword>
          <Link to="/keyword/마음일기" className="link__keyword">
            <li>마음일기</li>
          </Link>
          <Link to="/keyword/수면장애" className="link__keyword">
            <li>수면장애</li>
          </Link>
          <Link to="/keyword/불면" className="link__keyword">
            <li>불면</li>
          </Link>
        </ListKeyword>
      </WrapKeyword>
      </>
    );
};

export default KeywordArticle;