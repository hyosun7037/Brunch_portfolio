import React, { Component } from "react";
import Axios from "axios";
import { COMMENTSAVE_URL } from "config";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: [],
      btn: "게시",
      content: "",
    };
  }
  num = 0;

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!this.state.comment) {
        e.preventDefault();
      } else {
        this.handleComment();
      }
    }
  };

  handleComment = () => {
    this.setState({
      comments: this.state.comments.concat({
        num: this.num,
        comment: this.state.comment,
      }),
      comment: "",
    });
    this.num += 1;
  }; // 게시 버튼이 클릭되면 댓글의 state를 변경하는 함수를 실행 .concat을 활용하여 댓글내용을 합쳐서 반환하도록 하였다.

  handleRemove = (num) => {
    const { comments } = this.state;
    const nextComments = comments.filter((comment) => {
      return comment.num !== num;
    });
    this.setState({
      comments: nextComments,
    });
  }; //댓글이 게시될 때 삭제 버튼도 함께 생성되도록 한 후에 삭제 기능까지 구현해주었다. 이 때 filter함수를 사용해 앞에서 num key를 지정해주었고 num이 일치하지 않는 항목을 제거해서 새로운 배열을 반환하도록 하였다.

  //  댓글 저장

  render() {
    const { comments } = this.state;
    return (
      <div>
        <ul>
          {comments.map((commentText) => {
            return (
              <li className="feedCommentList" key={commentText.num}>
                <span className="user__name">sunny</span>
                {commentText.comment}
                <button
                  className="delBtn"
                  onClick={() => this.handleRemove(commentText.num)}
                >
                  X
                </button>
              </li>
            ); //.map함수를 사용해서 댓글들을 ul안에 li태그로 생성되도록 만들어주었고, 삭제 버튼을 포함시켜서 버튼 클릭 시 삭제 기능도 추가해주었다.
          })}
        </ul>

        <div className="feed__comment">
          <input
            value={this.state.comment}
            onChange={this.handleChange} // 댓글 값 받아오기
            onKeyUp={this.handleKeyPress} //엔터 키로 함수 실행
            type="text"
            className="comment__text"
            placeholder="댓글 달기"
          />
          <button
            onClick={
              !this.state.comment
                ? (e) => {
                    e.preventDefault();
                  }
                : this.handleComment
            } //댓글 input 창에 내용이 없으면 함수 이벤트 막아주기
            className={
              this.state.comment.length > 1
                ? "comment__post-btn-clicked"
                : "comment__post-btn"
            }
          >
            {this.state.btn}
          </button>
        </div>
      </div>
    );
  }
}
export default Comment;
