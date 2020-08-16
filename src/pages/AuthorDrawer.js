// 작가의 서랍 페이지
import React, { Component } from 'react';
import Header from 'components/Header/Header';
import styled from "styled-components";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthrorWriting from 'components/authorContents/AuthrorWriting';

const Wrapper = styled.div`
  width:700px;
  margin:0 auto;
  img{
      width:100%;
  }
`;

const DrawerBtn = styled.button`
  outline:none;
  border:none;
  color:#666;
  font-size:17px;
  letter-spacing:-1px;
  white-space:nowrap;
  margin-right:10px;
`;

const active = {
    color:'#00c3bd',
    borderBottom:'2px solid #00c3bc',
    marginTop:'2px'
}

class AuthorDrawer extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    getApi = () => { axios.get("http://localhost:8080/brunch/posts") 
    .then(res => {return this.setState({ data: res.data }) }) 
    .catch(res => console.log(res)) }

    componentDidMount(){
        this.getApi();
    }
    render(){
        const {data} = this.state;
      return(
        <div>
        <Header searchDisplay="none" />

        {/* 작가의 서랍 메뉴 */}
        <Wrapper style={{textAlign:'center'}}>
            <DrawerBtn style={active}>저장글</DrawerBtn>
            <DrawerBtn>발행취소글</DrawerBtn>
        </Wrapper>

        {/* 작가의 서랍 배너 */}
        <Wrapper>
            <Link to="/" style={{display:'block', marginTop:'50px', borderBottom:'1px solid #eee'}}>
                <img src="https://t1.daumcdn.net/brunch/static/img/banner/pc_ready_banner_type2@2x.png" alt="브런치 작가"/>
            </Link> 
        </Wrapper>
        {/* 목록뿌리기 */}
        {data.map(post =>(
            <AuthrorWriting
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                subTitle={post.subTitle} 
                postType={post.postType}
                content={post.content}
             />
        ))}
        
    </div>
      );
}
}
export default AuthorDrawer;