import React, {useState, useEffect} from 'react';
import './Content.css'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FileList from './FileList.js';
import FileViewer from './FileViewer.js';

function Content() {
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState("");

  useEffect( () => {
    fetch('api/content')
      .then(res => res.json())
      .then(json => setContent(json));
  }, []);

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" spacing={5}>
        <Grid item className="paper">
          <Paper elevation={3}>
            <FileList 
              files={content.files} 
              selected={selected} 
              onClick={(item) => setSelected(item)} />
          </Paper>
       </Grid>
        <Grid item className="paper">
          <Paper elevation={3}>
            <FileViewer src={selected} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Content;
