import React from 'react';

import ImageViewer from './ImageViewer.js';
import MarkdownViewer from './MarkdownViewer.js';

const path = require('path');

function FileViewer(props) {
  if (props.src === "") return "";
  const ext = path.extname(props.src);
  if (ext === ".md") return (<MarkdownViewer src={props.src} />);
  if (ext === ".png") return (<ImageViewer src={props.src} />);
  return "";
}

export default FileViewer;
