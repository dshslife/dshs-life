import React, { useState, useEffect } from 'react';
import history from '../utils/history';
import { ToastContainer, toast } from 'react-toastify';
import styled from '@emotion/styled';
import dslogo from './logo.png';
import {NavigationButton} from './NavigationButton';
import {Link} from 'react-router-dom';
export default function NavBar() {

  const [ name, setName ] = useState('happycastle');
  const handleSubmit = () => {
    toast(`로그아웃 되었습니다`);
    localStorage.removeItem('authToken');
    history.push('/login');
  }
  const handleNavigation = (url: string) => {
    history.push(url);
    console.log('print!');
  }

  return (
    <NavigationBar>
      <Link to='/'>
        <NavigationButton value={"홈"} isEnabled={true}></NavigationButton>
      </Link>
      <Link to='/notice'>
        <NavigationButton value={"공지사항"} isEnabled={false}></NavigationButton>
      </Link>
      <Link to='/alarm'>
        <NavigationButton value={"게시판"} isEnabled={false} ></NavigationButton>
      </Link>
      <LogoDiv>
        <Link to='/'>
          <Logo src={dslogo}/>
        </Link>
      </LogoDiv>
      
      
    </NavigationBar>
  );
}

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px;
  box-shadow: 3px 3px 70px 5px gray;
  background: white;
  width: 100%;
  
`;

const LogoDiv = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;
const Logo = styled.img`
  width: auto; height: auto;
  max-width: 250px;
  max-height: 250px;
  margin: 10px;
`;