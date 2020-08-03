import React from 'react';
import styled from "styled-components";

const ImgUrl = styled.img`
  background-image:url('http://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v8_181004_v2.png');
`;

const url = (url) => {
    return (
        <>
            <ImgUrl url={url}/>
        </>
    );
};

export default url;