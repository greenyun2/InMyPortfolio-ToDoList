import React, { useRef, useState } from 'react'
import styled from "styled-components";

const ContainerEditor = styled.div`
  .editor_wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    input {
      flex: 1;
      box-sizing: border-box;
      border: 1px solid rgb(220, 220, 220);
      border-radius: 5px;
      padding: 15px;
      font-family: 'NeoDunggeunmoPro-Regular';
      &:focus {
        outline: none;
        border: 1px solid #1f93ff;
      }
    }
    button {
      cursor: pointer;
      width: 80px;
      border: none;
      background-color: #222;
      color: #fff;
      border-radius: 5px;
      font-family: 'NeoDunggeunmoPro-Regular';
    }
  }
  h4 {
    color: #fff;
  }
`;

const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState('');

  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }
  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit()
    }
  }

  return (
    <ContainerEditor>
      <h4>새로운 ToDo작성하기</h4>
      <div className='editor_wrapper'>
        <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 Todo...'
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </ContainerEditor>
  )
}

export default TodoEditor;