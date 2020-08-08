import React from "react";
import { Switch } from "antd";
import Profile from "../../pages/Profile";
import Write from "../write/Write";
import Detail from "../../pages/Detail";
import BrunchNow from "../../pages/BrunchNow";
import GlobalLogin from "../../pages/GlobalLogin";
import Search from "../../pages/Search";
import Main from "../../pages/Main";

const Route = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/writer" component={NavWriter} /> */}
        {/* <Route path="/nowriter" component={NavNonmem} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/write" component={Write} />
        <Route path="/now" component={BrunchNow} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={GlobalLogin} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Main} exact={true} />
      </Switch>
    </>
  );
};

export default Route;
