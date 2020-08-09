import React, { useRef, useEffect } from "react";
import Header from "components/Header/Header";
import styled from "styled-components";
import { ScreenOut } from "pages/Main";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 940px;
  padding: 275px 0 227px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: "Noto Sans KR";
  margin: 0 auto;
`;

const BoxInner = styled.div`
  height: 440px;
  width: 940px;
  margin: 0 auto;
`;

const WrapSerach = styled.div`
  padding: 0;
  border-bottom: 1px solid #333;
`;

const TxtSearch = styled.input`
  font-size: 30px;
  letter-spacing: -1px;
  border: 0;
  font-family: "Noto Sans KR";
  outline: 0;
  color: #333;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const SearchForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSearch = styled.button`
  background-image: url("//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4.png");
  background-color: rgba(0, 0, 0, 0);
  background-position: -30px 0;
  border: none;
  display: block;
  width: 22px;
  height: 22px;
`;

const IcoSearch = styled.span`
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const SuggestGuide = styled.div`
  width: 949px;
  margin: 65px auto 0;
  text-align: center;
`;

const MoveUp = styled.div`
  transition: opacity 0.2s ease-out 0s, transform 0.5s ease-out 0s;
`;

const WrapList = styled.div`
  overflow: hidden;
  width: 940px;
  margin: 45px auto 0;
`;

const DescG = styled.p`
  padding: 0 0 12px;
  font-size: 28px;
  color: #333;
  font-weight: 300;
  b {
    color: #00c6bd;
    font-weight: 300;
  }
`;

const RecKeyword = styled.button`
  display: inline-block;
  margin: 0 4px;
  padding: 4px 14px;
  font-size: 15px;
  color: #00c6bd;
  border: 1px solid #56ddd5;
  border-radius: 24px;
  line-height: 22px;
  background-color: #fff;
  font-weight: 600;
`;

const ThumbImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
`;

const TitWriter = styled.strong`
  display: block;
  padding: 15px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  text-align: center;
  font-family: "Noto Sans KR";
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
`;

const TxtWriter = styled.span`
  width: 140px;
  padding: 3px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  text-align: center;
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RecList = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    width: 140px;
    height: 198px;
    vertical-align: top;
    text-align: center;
    font-family: "Noto Sans KR";
  }
`;

const Search = () => {
  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, [searchInput]);
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
                      ref={searchInput}
                    />
                    {/* <input type="text" placeholder="검색어를 입력해 주세요"/> */}
                    {/* <input type="hidden" placeholder="검색어를 입력해 주세요"/> */}
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
