import React from "react";
import Header from "../components/Header/Header";
import "../styles/global__login.css";

const GlobalLogin = () => {
  return (
    <>
      <Header></Header>
      <main>
        <article style={{ height: "100%" }}>
          {/* <h2>브런치 로그인</h2> */}
          <div className="wrap__theme">
            <div class="join_theme">
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
                  <a
                    href="/auth/kakao?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignin%3Dtrue%26url%3D%252F%26providerId%3Dkakao"
                    class="link_connect link_ka"
                    data-tiara-action-name="로그인 > 카카오계정 로그인 클릭"
                    data-tiara-action-kind="Login"
                    data-tiara-layer="kakao"
                  >
                    <span class="ico_brunch_v1 ico_ka"></span>
                    <span class="txt_connect txt_ka">
                      카카오계정으로 로그인
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/facebook?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignin%3Dtrue%26url%3D%252F"
                    class="link_connect link_fb"
                    data-tiara-action-name="로그인 > 페이스북 로그인 클릭"
                    data-tiara-action-kind="Login"
                    data-tiara-layer="facebook"
                  >
                    <span class="ico_brunch_v1 ico_fb"></span>
                    <span class="txt_connect txt_fb">페이스북으로 로그인</span>
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
                  <input
                    className="inp_comm"
                    type="checkbox"
                    name="agree"
                    id="rememberMe"
                  />
                  <span className="ico_signin"></span>
                  <span>
                    <label
                      for="rememberMe"
                      className="lab_comm lab_login"
                      id="rememberMeLabel"
                    >
                      로그인 상태 유지
                    </label>
                  </span>
                </li>
              </ul>
              <div className="wrap_account">
                <a href="/signin/find_account" className="find_user">
                  혹시 계정을 잊어버리셨나요?
                </a>
              </div>
              <div className="wrap_find_user">
                <a
                  href="/auth/kakao?url=https%3A%2F%2Fbrunch.co.kr%2F%2Fsignin%2Ffinish%3Fsignup%3Dtrue%26url%3D%252F%26providerId%3Dkakao"
                  className="link_join"
                >
                  <span class="find_user">
                    카카오계정으로 간편하게 가입하세요.
                    <span>가입하기</span>
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
