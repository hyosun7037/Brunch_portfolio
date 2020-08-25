import React from 'react';
import styled from "styled-components";

// 나중에 따로 빼기 (혹시 필요하면 쓰고, header에 저장 버튼 쓸 예정)

const WriteAcionWrap = styled.div`
  max-width:920px;
  margin:0 auto;
`;

const WriteActionButtonsBlock = styled.div`
  margin-top:1rem;
  margin-bottom:3rem;
  button + button {
      margin-left:0.5rem;
  }
`;

const StyledButton = styled.button`
  height:2.125rem;
  & + & {
      margin-left:0.5rem;
  }
`;


const WriteActionButtons = ({onPublish, onCancel}) => {
    return (
        <WriteAcionWrap>
            <WriteActionButtonsBlock>
                <StyledButton onClick={onPublish}>
                포스트 등록
                </StyledButton>
                <StyledButton onClick={onCancel}>
                취소
                </StyledButton>
            </WriteActionButtonsBlock>
        </WriteAcionWrap>
    );
};

export default WriteActionButtons;