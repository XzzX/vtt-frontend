import React from 'react';
import './App.css';

import { Link, Switch, Route, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IconButton from '@material-ui/core/IconButton';
import CasinoIcon from '@material-ui/icons/Casino';

import Board from './Board.js';
import Notes from './Notes.js';

function App() {
  let location = useLocation();

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Tabs value={location.pathname}>
            <Tab label="Game Board" value="/board" component={Link} to="board" />
            <Tab label="Material" value="/material" component={Link} to="material" />
            <Tab label="Notes" value="/notes" component={Link} to="notes" />
            <Tab label="Character" value="/character" component={Link} to="character" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/board"> <Board /> </Route>
        <Route path="/material"> <Board /> </Route>
        <Route path="/notes"> <Notes /> </Route>
        <Route path="/character"> <Board /> </Route>
      </Switch>
    </div>
  );
}

export default App;
