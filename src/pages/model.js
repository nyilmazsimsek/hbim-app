import React from "react";
import * as OV from 'online-3d-viewer';

const Model = () => {
  OV.Init3DViewerElements(); // init all viewers on the page
  return (
    <div>
      <h1>
        Model Page
      </h1>

      <div className="online_3d_viewer" model="models/hundred_cubes.obj"></div>

    </div>
  );
};

export default Model;