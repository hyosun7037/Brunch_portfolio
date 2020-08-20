import React from "react";
import Main from "pages/Main";
// import NavWriter from "components/NavWriter";
// import NavNonmem from "components/NavNonmem";
import { Route, Switch } from "react-router-dom";
import BrunchNow from "pages/BrunchNow";
import GlobalLogin from "pages/GlobalLogin";
import Write from "components/write/Write";
import Profile from "pages/Profile";
import ProfileUpdate from "pages/ProfileUpdate";
import Search from "pages/Search";
import Detail from "pages/Detail/Detail";
import KeywordDetail from "pages/Detail/KeywordDetail";
import Author from "pages/Author";
import AuthorDrawer from "pages/AuthorDrawer";
import Library from "pages/Library";
// import LinkData from "assets/LinkData";


const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/writer" component={NavWriter} /> */}
        {/* <Route path="/nowriter" component={NavNonmem} /> */}
        {/* 프로필 */}
        <Route path="/profile" component={Profile} />
        {/* 프로필 편집 */}
        <Route path="/profile_update" component={ProfileUpdate} />
        {/* 글쓰기 */}
        <Route path="/write" component={Write} />
       
        {/* 작가의 서랍 */}
        <Route path="/ready" component={AuthorDrawer} />
        {/* 브런치 나우 */}
        <Route path="/now" component={BrunchNow} />
        {/* 글 읽는 서재 */}
        <Route path="/library" component={Library} />
        {/* 상세 */}
        <Route path="/detail" component={Detail} />
        {/* 키워드 상세 */}
        <Route path="/Keyword_detail" component={KeywordDetail} />
        {/* 작가소개 */}
        <Route path="/author" component={Author} />
        {/* 로그인 */}
        <Route path="/login" component={GlobalLogin} />
        {/* 검색 */}
        <Route path="/search" component={Search} />
        <Route path="/" component={Main} exact={true} />
      </Switch>
    </>
  );
};

export default Routes;