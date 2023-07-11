import React from 'react'
import styled from "styled-components";

const ContainerHeader = styled.div`
.header-main-title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 60px;
  color: #fff;
  margin-top: 0;
}
.header-sub-title {
  display: flex;
  justify-content: center;
  h3 {
    color: #fff;
  }
}
`;


const Header = () => {
  return (
    <ContainerHeader>
      <h1 className='header-main-title'>TO DO LIST</h1>
      <div className='header-sub-title'>
      <h3>오늘은 {new Date().toDateString()}</h3>
      </div>
    </ContainerHeader>
  )
}

export default Header