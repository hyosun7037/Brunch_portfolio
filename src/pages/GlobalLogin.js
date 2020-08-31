// 공통 로그인 페이지
import React from "react";
import Header from "components/Header/Header";
import "styles/global__login.css";

const { Kakao } = window;
const GlobalLogin = ({ history }) => {
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log("authObj : ", authObj);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response) {
            console.log("닉네임 : ", response.kakao_account.profile.nickname);
            console.log("이메일 : ", response.kakao_account.email);
            console.log("id : ", response.id);
            const email = response.kakao_account.email;
            fetch("http://192.168.0.101:8080/brunch/oauth/jwt/kakao", {
              method: "post",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Authorization":"Bearer "+ authObj.access_token
              },
              body: JSON.stringify(response),
              dataType: "text/plain",
            })
              .then(function (jwtToken) {
                return jwtToken.text();
              })
              .then(function (jwtToken) {
                // const email = response.kakao_account.email;
                // localStorage.setItem("Authentication", "Bearer " + jwtToken);
                localStorage.setItem("Authentication", jwtToken);
                localStorage.setItem("Email", email);
                alert("작가님 환영합니다!");
                history.push("/");
                console.log(jwtToken);
              });
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };
  return (
    <>
      <Header></Header>
      <main>
        <article style={{ height: "100%" }}>
          {/* <h2>브런치 로그인</h2> */}
          <div className="wrap__theme">
            <div className="join_theme">
              <div className="motion_set1">
                <div className="wrap_joinmsg wrap_joinmsg1">
                  <strong className="tit_join">
                    당신에게 영감을 주는 작품을 추천합니다.
                  </strong>
                  <p className="txt_join">
                    작가들의 다양한 경험을
                    <br />
                    글로 만나보세요.
                  </p>
                </div>
                <div className="obj_element1_1"></div>
                <div className="obj_element1_2"></div>
              </div>

              <div className="motion_set2">
                <div className="wrap_joinmsg wrap_joinmsg2">
                  <strong className="tit_join">
                    새 글이 기다려진다면 구독하세요
                  </strong>
                  <p className="txt_join">
                    작가의 매거진을 구독하고
                    <br />새 글을 받아보세요.
                  </p>
                </div>
                <div className="obj_element2_1"></div>
                <div className="obj_element2_2"></div>
              </div>

              <div className="motion_set3">
                <div className="wrap_joinmsg wrap_joinmsg3">
                  <strong className="tit_join">
                    새 글이 기다려진다면 구독하세요
                  </strong>
                  <p className="txt_join">
                    좋은 작품을 만나면 라이킷하고
                    <br />또 꺼내 읽으세요.
                  </p>
                </div>
                <div className="obj_element3_1"></div>
                <div className="obj_element3_2"></div>
              </div>
            </div>
            <div className="layer_start layer_start_type1 sign_kakao show_motion">
              <span className="ico_brunch_v1 ico_signlogo"></span>
              <p className="txt_start">글이 작품이 되는 공간, 브런치</p>
              <ul className="list_start">
                <li>
                  <button
                    className="link_connect link_ka"
                    onClick={kakaoLoginClickHandler}
                  >
                    <span className="ico_brunch_v1 ico_ka"></span>
                    <span className="txt_connect txt_ka">
                      카카오계정으로 로그인
                    </span>
                  </button>
                </li>
                <li>
                  <a
                    href="/auth/facebook?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignin%3Dtrue%26url%3D%252F"
                    className="link_connect link_fb"
                    data-tiara-action-name="로그인 > 페이스북 로그인 클릭"
                    data-tiara-action-kind="Login"
                    data-tiara-layer="facebook"
                  >
                    <span className="ico_brunch_v1 ico_fb"></span>
                    <span className="txt_connect txt_fb">
                      페이스북으로 로그인
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/twitter?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignin%3Dtrue%26url%3D%252F"
                    className="link_connect link_tw"
                  >
                    <span className="ico_brunch_v1 ico_tw"></span>
                    <span className="txt_connect txt_tw">트위터로 로그인</span>
                  </a>
                </li>
                <li className="remember-me">
                  <span className="choice_comm choice_checkbox"></span>
                  {/* <input
                    className="inp_comm"
                    type="checkbox"
                    name="agree"
                    id="rememberMe"
                  /> */}
                  {/* <span className="ico_signin"></span> */}
                  {/* <span>
                    <label
                      for="rememberMe"
                      className="lab_comm lab_login"
                      id="rememberMeLabel"
                    >
                      로그인 상태 유지
                    </label>
                  </span> */}
                </li>
              </ul>
              {/* <div className="wrap_account">
                <a href="/signin/find_account" className="find_user">
                  혹시 계정을 잊어버리셨나요?
                </a>
              </div> */}
              <div className="wrap_find_user">
                <a
                  href="/auth/kakao?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignup%3Dtrue%26url%3D%252F%26providerId%3Dkakao"
                  className="link_join"
                >
                  <span className="find_user">
                    {/* 카카오계정으로 간편하게 가입하세요. */}
                    <span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default GlobalLogin;
