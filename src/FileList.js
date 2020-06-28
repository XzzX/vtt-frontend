import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import CasinoIcon from '@material-ui/icons/Casino';

function FileList(props) {
  let fileList = "";
  if (props.files !== undefined) {
    fileList = props.files.map( (file) =>
      <ListItem button dense key={file} onClick={() => props.onClick(file)}>
        <ListItemIcon>
          <IconButton onClick={() => console.log("Hallo")}>
            <CasinoIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText primary={file} />
      </ListItem>
    );
  }

  return (
    <React.Fragment>
      {fileList}
    </React.Fragment>
  );
}

export default FileList;
