import React from "react";
import '../styles/main.css';
import NavWriter from "../components/NavWriter";

const Main = () => {
  return (
  <>
  <NavWriter></NavWriter>
  <div className="wrap__banner">
    <h2 className="screen__out">배너</h2>
    <ul className="list__banner">
      <li className="item__banner">
        <a href="#" className="link__banner">
          <img className="txt__banner" src="https://t1.daumcdn.net/section/oc/f105e8040e3b46de8492b4815a95092c" ></img>
        </a>
        {/* <a href="#">작은 배너</a> */}
      </li>
    </ul>
  </div>{/*탑배너영역*/}

  <div className="main__container">
    <header>
      <div className="service__header top">
        <div className="header__inner">
          <div clasName="sidebtn__logo">
              <button className="sidebtn"></button> 
              <h1 className="logo"></h1>
          </div> {/*햄버거버튼, 로고*/}
          <div clasName="applybtn__search">
              <button className="applybtn">작가신청</button>
              <button className="search"></button>
          </div> {/*버튼, 검색*/}
        </div>
      </div>
    </header>
    <main></main>
    <footer></footer>
  </div>{/*전체영역*/}
  </>
  );
};

export default Main;
