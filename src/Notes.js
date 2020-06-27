import React, {useState, useEffect} from 'react';
import './Notes.css'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
//import 'prismjs/components/prism-markdown';
import ReactMarkdown from 'react-markdown';

function Notes() {
  const [notes, setNotes] = useState("");

  useEffect( () => {
    fetch('api/notes')
      .then(res => res.text())
      .then(text => setNotes(text));
  }, []);

  return (
    <div className="code">
      <Grid container direction="row" justify="center" spacing={5}>
        <Grid item className="paper">
          <Paper elevation={3}>
            <Editor
              value={notes}
              onValueChange={code => setNotes(code)}
              highlight={code => code}
              padding={10}
            />
          </Paper>
        </Grid>
        <Grid item className="paper">
          <Paper elevation={3}>
            <ReactMarkdown source={notes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Notes;
