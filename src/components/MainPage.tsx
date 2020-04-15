import React, { useState, useEffect } from 'react';
import logo from './dshs_logo.png';
import { ToastContainer, toast } from 'react-toastify';
import styled from '@emotion/styled';
import css from '@emotion/css';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import history from '../utils/history';
import {NavigationButton} from './NavigationButton';
import dslogo from './logo.png';
import go from '../icons/go.png';
import cancel from '../icons/cancel.png';
import bellblack from '../icons/bellblack.png';
import reward from '../icons/reward.png';
import alarm from '../icons/alarm.png';
import {Menu} from './Menu';
import {CafeteriaPage} from './CafeteriaPage';
import AlarmSong from './AlarmSong';
import NoticePage from './NoticePage';
import LostAndFound from './LostAndFound';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';
import {MainDiv, SubMainDiv, MainSection} from './styles';
export default function MainPage()
{
  const [ name, setName ] = useState('happycastle');
  const handleSubmit = () => {
    toast(`로그아웃 되었습니다`);
    localStorage.removeItem('authToken');
    history.push('/login');
  }
  return (
    <div>
      <ToastContainer />
      <MainDiv>
        <SubMainDiv>
          <MainSection>
            <NavBar />
            <Menu />
        <Button variant="primary" onClick={handleSubmit}>Logout</Button>
        </MainSection>
        <ProfileCard />
        </SubMainDiv>
        
      </MainDiv>
    </div>
  )
}



