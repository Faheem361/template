import React from "react";
import thelore from "../../assets/thelore.png";
import thelore2 from "../../assets/thelore2.png";
import "./roadmap.css";
function Roadmap() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div>
            <img src={thelore} alt="side" className="side_img" />
            <img src={thelore2} alt="side" className="side_img2" />
            <h3 className="text-roadmap">Road Map</h3>
            <p className="text-pararaod">
              While exploring the outlines of Surge we realized there is a huge
              gap between the virtual and physical world. Bridging them together
              by creating an art project for the community, by the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
