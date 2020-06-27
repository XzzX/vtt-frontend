import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IconButton from '@material-ui/core/IconButton';
import CasinoIcon from '@material-ui/icons/Casino';

import Board from './Board.js';
import Notes from './Notes.js';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tab;
  switch(value){
    case 0: 
      tab = <Board />;
      break;
    case 2:
      tab = <Notes />;
      break;
    default:
      break;
  }

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar center>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Game Board" />
            <Tab label="Material" />
            <Tab label="Notes" />
            <Tab label="Charakter" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {tab}
    </div>
  );
}

export default App;
