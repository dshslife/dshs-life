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

export function Menu() {
  return (
    <ParentDiv>
      <MainMenuDiv>
        <CardCafeteria>
          2020년 4월 14일
          <div />
          금요일
          <div />
          아침 7:40~
          <div />
          우유
          <div />
          간장계장
          <div />
          김밥
        </CardCafeteria>
        <MenuLeftDiv>
        <CardRightFirst>
          <IconImage src={go}/>
          <MenuText>
            외박신청
          </MenuText>
        </CardRightFirst>
        <CardRight>
          <IconImage src={cancel}/>
          <MenuText>
            분실물 안내
          </MenuText>
        </CardRight>
        </MenuLeftDiv>
      </MainMenuDiv>

      <MainMenuDiv>
        <Card>
          <IconImage src={bellblack}/>
          <MenuText>
            급식 안내
          </MenuText>
          
        </Card>
        <CardRight>
          <IconImage src={alarm}/>
          <MenuText>
            알림송 신청
          </MenuText>
          
        </CardRight>
      </MainMenuDiv>
      <MainMenuDiv>
        <Card>
          <IconImage src={reward}/>
          <MenuText>
            상벌점 안내
          </MenuText>
        </Card>
        <CardRight>
          <MenuText>
            준비중
          </MenuText>
          
        </CardRight>
      </MainMenuDiv>
    </ParentDiv>
  );
}
const ParentDiv = styled.div`
  width: 100%;
`;
const MenuLeftDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 100vh;
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  font-family: 'NanumSquare', sans-serif;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  padding: 20px;
  background: white;
`;

const CardCafeteria = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  background: #43D2A0;
  color: white;
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 20px;
  background: white;
  margin-left: 5px;
`;

const CardRightFirst = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 20px;
  background: white;
  margin-left: 5px;
  margin-bottom: 5px;
`;
const MenuText = styled.text`
  font-size: 18px;
  margin-left: 15px;
`;
const IconImage = styled.img`
  width: auto; height: auto;
  max-width: 60px;
  max-height: 60px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  height: 65px;
  padding-left: 15%;
  margin: 5px;
  background: white;
`;
const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px;
  background: white;
  width: 100%;
  
`;

const NameText = styled.text`
  font-size: 20px;
  margin: 2px;
`;

const SubNameText = styled.text`
  font-size: 15px;
  margin: 2px;
  color: #81f6cd;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  align-items: center;
`;
const SubMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
`;
const Profile = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
`;

const MainMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 3px;
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