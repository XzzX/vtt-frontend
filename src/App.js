import React from 'react';
import './App.css';

import { Link, Switch, Route, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Board from './Board.js';
import Content from './Content.js';
import Notes from './Notes.js';

function App() {
  let location = useLocation();

  return (
    <div className="app">
      <AppBar position="static">
        <Tabs value={location.pathname} centered>
          <Tab label="Game Board" value="/board" component={Link} to="board" />
          <Tab label="Content" value="/content" component={Link} to="content" />
          <Tab label="Notes" value="/notes" component={Link} to="notes" />
          <Tab label="Character" value="/character" component={Link} to="character" />
        </Tabs>
      </AppBar>
      <div className="viewport">
        <Switch>
          <Route path="/board"> <Board /> </Route>
          <Route path="/content"> <Content /> </Route>
          <Route path="/notes"> <Notes /> </Route>
          <Route path="/character"> <Board /> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
