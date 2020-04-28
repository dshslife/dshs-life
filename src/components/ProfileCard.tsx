import React, { useState, useEffect } from 'react';
import logo from './dshs_logo.png';
import { ToastContainer, toast } from 'react-toastify';
import styled from '@emotion/styled';

export default function ProfileCard() {

  return (
    <Profile>
          <ProfileCard1>
            <NameText>
              손성민
            </NameText>
            <SubNameText>
              2학년 9반 17번
            </SubNameText>
          </ProfileCard1>
        </Profile>
  );
}


const ProfileCard1 = styled.div`
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

const Profile = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
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
