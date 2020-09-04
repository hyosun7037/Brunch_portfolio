import React, { Component } from "react";
import {
  ScreenOut,
  DetailComment,
  CommentHead,
  CommentContent,
  WrapCommentWrite,
  LinkProfile,
  WriteAppend,
  BtnDefault,
} from "styles/StyledComponentAll";
import Axios from "axios";
import { USERPROFILE_URL } from "config";
import { COMMENTSAVE_URL } from "config";
import { COMMENT_URL } from "config";
import FeedCommentList from "./FeedCommentList";
import FeedCommentOtherList from "./FeedCommentOtherList";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: [],
      dataProfileInfo: [], // 유저프로필
      dataComments: [], // 댓글내용 select
      content: "", // 댓글내용 insert
    };
  }
  // 초기화
  num = 0;

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      comment: e.target.value,
    });
  };

  handleComment = (e) => {
    e.preventDefault();
    this.setState({
      // 게시 버튼이 클릭되면 댓글의 state를 변경하는 함수를 실행 .concat을 활용하여 댓글내용을 합쳐서 반환
      comments: this.state.comments.concat({
        num: this.num,
        comment: this.state.comment,
      }),
      comment: "",
    });
    this.num += 1;
  };

  // 유저 프로필 이미지 호출
  ProfileInfoApi = () => {
    Axios.get(`${USERPROFILE_URL}`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(res);
        return this.setState({ dataProfileInfo: res.data });
      })
      .catch((res) => console.log(res));
  };

  // 댓글 뿌리기
  CommentApi = () => {
    Axios.get(`${COMMENT_URL}/1`, {
      headers: {
        Authorization: localStorage.getItem("Authentication"),
      },
    })
      .then((res) => {
        console.log(localStorage.getItem("Authentication"));
        return this.setState({ dataComments: res.data });
      })
      .catch((res) => console.log(res));
  };

  // 댓글 저장
  save = (e) => {
    e.preventDefault();
    const data = {
      // 앞의 형식이 DB와 같아야 통신성공
      content: this.state.comment,
    };
    Axios({
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("Authentication"),
      },
      // + postId 붙여서 보내기!!
      url: `${COMMENTSAVE_URL}/1`,
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

  componentDidMount() {
    this.ProfileInfoApi();
    this.CommentApi();
  }

  render() {
    const { comments } = this.state; // 댓글내용
    // 프로필정보
    const { dataProfileInfo } = this.state;
    const profileImageText = dataProfileInfo.profileImage;
    const profileNameText = dataProfileInfo.nickName;
    // 다른유저 댓글내용
    const { dataComments } = this.state;
    console.log("dataComments:::" + dataComments);
    const commentsContent = dataComments.content;
    console.log("commentsContent:::" + commentsContent);

    const comment__text = {
      width: "600px",
      border: "0px solid #f4f4f4",
      outline: "none",
      paddingLeft: "10px",
      paddingTop: "20px",
    };

    return (
      <>
        <DetailComment>
          <ScreenOut>댓글</ScreenOut>
          <CommentHead>
            <strong>
              댓글<span>0</span>
            </strong>
          </CommentHead>
          {dataComments.map((commentOtherText) => {
            return (
              <FeedCommentOtherList
                key={commentOtherText.num}
                id={commentOtherText.id}
                comment={commentOtherText.comment}
              >
                {profileNameText}
              </FeedCommentOtherList>
            ); //.map함수를 사용해서 댓글들을 ul안에 li태그로 생성되도록 만들어주었고, 삭제 버튼을 포함시켜서 버튼 클릭 시 삭제 기능도 추가해주었다.
          })}
          {comments.map((commentText) => {
            return (
              <FeedCommentList
                key={commentText.num}
                id={commentText.id}
                comment={commentText.comment}
              >
                {profileNameText}
              </FeedCommentList>
            ); //.map함수를 사용해서 댓글들을 ul안에 li태그로 생성되도록 만들어주었고, 삭제 버튼을 포함시켜서 버튼 클릭 시 삭제 기능도 추가해주었다.
          })}
          <CommentContent>
            <div>
              <button>이전 댓글 보기</button>
            </div>
            <br />
          </CommentContent>
          <WrapCommentWrite>
            <LinkProfile>
              <img
                src={profileImageText}
                alt="프로필 이미지"
                width="42px"
                heigtht="42px"
              />
            </LinkProfile>
            <form method="post">
              <input type="hidden" name="sticker" />
              <div style={{ width: "600px" }}>
                <input
                  className="comment__text"
                  style={comment__text}
                  value={this.state.comment}
                  onChange={this.handleChange} // 댓글 값 받아오기
                  placeholder="공감과 응원의 댓글은 작가에게 큰 힘이 됩니다."
                  type="text"
                ></input>
                <WriteAppend>
                  <div
                    className="wrap__btn"
                    style={{ textAlign: "right", marginBottom: "15px" }}
                  >
                    <BtnDefault
                      type="submit"
                      value="submit"
                      onClick={this.save}
                      //   onClick={
                      //     !this.state.comment
                      //       ? (e) => {
                      //           e.preventDefault();
                      //         }
                      //       : this.handleComment
                      //   } //댓글 input 창에 내용이 없으면 함수 이벤트 막아주기
                    >
                      확인
                    </BtnDefault>
                  </div>
                </WriteAppend>
              </div>
            </form>
          </WrapCommentWrite>
        </DetailComment>
      </>
    );
  }
}

export default Comment;
