import React, { Component } from 'react';
import Axios from 'axios';
import AuthorDrawer from 'pages/AuthorDrawer';
import PostsDto from '../components/authorContents/AuthrorWriting';

class LinkData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    getApi = () => { Axios.get("http://localhost:8080/brunch/posts") 
    .then(res => {return this.setState({ data: res.data }) }) 
    .catch(res => console.log(res)) }

    
    componentDidMount(){
        this.getApi();
    }
    render(){
      const {data} = this.state;
    return(
    <div>
        {data.map(post =>(
            <PostsDto
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            subTitle={post.subTitle}
            content={post.content}
            />
        ))}
    </div>
    );
  }
}
export default LinkData;
