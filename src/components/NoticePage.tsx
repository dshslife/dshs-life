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
export function NoticePage() {
  const classes = useStyles();
  return (
    <ParentDiv>
      <Card>
        <MainText>
          공지사항
        </MainText>
      </Card>
      <Card>
        <MainText>
          공지사항 : 항상 필독해주세요!
        </MainText>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="공지사항">
            <TableHead>
              <TableRow>
                <TableCell>게시물번호</TableCell>
                <TableCell align="right">제목</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"기숙사 폐쇄예정"}>
                <TableCell component="th" scope="row">
                  {"678"}
                </TableCell>
                <TableCell align="right">{"기숙사 폐쇄 안내"}</TableCell>
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
  return DefaultView(NoticePage);
}