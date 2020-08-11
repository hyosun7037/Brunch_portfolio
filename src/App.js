import React from "react";
import Main from "pages/Main";
import NavWriter from "components/NavWriter";
// import NavNonmem from "components/NavNonmem";
import { Route, Switch } from "react-router-dom";
import BrunchNow from "pages/BrunchNow";
import GlobalLogin from "pages/GlobalLogin";
import Write from "components/write/Write";
import Profile from "pages/Profile";
import Search from "pages/Search";
import Detail from "pages/Detail/Detail";
import KeywordDetail from "pages/Detail/KeywordDetail";


const App = () => {
  return (
    <>
      <Switch>
        <Route path="/writer" component={NavWriter} />
        {/* <Route path="/nowriter" component={NavNonmem} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/write" component={Write} />

        <Route path="/now" component={BrunchNow} />
        <Route path="/detail" component={Detail} />
        <Route path="/Keyword_detail" component={KeywordDetail} />
        <Route path="/login" component={GlobalLogin} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Main} exact={true} />
      </Switch>
    </>
  );
};

export default App;