import React, {useState, useEffect} from 'react';

import ReactMarkdown from 'react-markdown';

function MarkdownViewer(props) {
  const [source, setSource] = useState("");

  useEffect( () => {
    fetch(props.src)
      .then(res => res.text())
      .then(text => setSource(text));
  }, [props.src]);

  return (
    <div>
      <ReactMarkdown source={source} />
    </div>
  );
}

export default MarkdownViewer;
