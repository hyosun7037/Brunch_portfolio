import React from 'react';
import styled from "styled-components";

const FootBrunch = styled.div`
  width: 100%;
  height: 320px;
  background-color: #101010;
  padding-top: 48px;
`;

const InnerFoot = styled.div`
    position: relative;
    width: 960px;
    margin: 0 auto;
`;

const Footer = () => {
    return (
        <FootBrunch>
          <InnerFoot>
            <div className="wrap__info">
              <div className="txt__info">
                <span className="ico__brunch__logo"></span>
                <q className="txt__quo">You can make anything by writing</q>
                <span className="txt__by">C.S.Lewis</span>
              </div>
            </div>
            </InnerFoot>
            <div className="wrap__corp"></div>
        </FootBrunch>
    );
};

export default Footer;