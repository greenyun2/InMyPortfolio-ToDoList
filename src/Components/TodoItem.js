import React from 'react'
import styled from "styled-components";


const ContainerItem = styled.div`
display: flex;
align-items: center;
gap: 20px;
padding-bottom: 20px;
border-bottom: 1px solid rgb(240, 240, 240);

.checkbox_col {
  width: 20px;
}
.title_col {
  flex: 1;
  color: #fff;
}
.date_col {
  font-size: 14px;
  color: #fff;
}
.btn_col > button {
  cursor: pointer;
  color: #222;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  padding: 10px;
}
`;

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  const onClickCheck = () => {

  }

  return (
    <ContainerItem>
      <div className='checkbox_col'>
        <input 
        checked={isDone}
        onChange={onChangeCheckBox}
        type='checkbox'
        />
      </div>

      <div className='title_col'>
        {content}
      </div>

      <div className='date_col'>
        {new Date(createdDate).toLocaleDateString()}
      </div>

      <div className='btn_col'>
      <button onClick={onClickDelete}>삭제</button>
      </div>
    </ContainerItem>
  )
}

export default TodoItem;