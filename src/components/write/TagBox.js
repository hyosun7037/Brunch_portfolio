import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
// import { VIEWTAG_URL } from 'config';

const TagBoxBlock = styled.div`
  /* width: 100%; */
  max-width:920px;
  margin:0 auto;
  border-top: 1px solid #bfbfbf;
  padding-top: 2rem;
  padding-bottom:2rem;
  /* display:flex;
  justify-content:flex-end; */
  h4 {
    color: #bfbfbf;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  width:300px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  border: 1px solid #bfbfbf;
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: #666;
    color: white;
    font-weight: bold;
    &:hover {
      background: #bfbfbf;
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: #bfbfbf;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// memo를 사용하여 tags값이 바뀔 때만 리렌더링 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag]
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);


// const save = (e) => {
//   e.preventDefault();
//   const data = {
//     tag: localTags,
//   }
//   axios({
//     method:'post',
//     headers: { 'content-type': 'application/json' },
//     url:`${VIEWTAG_URL}`,
//     data : JSON.stringify(data),
//     dataType:'json'
//   }).then(function(res){
//     console.log('결과값' + res);
//     console.log('결과값' + localTags);
//   }).catch(function(err){
//     console.log(err);
//   });
// }


  return (
    <TagBoxBlock>
      {/* <h4>태그</h4> */}
      <TagForm onSubmit={onSubmit}>
        <input
          name="tag"
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit" value="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
