import React, {useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import IconButton from '@material-ui/core/IconButton';
import Casino from '@material-ui/icons/Casino';

const stats = {
  skills: {
    "verborgenes erkennen": 80,
    "verborgen bleiben": 60,
    "überreden": 20
  }
}

function ChangeValueDialog(props) {
  const {onClose, name, value, open} = props;

  const [currentValue, setCurrentValue] = useState(value);

  const handleClose = () => {
    onClose(50);
  };

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Wert ändern: {name}</DialogTitle>
      <DialogContent>
        <TextField
          id="name"
          label="Wert"
          type="number"
          value={currentValue}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Bestätigen
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function SkillItem(props){
  return (
    <ListItem dense button onClick={props.onClick}>
      <ListItemText
        primary={props.name}
        secondary={props.value}
      />
      <ListItemSecondaryAction>
        <IconButton>
          <Casino />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

function Character() {
  const [open, setOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(Object.keys(stats.skills)[0]);

  const handleClose = (value) => {
    setOpen(false);
  }

  const openDialog = (name) => {
    setCurrentSkill(name);
    setOpen(true);
  }

  function generateSkillList(skills) {
    return Object.keys(skills).map( (key) => <SkillItem onClick={() => openDialog(key)} name={key} value={skills[key]} />);
  }

  return (
    <Container maxWidth="sm">
      <ChangeValueDialog
        onClose={handleClose}
        name={currentSkill}
        value={stats.skills[currentSkill]}
        open={open}
      />
      <List dense subheader={<ListSubheader>Fähigkeiten</ListSubheader>}>
        {generateSkillList(stats.skills)}
      </List>
    </Container>
  );
}

export default Character;
