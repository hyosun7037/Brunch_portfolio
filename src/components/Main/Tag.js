import React from 'react';
import styled from "styled-components";

const KeyBtn = styled.button`
    cursor:pointer;
    &:hover{
      color:#00C6BD;
      font-weight:400;
      border:2px solid #00C6BD;
  }
`;

const Tag = ({tag}) => {
    return (
        <>
          <KeyBtn
                className="keyword__item brunch__keyword__item">
                <span className="keyword__item__txt">
                    {tag}
                </span>
          </KeyBtn>  
        </>
    );
};

export default Tag;