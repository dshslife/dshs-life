import React from 'react';
import styled from '@emotion/styled';
import {TextField} from '@material-ui/core';
import {Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DefaultView from './DefaultView';
const useStyles = makeStyles({
  table: {
    boxShadow: "none",
  },
});
export function AlarmSong() {
  const classes = useStyles();
  return (
    <ParentDiv>
      <Card>
        <MainText>
          알림송 신청
        </MainText>
        <TextField
          fullWidth={true}
          label="노래이름"
          id="standard-basic"  />
        <DSButton>
          <Button variant="success">제출하기</Button>
        </DSButton>
        
      </Card>
      <Card>
        <MainText>
          2020년 04월 08일 현재 알림송 차트
        </MainText>
        많은 신청 부탁드립니다
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="알림송 차트">
            <TableHead>
              <TableRow>
                <TableCell>노래 이름</TableCell>
                <TableCell align="right">총 신청수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"대전대신고 교가"}>
                <TableCell component="th" scope="row">
                  {"대전대신고 교가"}
                </TableCell>
                <TableCell align="right">{"20만회"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </ParentDiv>
  )
}

const ParentDiv = styled.div`
  width: 100%;
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  font-family: 'NanumSquare', sans-serif;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  margin-top: 5px;
  background: white;
`;

const DSButton = styled.div`
  margin-top: 20px;
`;

const MainText = styled.text`
  font-size: 25px;

`;

export default function Views() {
  return DefaultView(AlarmSong);
}