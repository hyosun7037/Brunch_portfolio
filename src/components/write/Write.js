import React from "react";
import Editor from "./Editor";
import WriteHeader from "../Header/WriteHeader";
// import Header from "../Header/Header";
// import TagBox from "./TagBox";
// import EditorContainer from "containers/write/EditorContainer";
import TagBoxContainer from "containers/write/TagBoxContainer";
// import WriteActionButtonsContainer from "containers/write/WriteActionButtonsContainer";

const Write = () => {
  return (
    <>
      <WriteHeader />
      {/* <EditorContainer /> */}
      <Editor />
      <TagBoxContainer />
      {/* <TagBox /> */}
    </>
  );
};

export default Write;
