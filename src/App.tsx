import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import { Switch, Route, BrowserRouter, Redirect, Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import history from './utils/history';
import DefaultView from './components/DefaultView';
import {Menu} from './components/Menu';
import LostAndFound from './components/LostAndFound';
import NoticePage from './components/NoticePage';
import AlarmSong from './components/AlarmSong';
import Cafeteria from './components/CafeteriaPage';
import Board from './components/Board';
export default function App() {
  const isEdge = window.navigator.userAgent.indexOf('Edge') !== -1;
  const isIE = window.navigator.userAgent.indexOf('Trident') !== -1 && !isEdge;
  return isIE ? (
    <div>
      Goodbye, Internet Explorer
    </div>
  ):(
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={MainPage}/>
        <PrivateRoute exact path="/notice" component={NoticePage} />
        <PrivateRoute exact path="/lost" component={LostAndFound} />
        <PrivateRoute exact path="/alarm" component={AlarmSong} />
        <PrivateRoute exact path="/cafeteria" component={Cafeteria} />
        <PrivateRoute exact path="/board" component={Board} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}