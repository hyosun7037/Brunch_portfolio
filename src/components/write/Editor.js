import React, { useRef, useEffect } from "react";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import Quill from "quill";

const EditorBlock = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding-top: 15rem;
  padding-bottom: 5rem;
  height: 450px;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  width: 100%;
  font-family: "Nanum Myeongjo", serif;
  letter-spacing: -0.07em;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const SubInput = styled.input`
  font-size: 12pt;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  width: 100%;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const QuilWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
    font-style: normal;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
    font-style: normal;
    color: #bfbfbf;
  }
`;

const Line = styled.p`
  border-top: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const Editor = () => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement 설정
  const quillInstance = useRef(null); // Quill 인스턴스 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      modules: {
        // 더 많은 옵션
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "image"],
          [{ align: "justify" }, { align: "center" }, { align: "right" }],
          [{ color: [] }, { background: [] }],
        ],
      },
    });
    quillInstance.current.focus();
  }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <SubInput placeholder="소제목을 입력하세요" />
      <Line></Line>
      <QuilWrapper>
        <div ref={quillElement} />
      </QuilWrapper>
    </EditorBlock>
  );
};

export default Editor;
