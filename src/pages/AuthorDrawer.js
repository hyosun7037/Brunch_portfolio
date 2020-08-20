// 작가의 서랍 페이지
import React, { Component } from 'react';
import Header from 'components/Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthrorWriting from 'components/authorContents/AuthrorWriting';
import { Wrapper, DrawerBtn } from 'styles/StyledComponentAll';
import { POSTS_URL } from 'config';
import { DrawerBanner } from 'images/ImgAll';

// 활성화 되면 스타일 적용
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

    getApi = () => { axios.get(`${POSTS_URL}`) 
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
                <DrawerBanner />
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