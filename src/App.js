import { useReducer, useRef } from 'react';
import './App.css';
import Header from './Components/Header';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';
import styled from "styled-components";

const ContainerApp = styled.div`
font-family: 'NeoDunggeunmoPro-Regular';
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
  .App {
    width: 500px;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 10px;
  
    display: flex;
    flex-direction: column;
    gap: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case "CREATE" : {
      return [action.newItem, ...state]
    }
    case "UPDATE": {
      return state.map((it) => (
        it.id === action.targetId ? {...it, isDone: !action.isDone} : it
      ))
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId)
    }
    default:
      return state;
  }
}

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  }
]


function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);


  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      }
    })
    idRef.current += 1;
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE", 
      targetId, 
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  }

  return (
    <ContainerApp>
      <div className='App'>
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
    </ContainerApp>
  );
}

export default App;
