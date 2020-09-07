import React, { useRef, useEffect, useState } from "react";
import Header from "components/Header/Header";
import { Link } from "react-router-dom";
import {
  ScreenOut,
  Box,
  BoxInner,
  WrapSerach,
  TxtSearch,
  SearchForm,
  ButtonSearch,
  IcoSearch,
  SuggestGuide,
  MoveUp,
  WrapList,
  DescG,
  RecKeyword,
  ThumbImg,
  TitWriter,
  TxtWriter,
  RecList,
} from "styles/StyledComponentAll";

const Search = () => {
  // const [data, setData] = useState({
  //   id: 0,
  //   title: "테스트1",
  //   content: "010-1234-5678",
  // });

  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, [searchInput]);

  // 변화값
  const handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  return (
    <>
      <Header searchposition="-90px 0" />
      <Box>
        <BoxInner>
          <div className="wrap__search__header">
            <WrapSerach>
              <ScreenOut>검색 키워드 입력창</ScreenOut>
              <SearchForm>
                <div>
                  <span>
                    <TxtSearch
                      placeholder="검색어를 입력해 주세요"
                      onChange={handleChange}
                      ref={searchInput}
                    />
                  </span>
                </div>
                <ButtonSearch>
                  <IcoSearch>검색</IcoSearch>
                </ButtonSearch>
              </SearchForm>
            </WrapSerach>
          </div>
          <SuggestGuide>
            <MoveUp>
              <DescG>
                책을<b>출간</b>한 작가들을 만나 보세요.
              </DescG>
              <RecKeyword>출간작가</RecKeyword>
              <RecKeyword>마케터</RecKeyword>
              <RecKeyword>카피라이터</RecKeyword>
            </MoveUp>
            {/* 작가 리스트 */}
            <WrapList>
              <RecList>
                <li className="move__up__late">
                  <Link to="/" className="link__g">
                    <ThumbImg
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mW7/image/Bb-mglsS0cKEgOK3ce4gjGmuZz0.jpg"
                      alt="작가이미지"
                    />
                    <TitWriter>김동진</TitWriter>
                    <TxtWriter>
                      취미는 '천천히', 특기는 '꾸준하게'입니다. 영화에 관해
                      생각하고 쓰고 말하고 있어요. 이메일: mapside2@naver.com
                    </TxtWriter>
                  </Link>
                </li>

                <li className="move__up__late">
                  <Link to="/" className="link__g">
                    <ThumbImg
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mW7/image/Bb-mglsS0cKEgOK3ce4gjGmuZz0.jpg"
                      alt="작가이미지"
                    />
                    <TitWriter>김동진</TitWriter>
                    <TxtWriter>
                      취미는 '천천히', 특기는 '꾸준하게'입니다. 영화에 관해
                      생각하고 쓰고 말하고 있어요. 이메일: mapside2@naver.com
                    </TxtWriter>
                  </Link>
                </li>

                <li className="move__up__late">
                  <Link to="/" className="link__g">
                    <ThumbImg
                      src="//img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mW7/image/Bb-mglsS0cKEgOK3ce4gjGmuZz0.jpg"
                      alt="작가이미지"
                    />
                    <TitWriter>김동진</TitWriter>
                    <TxtWriter>
                      취미는 '천천히', 특기는 '꾸준하게'입니다. 영화에 관해
                      생각하고 쓰고 말하고 있어요. 이메일: mapside2@naver.com
                    </TxtWriter>
                  </Link>
                </li>
              </RecList>
            </WrapList>
          </SuggestGuide>
          <div className="suggest__search"></div>
        </BoxInner>
      </Box>
    </>
  );
};

export default Search;
