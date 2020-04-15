import React from 'react';
import styled from '@emotion/styled';
import DefaultView from './DefaultView';
export function CafeteriaPage() {
  return (
    <ParentDiv>
      <Card>
        급식안내
      </Card>
      <CardCafeteria>
        급식안내
        <RiceMenuContainer>
          <Section>
            안녕하세요
          </Section>
          <Section>
            안녕하세요
          </Section>
          <Section>
            안녕하세요
          </Section>
        </RiceMenuContainer>
      </CardCafeteria>
    </ParentDiv>
  );
}


const ParentDiv = styled.div`
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  margin-top: 5px;
  background: white;
`;

const CardCafeteria = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 3px 3px 70px 5px gray;
  padding: 20px;
  background: #43D2A0;
  color: white;
`;
const RiceMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default function Cafeteria() {
  return DefaultView(CafeteriaPage);
}