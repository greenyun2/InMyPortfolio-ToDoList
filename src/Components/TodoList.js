import React from 'react'
import TodoItem from './TodoItem'
import styled from "styled-components";
import { useState, useMemo } from 'react';

const ContainerList = styled.div`
  h4 {
    color: #fff;
  }
  .analyzeTodo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      border-bottom: 1px solid #fff;
      margin-top: 5px;
      color: #fff;
    }
  }
  .list_input {
    margin-bottom: 20px;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(220, 220,220);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px 0 15px 15px;
    font-family: 'NeoDunggeunmoPro-Regular';
    
    &:focus {
      outline: none;
      border-bottom: 1px solid #1f93ff;
    }
  }
  .list_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState('');
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => 
      it.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const analyzeTodo = useMemo(() => {
    console.log("");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <ContainerList>
      <h4>Todo List 📋</h4>
      <div className='analyzeTodo'>
        <div className='total-count'>총계수 : {totalCount}</div>
        <div className='done-count'>완료된 할 일 : {doneCount} </div>
        <div className='not-done-count'>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
      className='list_input' 
      value={search}
      onChange={onChangeSearch}
      placeholder='검색어를 입력하세요'/>
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </ContainerList>
  )
}

export default TodoList