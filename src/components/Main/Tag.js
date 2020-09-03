import React, { Component } from "react";
import styled from "styled-components";
import Axios from "axios";
import { POSTLIST_URL } from "config";

const KeyBtn = styled.button`
  cursor: pointer;
  &:hover {
    color: #00c6bd;
    font-weight: 400;
    border: 2px solid #00c6bd;
  }
`;

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTags1: [],
    };
  }
  // postlist data - get
  지구한바퀴세계여행 = () => {
    Axios.get(`${POSTLIST_URL}/지구한바퀴세계여행`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    }).then((res) => {
      console.log(`${POSTLIST_URL}/지구한바퀴세계여행`);
      return this.setState({ dataTags1: res.data });
    });
  };

  render() {
    const { dataTags1 } = this.state;
    const Tagtitle = dataTags1.title;
    console.log(dataTags1);
    console.log(Tagtitle);
    return (
      <>
        <KeyBtn
          className="keyword__item brunch__keyword__item"
          onClick={this.지구한바퀴세계여행}
        >
          <span className="keyword__item__txt">
            지구한바퀴
            <br />
            세계여행 {Tagtitle}
          </span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">그림, 웹툰</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">시사, 이슈</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">IT 트렌드</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">사진, 촬영</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">영화리뷰</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">오늘의 책</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">뮤직 인사이드</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">글쓰기</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">직장인 조언</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">스타트업</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">육아 이야기</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">요리, 레시피</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">건강, 운동</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">멘탈관리</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">디자인</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">문화, 예술</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">건축, 설계</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">인문학, 철학</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">역사</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">반려동물</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">캘리그라피</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">사랑, 이별</span>
        </KeyBtn>
        <KeyBtn className="keyword__item brunch__keyword__item">
          <span className="keyword__item__txt">감성 에세이</span>
        </KeyBtn>
      </>
    );
  }
}

export default Tag;
