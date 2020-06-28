import React from 'react';

import PinchZoomPan from "react-responsive-pinch-zoom-pan";

function ImageViewer(props) {
  return (
    <PinchZoomPan minScale={0.1} maxScale={8} position={"center"}>
      <img src={props.src} alt={props.src} />
    </PinchZoomPan>
  );
}

export default ImageViewer;
