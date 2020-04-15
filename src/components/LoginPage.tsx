import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import logo from './logo.png';
import './App.css';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { stringify } from 'querystring';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../utils/history';
import {Redirect} from 'react-router-dom';
import background from './background.png';
import {TextField} from '@material-ui/core';
import comma from './comma-left.png';
export default function LoginPage()
{
  const [name, setName] = useState('');
  const [ passwd, setPasswd ] = useState('');
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (name === "admin") {
      toast(`로그인 하신 것을 환영합니다! ${name}`);
      localStorage.setItem('authToken','happycastle');
      history.push('/');
    } else{
      toast(`비밀번호를 틀렸습니다!`);
    }
  }

  const handleButton = () => {
    if (name === "admin") {
      toast(`로그인 하신 것을 환영합니다! ${name}`);
      localStorage.setItem('authToken','happycastle');
      history.push('/');

    } else{
      toast(`비밀번호를 틀렸습니다!`);
    }
  }
  useEffect(() => {
    document.title = `Hello, ${name}`;
  });
  return localStorage.getItem('authToken') ? (
    <Redirect to={{pathname: "/", state: { from:"/login" }}}/>
  ):(
    <div className="App">
      <ToastContainer />
    <header className="App-header">
      <MainDiv>
        <LoginDiv>
          <Logo src={logo} />
          <ExplanText>로그인 하여 모든 서비스를 이용해 보세요</ExplanText>
          <Commaleft src={comma}/>
          <IntroText>대전대신고등학교</IntroText>
          <IntroText>기숙사생활을 더 쾌적하게~!</IntroText>
          <CommaRight src={comma}/>
        </LoginDiv>
        <LoginSection>
          <form onSubmit={handleSubmit} >
            <SubDiv>
              <TextField
              fullWidth={true}
              label="아이디"
              id="standard-basic" 
              value={name} 
              onChange={e => setName(e.target.value)}/>
            </SubDiv>
            <SubDiv>
              <TextField
              fullWidth={true}
              id="standard-basic"
              label="비밀번호"
              value={passwd} 
              onChange={e => setPasswd(e.target.value)}/>
            </SubDiv>
          </form>
          <DSButton>
            <Button variant="success" onClick={handleButton}>로그인</Button>
          </DSButton>
          
        </LoginSection>
      </MainDiv>
      
    </header>
    
  </div>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  box-shadow: 5px 5px 70px 5px gray;
  width: 45%;
  height: 400px;
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  font-family: 'NanumSquare', sans-serif;
`;
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%; 
  align-items: flex-start;
  
`;
const SubDiv = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  margin-top: 10px;
`;

const Logo = styled.img`
  width: auto; height: auto;
  max-width: 250px;
  max-height: 250px;
  margin-top: 5%;
  margin-left: 8.2%;
`;

const ExplanText = styled.text`
  color: black;
  margin-left: 1.5%;
  font-size: 13px;
  margin-left: 10%;
`;

const LoginSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Commaleft = styled.img`
  width: auto; height: auto;
  max-width: 100px;
  max-height: 100px;
  margin-top: 20%;
  margin-left: 10%;
`;

const IntroText = styled.text`
  font-size: 24px;
  font-family: 'NanumSquare', sans-serif;
  color: black;
  margin-left: 10%;
`;

const CommaRight = styled.img`
  width: auto; height: auto;
  max-width: 100px;
  max-height: 100px;
  margin-left: 70%;
  transform: rotate(180deg);
`;

const DSButton = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 30%;

  .btn-success {
    background-color: #43D2A0;
    border-color: #43D2A0;
  }
`;