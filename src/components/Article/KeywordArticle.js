import React from 'react';
import styled from "styled-components";
import { ScreenOut } from 'pages/Main';
import { Link } from 'react-router-dom';

const WrapKeyword = styled.div`
  overflow: hidden;
  padding-top: 6px;
`;

const ListKeyword = styled.ul`
  display: flex;
  padding: 0;
  a {
    margin-right: 8px;
    font-family: "Noto Sans KR";
    li {
      display: block;
      min-width: 14px;
      height: 26px;
      padding: 0 10px;
      border: 1px solid #ddd;
      border-radius: 15px;
      font-size: 12px;
      line-height: 26px;
      color: #959595;
      text-align: center;
    }
  }
`;

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