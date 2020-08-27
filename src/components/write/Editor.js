import React, { useRef, useEffect, useState } from "react";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import Quill from "quill";
import Axios from "axios";
import { POSTS_URL } from "config";
import { RoundBtn } from "components/Header/WriteHeader";

const EditorBlock = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding-top: 15rem;
  padding-bottom: 2rem;
  position: relative;
  /* height: 450px; */
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

const RoundBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const QuilWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
    font-style: normal;
    &::placeholder {
      font-size: 14px;
    }
  }
  .ql-editor.ql-blank::before {
    left: 0px;
    font-style: normal;
    color: #bfbfbf;
    font-size: 14px;
  }
`;

const Line = styled.p`
  border-top: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const Editor = () => {
  const [quillData, setQuillData] = useState("");
  const [state, setState] = useState({
    title: "",
    subTitle: "",
    content: "",
  });

  const quillElement = useRef(null); // Quill을 적용할 DivElement 설정
  // const quillInstance = useRef(null); // Quill 인스턴스 설정
  useEffect(() => {
    const quill = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder:
        "작가님, 커피 한 잔에 글 쓰기 좋은 오후네요. 이렇게 글자를 입력하고 드래그하면 메뉴를 더 볼 수 있어요.",
      modules: {
        // 더 많은 옵션
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "image"],
          [{ align: "justify" }, { align: "center" }, { align: "right" }],
          [{ color: [] }, { background: [] }],
          ["clean"],
        ],
        clipboard: {
          matchVisual: false,
        },
      },
    });
    // quill에 text-change 이벤트 핸들러 등록
    // http://quilljs.com/docs/api/#events 문서 참고
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        const dataText = quill.root.innerHTML;
        setQuillData(dataText);
        console.log(dataText);
      }
    });
    quill.focus();
  }, [quillElement]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log("이거는 타이틀 값" + e.target.name);
  };

  const save = (e) => {
    e.preventDefault();
    const data = {
      title: state.title,
      subTitle: state.subTitle,
      content: quillData,
    };
    Axios({
      method: "post",
      headers: { "content-type": "application/json" },
      url: `${POSTS_URL}`,
      data: JSON.stringify(data),
      dataType: "json",
    })
      .then(function (res) {
        console.log("결과값" + res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        type="text"
        name="title"
        value={state.title}
        onChange={handleChange}
      />
      <SubInput
        placeholder="소제목을 입력하세요"
        type="text"
        name="subTitle"
        value={state.subTitle}
        onChange={handleChange}
      />
      <Line></Line>
      <QuilWrapper>
        <div ref={quillElement} />
      </QuilWrapper>
      <RoundBtnWrap>
        <RoundBtn type="submit" value="submit" onClick={save}>
          저장
        </RoundBtn>
      </RoundBtnWrap>
    </EditorBlock>
  );
};

export { QuilWrapper };
export default React.memo(Editor);
