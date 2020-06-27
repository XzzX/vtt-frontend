import React, {useState, useEffect} from 'react';
import './Board.css'

import PinchZoomPan from "react-responsive-pinch-zoom-pan";

function Board() {
  const [board, setBoard] = useState({
    "background": ""
  });

  useEffect( () => {
    fetch('api/board')
      .then(res => res.json())
      .then(json => setBoard(json));
  }, []);

  return (
    <div className="fill">
      <PinchZoomPan minScale={0.1} maxScale={8} position={"center"}>
        <img src={board["background"]} />
      </PinchZoomPan>
    </div>
  );
}

export default Board;
