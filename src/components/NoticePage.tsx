import React, {useState} from 'react';
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
  const [notice, setNotice] = useState([{
    id: 214,
    title: "기숙사 폐쇄 예정"
  }]);
  return (
    <ParentDiv>
      <Card>
        <MainText>
          <div>
          공지사항
          </div>
          <DSButton>
            <Button variant="success">새글 작성</Button>
          </DSButton>
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
              {
                notice.map((item) => (
                  <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.title}</TableCell>
              </TableRow>
                ))
              }
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
  margin-left: auto;
  margin-right: 20px;
`;

const MainText = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export default function Views() {
  return DefaultView(NoticePage);
}